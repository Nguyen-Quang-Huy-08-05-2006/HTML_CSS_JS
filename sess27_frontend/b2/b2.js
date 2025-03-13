function nameSearch(name,arr){
    let list=[]
    let flag=0
    for(let i=0;i<arr.length;i++){
        if(arr[i].endsWith(name)){
            list.push(arr[i])
            flag++
        }
    }
    if(flag==0){

        return 'Khong co sinh vien trong danh sach'
    }
    return list
}
function findIndex(name,arr){
    let index=arr.findIndex((student => student === name));
    return index
}
function deleteStudent(index,arr){
    arr.splice(index,1)
    return 'Xoa Thanh cong'
}
let students=[]
let end = false
do{
    let a = 0
    let b=0
    answer=prompt("1.Nhập danh sách sinh viên.\n2.Hiển thị danh sách sinh viên.\n3.Tìm sinh viên theo tên..\n4.Xóa sinh viên khỏi danh sách.\n5.Thoát.\nCâu trả lời của bạn:")
    if(isNaN(answer)||answer<1||answer>5){
        alert("Sai cu phap")
        continue;
    }
    switch(answer){
        case '1':
            students=[]
            let num = +prompt("Nhap so luong sinh vien")
            if(isNaN(num) || num < 1){
                alert("Du lieu khong hop le")
                break
            }
            for(let i=0;i<num;i++){
                students[i]=prompt(`Nhap vao day du ho ten sinh vien thu ${i+1}`)
            }
            if(!Array.isArray(students)){
                alert("Du lieu nhap khong hop le")
                break
            }
            alert("Nhap thanh cong")
        break;
        case '2': 
            alert(students)
        break;
        case '3':
            let name=prompt("Nhap ten sinh vien can tim kiem:")
            let result = nameSearch(name,students)
            alert(result)
        break;
        case '4':
            let name2=prompt("Nhap ten sinh vien can xoa:")
            let result3 = nameSearch(name2,students)
            if (!Array.isArray(result3)){
                alert("Khong tim thay ten sinh vien can xoa")
                break
            }
            let result4=findIndex(result3[0],students)
            let final=prompt(`Tim thay sinh Vien ${result3[0]} \nBan co chac chan muon xoa khong?\n Y/N:`)
            if(final=='y'||final=='Y'){
                let result5 = deleteStudent(result4,students)
                alert(result5)
            }else{
                break
            }
        break;
        case '5':
            alert("Thoat chuong trinh")
            end = true
        break;
    }
}while(!end);