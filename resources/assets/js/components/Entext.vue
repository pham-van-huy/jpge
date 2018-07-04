<template>
  <div role="tabpanel" class="tab-pane active" id="home">
    <div class="row">
      <div class="col-sm-8 mobile-pull">
        <article role="login">
          <div class="input-group">
            <input type="file" ref="fileEntext" class="form-control" name="email" placeholder="Email" @change="getFileEntext()">
          </div>

          <div class="input-group">
            <textarea class="form-control" name="text" placeholder="Enter text here" maxlength="200" v-model="text">
            </textarea>
          </div>
          <div class="form-group">
            <input type="submit" class="btn btn-success btn-block"  value="SUBMIT" @click="submit">
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return  {
        file: null,
        text: null
      }
    },
    methods: {
      getFileEntext() {
        this.file = this.$refs.fileEntext.files[0]
      },
      submit() {
        let dataEntext = new FormData();
        dataEntext.append('image', this.file)
        dataEntext.append('text', this.text)

        axios.post('/en-text', dataEntext).then(res => {

        }).catch(err => {

        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  #home {
    .input-group {
      margin-bottom: 10px;
    }
  }
</style>
