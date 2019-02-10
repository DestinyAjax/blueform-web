    <template>
     <input :type="type" :placeholder="placeholder" v-model="value">
    </template>
    <script>
    export default  {
      name: "InputField",
      props: {
       disabled: {type: Boolean, default: false},
       placeholder: {type: String, default: ""},
       value: {twoWay: true, default: ""},
       type: {type: String, default: ""}
      }
     }
    </script>