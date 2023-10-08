<!--框架首页 - 包括左侧导航栏的实现-->
<template>
  <el-row class="container">
    <Header></Header>
    <el-col :span="24" class="main">
      <section class="content-container">
        <el-col :span="24" class="content-wrapper" ref="coms">
          <router-view v-slot="{ Component }">
            <keep-alive :exclude="exclude">
              <component :is="Component" />
            </keep-alive>
          </router-view>
        </el-col>
      </section>
    </el-col>
    <Footer></Footer>
  </el-row>
</template>
<script>
// import utils from '@/common/js/utils.js'
import Header from "@/layout/Header.vue"
import Footer from "@/layout/BgFooter.vue";

export default {
  name: 'Home',
  data() {
    return {
      exclude: ['test', 'ApplicationBlackList', 'ApplicationAdd', 'stuInfo', 'ApplicationDetail', 'stuInfoEdit', 'StuInfoEdit', 'syllabiDetail', 'operateStaff', 'applyDetail', 'SupplierDetail', 'supplierManagement', 'AssetsClass', 'staffOperate', 'staffOperateFor', 'atSchoolList', 'helpPdf',
        'bulletinAdd',
        // 'bulletinLook',
        'bulletinList',
        'add-line',
        'test-bank',
        'student-info',
        'SummerDetail',
        'ProjectDetail',
        'projectCampDetail',
        'questionCard',
        'groupWebConfig',
        'Attendance',
        'AttendanceAllocation',
        'AddAttendanceGroup',
        'DayoffDetail',
        'NewConfiguration',
        'StudentDetail',
        'myDropDetail',
        'admitDetail',
        // 'statisticsDetail',
        'EvaluationListDetail',
        'GuideDetail',
        'SelfEvaluationGuideLecturesDetail',
        'AddGuide',
        'ActivityApplyDetail',
        'CampProjectDetail',
        'NewForm',
        'AttendanceDetail',
        'SalaryDetail',
        'ArrangingIndex',
        'ScheduleCheckIndex', // 课表检查
        'SchduleView', // 课表查看
        'TeacherSchedule',
        'ClubList',
        'ClubListDetail',
        'NoticeDetil',
        'EvaluationDetail',
        'ExchangeDetail',
        'ExchangeJoinDetail',
        'JobBoardDetail',
        'RecruitmentForm',
        'LoanDetails',
        'RepaymentSchedule',
        'PerformanceAssignmentDetail',
        'AssessmentProgressDetail',
        'AnnualEvaluation-EvaluationList',
        'AnnualEvaluation-EvaluationDetail',
        'StaffEvaluationDetail',
        'EvaluationAddEdit',
        'WholeConfig',
        'AddDropInPage'

        // 'schoolWebsiteConfig',
        // 'stuConfig',
        // 'postConfig'
        // 'applyClub',
        // 'clubDetail','clubList',
      ]
    }
  },
  components: {
    Header,
    Footer
  },
  created() {
    const self = this
    // utils.bus.$on('closeTab', (tag, index) => {
    //   closeVm(self.$refs.coms, tag, index)
    // })

  },
  methods: {},

}
</script>
<style lang="scss" scoped>
.container {
  position: absolute;
  top: 0px;
  bottom: 0px;
  width: 100%;
  .main {
    display: flex;
    position: absolute;
    top: 56px;
    bottom: 0px;
    overflow: hidden;
    .content-container {
      position: relative;
      box-sizing: border-box;
      // background: $bg-color;
      flex: 1;
      display: flex;
      flex-direction: column;
      height: 100%;
      overflow-x: scroll;
      // overflow: hidden;
      .breadcrumb-container {
        span.el-tag {
          height: 30px;
          line-height: 30px;
          margin-right: 10px;
          // background: $bg-color;
          color: #919191;
          border: none;
          .el-icon-close {
            color: #919191 !important;
          }
        }
      }
      .content-wrapper {
        height: 100%;
        width: 100%;
        min-width: 1140px;
        box-sizing: border-box;
        // padding:30px 30px 50px;
        padding: 30px 100px 50px;
        flex: 1;
        overflow-y: auto;
      }
      @media screen and (max-width: 1600px) {
        .content-wrapper {
          padding: 30px 30px 50px;
        }
      }
    }
  }
}
</style>
