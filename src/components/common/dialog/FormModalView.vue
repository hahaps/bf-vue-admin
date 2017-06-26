<template>

  <mu-dialog :open="true" scrollable
             :dialogClass="width"
             bodyClass="mu-dialog-container">
    <div class="mu-dialog-header mu-raised-button-primary mu-flat-button-primary">
      <div class="title">{{title}}</div>
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
        <div class="form-field" v-for="(field, $index) in fields" :key="$index">
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
                               @change="valChange($index)">
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
        <div class="form-bottom">
          <slot name="form-bottom">
            <mu-flat-button :label="cancelLabel" :to="closeTo" />
            <mu-raised-button :label="submitLabel" @click="submit" primary/>
          </slot>
        </div>
      </form>
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
      fields: {
        type: Array,
        default: []
      },
      loading: {
        type: Boolean,
        default: false
      },
      cancelLabel: {
        type: String,
        default: 'Cancel'
      },
      submitLabel: {
        type: String,
        default: 'Submit'
      }
    },
    data () {
      return {
        models: {},
        errors: {}
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
      valChange ($index) {
        let field = this.fields[$index]
        this._validate(field)
        this.$emit('val-change', {
          index: $index,
          value: this.models[field.slug],
          models: this.models
        })
      },
      submit () {
        for (let index in this.fields) {
          this._validate(this.fields[index])
        }
        this.$emit('submit', this.models)
      }
    }
  }
</script>
