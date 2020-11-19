<template>
  <div style="min-width: 1280px">
    <Layout>
      <Header class="layout-header">
        <LyHeader />
      </Header>
      <Content class="content">
        <router-view />
      </Content>
      <Footer class="layout-footer">
        <LyFooter />
      </Footer>
    </Layout>
  </div>
</template>

<script>
import LyHeader from "./LyHeader/index";
import LyFooter from "./LyFooter/index";
export default {
  name: "default",
  components: {
    LyFooter,
    LyHeader
  }
}
</script>

<style scoped>
  .layout-header {
    background-color: #f3f3f3;
    padding: 0;
    min-height: 50px;
    
  }
  .content{
    background-color: #FFFFFF;
  }
  .layout-footer{
    background-color: #232730;
    text-align: center
  }
</style>
