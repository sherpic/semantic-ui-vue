<template>
  <div>
    <h1>Divider</h1>
    <demo-panel>
      <template slot="demo">
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
        <ui-divider class="horizontal">OR</ui-divider>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum</p>
        <ui-divider></ui-divider>
      </template>
      <template slot="code">{{demo}}</template>
    </demo-panel>
    <options-table></options-table>
    <p>Pass in all other <a target="_blank" href="http://semantic-ui.com/elements/divider.html">options</a> as a class. <br>
    For instance a fitted divider: </p>
    <demo-panel>
      <template slot="demo">
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
        <ui-divider class="fitted"></ui-divider>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum</p>
      </template>
      <template slot="code">{{demoOther}}</template>
    </demo-panel>
  </div>
</template>
<script>
  export default {
    name: 'doc-divider',
    data: () => ({
      demo: `<p>Lorem ipsum ....
<ui-divider class="horizontal">OR</ui-divider>
Lorem ipsum ...</p>
<ui-divider></ui-divider>`,
      demoOther: `<p>Lorem ipsum ...
<ui-divider class="fitted"></ui-divider>
Lorem ipsum ...</p>`
    })
  };
</script>