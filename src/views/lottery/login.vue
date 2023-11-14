<template>
  <article class="login-article">
    <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" label-width="60px" class="ruleForm">
      <el-form-item label="用户名" prop="userName">
        <el-input v-model="ruleForm.userName" type="password" autocomplete="off" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="ruleForm.password" type="password" autocomplete="off" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)">Submit</el-button>
        <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
      </el-form-item>
    </el-form>
  </article>
</template>
<script setup name="Login">
import { useChannelStore } from '@/stores/channel'
import { useHandlePages } from '@/hooks/usePagination'
import { getFilesApi } from '@/api'
import { onMounted } from 'vue'

const ruleFormRef = ref()

const validateName = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入用户名'))
  } else {
    if (ruleForm.password === '') {
      if (!ruleFormRef.value) return
      ruleFormRef.value.validateField('password', () => null)
    }
    callback()
  }
}
const validatePass = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入密码'))
  } else {
    callback()
  }
}

const ruleForm = reactive({
  userName: '',
  password: ''
})

const rules = {
  userName: [{ validator: validateName, trigger: 'blur' }],
  password: [{ validator: validatePass, trigger: 'blur' }]
}

onMounted(() => {
  getFiles()
})

const getFiles = async () => {
  try {
    const res = await getFilesApi()
    console.info(res)
  } catch (error) {
    console.log(error)
  }
}

const submitForm = (formEl) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!')
      return false
    }
  })
}
const resetForm = (formEl) => {
  if (!formEl) return
  formEl.resetFields()
}

</script>
<style lang="scss" scoped>
.login-article {
  width: 600px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  margin: 10px auto;
  .ruleForm {
    .el-form-item {
      margin-bottom: 18px;
    }
  }
}
</style>
