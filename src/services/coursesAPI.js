import axiosClient from './axiosClient'
const coursesAPI = {
    getCourses:() => {
        return axiosClient.get("/QuanLyKhoaHoc/LayDanhSachKhoaHoc");
    },
    getCoursesByCategory:(category) => {
        const params = {
            maDanhMuc:category,
        }
        // return axiosClient.get("/QuanLyKhoaHoc/LayDanhSachKhoaHoc"=${category});
        return axiosClient.get("/QuanLyKhoaHoc/LayDanhSachKhoaHoc",{params});
    }
}

export default coursesAPI

// Cách sài
// import coursesAPI from 'src/services/coursesAPI';

// const{data} = await coursesAPI.getCourses();