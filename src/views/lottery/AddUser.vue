<template>
  <article class="login-article">
    <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" label-width="60px" class="ruleForm">
      <el-form-item label="用户名" prop="userName">
        <el-input v-model="ruleForm.userName" autocomplete="off" clearable />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)">Submit</el-button>
        <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
      </el-form-item>
    </el-form>
  </article>
</template>
<script setup name="AddUser">
import { useChannelStore } from '@/stores/channel'
import { useHandlePages } from '@/hooks/usePagination'
import { apiInsertUser } from '@/api'
import { onMounted } from 'vue'

const { proxy } = getCurrentInstance()
const ruleFormRef = ref()

const validateName = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入用户名'))
  } else {
    callback()
  }
}
const ruleForm = reactive({
  userName: ''
})
const rules = {
  userName: [{ validator: validateName, trigger: 'blur' }]
}

onMounted(() => {
})

const submitForm = async (formEl) => {
  try {
    if (!formEl) return
    await formEl.validate()
    const res = await apiInsertUser({ userName: ruleForm.userName })
    if (res.success) {
      proxy.$message.success('添加成功')
    }
  } catch (error) {
    console.log(error)
    proxy.$message.error(error)
  }
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
