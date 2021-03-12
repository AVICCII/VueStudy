import request from '@/utils/request'

export default {
     //1.添加课程信息
    //current当前页，limit每页记录数，teacherQuery条件对象
    addCourseInfo(courseInfo) {
        return request({
            url: `/eduService/edu-course/addCourseInfo`,
            method: 'post',
            data:courseInfo
        })
    },
    //2.查询所有讲师
    getListTeacher(){
        return request({
            url: `/eduService/edu-teacher/findAll`,
            method: 'get'
        })  
    }
}