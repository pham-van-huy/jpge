<template>
  <div role="tabpanel" class="tab-pane" id="profile">
    <div class="row">
      <div class="col-sm-8 mobile-pull">
        <article role="login">
          <div class="input-group">
            <input type="file" class="form-control" name="email" placeholder="Email">
          </div>

          <div class="input-group">
            <textarea class="form-control" name="text" placeholder="Result here" disabled="true">
            </textarea>
          </div>
          <div class="form-group">
            <input type="submit" class="btn btn-success btn-block"  value="SUBMIT">
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="scss" scoped>
  #profile {
    .input-group {
      margin-bottom: 10px;
    }
  }
</style>
