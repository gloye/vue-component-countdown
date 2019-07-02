<template>
  <button
    class="countdown-button"
    :disabled="disabled"
    @click="handleClick"
  >{{disabled?countdown:countdownText}}</button>
</template>

<script>
export default {
  name: "countdown",
  props: {
    countdownProp: {
      type: Number,
      default: 60
    },
    countdownText: {
      type: String,
      default: "发送验证码"
    }
  },

  data() {
    return {
      countdown: 0,
      disabled: false
    };
  },
  methods: {
    handleClick() {
      this.$emit("countdownStart");
      this.countdownFn()
    },
    countdownFn() {
      this.disabled = true;
      let timeout;
      const fn = () => {
        timeout = setTimeout(() => {
          if (this.countdown > 0) {
            this.countdown = this.countdown - 1;
            fn();
          } else {
            clearTimeout(timeout);
            this.disabled = false;
            this.$emit("countdownEnd");
          }
        }, 1000);
      };
      fn();
    },
    init() {
      this.countdown = this.countdownProp;
    }
  },
  mounted() {
    this.init();
  }
};
</script>


