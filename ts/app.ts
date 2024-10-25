import { TDuThuyen, TDangHoc, TNhanVien, TDiemDen, TGioiTinh} from './data.js'
import { nv_arr, duthuyen_arr, diemden_arr} from './data.js'

const hien1DiemDen = ( diem:TDiemDen) => {
    return `<div>
     <h4>Điểm đến: ${diem.tendiemden} </h4>
     <p>Ghi chú: ${diem.ghichu}</p>
    </div>`;
}

export const showlistdiemden = () => {
     const html_arr = diemden_arr.map(hien1DiemDen); //call back
     return html_arr.join("");
}
const phaicuanv = (phai:TGioiTinh) => {
    if (typeof phai =='boolean') {
        if (phai==true) return "Nữ"; 
        else return "Nam";
    }
    else return phai as string;
}
const hien1NV = (nv:TDangHoc) =>{
    return `<div>
     <h4>Họ tên: ${nv.ten} </h4>
     <p>Điện thoại: ${nv.phone}</p>
     <p>Phái: ${ phaicuanv(nv.phai) }</p>
     <p>Ghi chú: ${nv.ghichu}</p>
    </div>`;
}  
export const showlistnhanvien = ()=>{
    const html_arr = nv_arr.map(hien1NV);
    return html_arr.join("");
}

const hien1DuThuyen = (duthuyen:TDuThuyen) =>{
    return `<div>
     <img src="${duthuyen.hinh}">
     <h4>${duthuyen.ten} </h4>
     <p>${duthuyen.diachi}</p>
    </div>`;
}
export const showlistduthuyen = ()=>{
    const html_arr =duthuyen_arr.map(hien1DuThuyen);
    return html_arr.join("");
}
