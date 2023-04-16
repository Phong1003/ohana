<template>
  <header class="container d-flex flex-column justify-content-center">
    <div class="header__nav"></div>
    <div class="header__search">
      <div class="search__contain d-flex align-items-center flex-row">
        <img src="~/assets/icon/ohanaLogo.svg" alt="OhanaLogo" />
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style>
.search__contain {
  margin: auto;
  padding: 0 32px;
  height: inherit;
  width: 100%;
}
.header__nav {
  height: 40px;
  opacity: 1;
  background: #f7346f;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  z-index: 20;
}

.header__search {
  width: 100%;
  height: 72px;
  position: fixed;
  z-index: 20;
  top: 40px;
  left: 0px;
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
  visibility: visible;
  background-color: #ffffff;
  -webkit-box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.12);
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.12);
}
</style>