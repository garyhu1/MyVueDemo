<template>
    <div>
        <alert :show.sync="showRight" placement="top-right" duration="3000" type="success" width="400px" dismissable>
  <span class="icon-ok-circled alert-icon-float-left"></span>
  <strong>Well Done!</strong>
  <p>You successfully read this important alert message.</p>
</alert>

<alert :show.sync="showTop" placement="top" duration="3000" type="danger" width="400px" dismissable>
  <span class="icon-info-circled alert-icon-float-left"></span>
  <strong>Heads up!</strong>
  <p>This alert needs your attention.</p>
</alert>
    <div>
        <accordion :one-at-atime="checked" type="info">
  <panel is-open type="primary">
    <strong slot="header"><u>Panel #1</u></strong>
    ...
  </panel>
  <panel header="Panel #2">
    ...
  </panel>
  <panel header="Panel #3">
    ...
  </panel>
  <panel header="Panel #4">
    ...
  </panel>
</accordion>
    </div>
    </div>
</template>

<script>
    import alert from 'vue-strap/src/alert';
    import accordion from 'vue-strap/src/alert';
    import panel from 'vue-strap/src/alert';
    export default {
        components: {
            alert,
            accordion,
            panel
        }
    }
</script>


<style>
</stlye>