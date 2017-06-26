<template>

  <mu-dialog :open="true" scrollable
             :dialogClass="width"
             bodyClass="mu-dialog-container">
    <div class="wizard-main">
      <div class="wizard-steps mu-paper-1">
        <div class="top-line mu-raised-button-primary"></div>
        <div class="wizard-header">
          <div class="title mu-flat-button-primary">{{title}}</div>
        </div>
        <mu-stepper :activeStep="activeStep" orientation="vertical">
          <mu-step v-for="(step, $index) in steps" :key="$index">
            <mu-step-label>
              {{step.label}}
            </mu-step-label>
          </mu-step>
        </mu-stepper>
      </div>
      <div class="wizard-content">
        <div class="top-line mu-raised-button-primary"></div>
        <div class="wizard-content-header">
          <div class="title mu-flat-button-primary">{{steps[activeStep].label}}</div>
          <div class="close">
            <mu-icon-button :to="closeTo" icon="clear"></mu-icon-button>
          </div>
        </div>
        <div class="mu-dialog-content">
          <div v-show="loading" class="form-loading">
            <div class="loading-back"></div>
            <mu-circular-progress :size="90" :strokeWidth="3"/>
          </div>
          <form class="form-content" :name="slug">
            <div v-for="(step, $d) in steps" :key="$d" class="step-content" v-show="activeStep==$d">
              <div class="form-field" v-for="(field, $index) in step.fields" :key="$index">
                <slot :name="'form-field-' + field.slug">
                  <div v-if="!field.type || field.type === 'text'">
                    <mu-text-field :label="field.label" v-model="models[field.slug]"
                                   :errorText="errors[field.slug]"
                                   :hintText="field.hint" labelFloat fullWidth/>
                  </div>
                  <div v-if="field.type === 'password'">
                    <mu-text-field :label="field.label" type="password"
                                   v-model="models[field.slug]"
                                   :errorText="errors[field.slug]"
                                   :hintText="field.hint" labelFloat fullWidth/>
                  </div>
                  <div v-if="field.type === 'textArea'">
                    <mu-text-field :label="field.label" multiLine :rows="field.rows?field.rows:4"
                                   v-model="models[field.slug]"
                                   :errorText="errors[field.slug]"
                                   :rowsMax="field.rowsMax?field.rowsMax:10" :hintText="field.hint" labelFloat fullWidth/>
                  </div>
                  <div v-if="field.type === 'select'">
                    <mu-select-field v-model="models[field.slug]"
                                     :errorText="errors[field.slug]"
                                     :maxHeight="field.maxHeight?field.maxHeight:300"
                                     :multiple="field.multiple" :label="field.label"
                                     :hintText="field.hint"
                                     @change="valChange($d, $index)">
                      <mu-menu-item v-for="(opt, $idx) in field.options" :key="$idx" :value="opt.val" :title="opt.label"/>
                    </mu-select-field>
                  </div>
                  <div v-if="field.type === 'checkbox'">
                    <label>{{field.label}}</label>
                    <mu-checkbox :name="field.slug" nativeValue="opt.val" v-model="models[field.slug]"
                                 :label="opt.label"
                                 v-for="(opt, $idx) in field.options" :key="$idx"/>
                    <div class="field-error">{{errors[field.slug]}}</div>
                  </div>
                  <div v-if="field.type === 'radio'">
                    <label>{{field.label}}</label>
                    <mu-radio :label="opt.label" :name="field.slug"
                              :nativeValue="opt.val"
                              v-model="models[field.slug]"
                              v-for="(opt, $idx) in field.options" :key="$idx" />
                    <div class="field-error">{{errors[field.slug]}}</div>
                  </div>
                </slot>
              </div>
            </div>
            <div class="form-bottom">
              <slot name="form-bottom">
                <mu-flat-button :disabled="activeStep==0" :label="preLabel" @click="preStep" />
                <mu-raised-button v-show="activeStep < steps.length - 1" :label="nextLabel" @click="nextStep" primary/>
                <mu-raised-button v-show="activeStep == steps.length - 1" :label="submitLabel" @click="submit" primary/>
              </slot>
            </div>
          </form>
        </div>
      </div>
    </div>
  </mu-dialog>
</template>

<script>
  export default {
    props: {
      width: {
        type: String,
        default: 'normal'
      },
      title: String,
      closeTo: Object,
      slug: String,
      steps: {
        type: Array,
        default: []
      },
      loading: {
        type: Boolean,
        default: false
      },
      preLabel: {
        type: String,
        default: 'Previous'
      },
      nextLabel: {
        type: String,
        default: 'Next'
      },
      submitLabel: {
        type: String,
        default: 'Submit'
      }
    },
    data () {
      return {
        models: {},
        errors: {},
        activeStep: 0
      }
    },
    methods: {
      _validate (field) {
        let err
        if (typeof field.validate === 'function') {
          err = field.validate(this.models[field.slug], this.models, field)
          this.errors[field.slug] = err
        }
      },
      valChange ($d, $index) {
        let field = this.steps[$d].fields[$index]
        this._validate(field)
        this.$emit('val-change', {
          index: $index,
          value: this.models[field.slug],
          models: this.models
        })
      },
      preStep () {
        this.activeStep -= 1
      },
      nextStep () {
        this.activeStep += 1
      },
      submit () {
        for (let idx in this.steps) {
          for (let index in this.steps[idx].fields) {
            this._validate(this.steps[idx].fields[index])
          }
        }
        this.$emit('submit', this.models)
      }
    }
  }
</script>
