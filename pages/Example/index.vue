<template>
  <div>
    <div id="px">This is 22 px</div>
    <div id="rem">This is 22 rem</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@mixin font-size($pixels) {
  $rem: ($pixels * 0.0625);
  font-size: $rem + rem;
  font-size: $pixels + px;
}

#px {
  font-size: 22px;
}

#rem {
  @include font-size(22);
}
</style>