const classNumber = document.querySelectorAll(".container_list ul li");
const partListI = document.getElementById("myul");
const listLessons = {
    class1: {
        partOne: {
            
        },
        partTow: {

        }
    },
    class2: {
        partOne: {
            
        },
        partTow: {

        }
    },
    class3: {
        partOne: {
            
        },
        partTow: {

        }
    },
    class4: {
        partOne: {
            
        },
        partTow: {

        }
    },
    class5: {
        partOne: {
            
        },
        partTow: {

        }
    },
    class6: {
        partOne: {
            post1:" bài 1 : Tập hợp. phần tử của tập hợp  ",
            post2:"bài 2 : tập hợp các số tự nhiên ",
            post3:"bài 3 : ghi các số tự nhiên ",
            post4:" bài 4 : số phần tử của một tập hợp . tập hợp con ",
            post5:" bài 5 : pháp cộng và phép nhân ",
            post6:" bài 6: phép trừ và phép chia ",
            post7:" bài 7 : lũy thừa với số mũ tự nhiên, nhân 2 lũy thừa cùng cơ số ",
            post8:"bài 8 : chia 2 lũy thừa cùng cơ số",
            post9:" bài 9 : thứ tự thực hiện phép tính ",
            post10:"bài 10 : tính chất chia hết của một tổng ",
            post11:"bài 11 : dấu hiệu chia hết cho 2 và 5",
            post12:"bài 12: dấu hiện chia hết cho 3,6 và 9",
            post13:"bài 13: ước và bội ",
            post14:"bài 14: số nguyên tố. hợp số . bảng số nguyên tố ",
            post15:"bài 15: phân tích một số có thừa số nguyên tố ",
            post16:"bài 16: ước chung bội chung ",
            post17:"bài 17: ước chung lớn nhất và nhõ nhất  ",
            post18:"bài 18: bội chung nhỏ nhất và lớn nhất",
            post19:"bài 19: làm quen với số nguyên âm ",
            post20:"bài 20: tập hợp các số nguyên ",
            post21:"bài 21: thứ tự trong tập hợp các số nguyên",
            post22:"bài 22: cộng 2 số nguyên cùng dấu ",
            post23:"bài 23: cộng 2 số nguyên khác dấu ",
            post24:"bài 24: tính chất của phép cộng các số nguyên ",
            post25:"bài 25: phép trừ hai số nguyên ",
            post26:"bài 26 : quy tắc giấu ngoặc ",
            post27:"bài 27: quy tắc chuyển vế ",
            post28:"bài 28 : nhân 2 số nguyên khác dấu ",
            post29:"bài 29 : nhân 2 số nguyên cùng dấu",
            post30:"bài 30: tính chất của phép nhân",
            post31:"bài 31: bội và ước của một số nguyên ",
            post32:"bài 32: điểm đường thẳng",
            post33:"bài 33: 3 điểm thẳng hàng ",
            post34:"bài 34: đường thẳng đi qua 2 điểm ",
            post35:"bài 35 : tia",
            post36:"bài 36: đoạn thẳng",
            post37:" bài 37: độ dài đường thẳng ",
            post38:"bài 38 :khi nào thì AM + MB = AB ?",
            post39:" bài 39: vẽ đoạn thẳng cho biết độ dài ",
            post40:"bài 40: trung điểm của đoạn thẳng  ",
        },
        partTow:{

        }
    },
};

const listUnits = {
    // nhúng link bằng cách http thêm embe + id
    unit1: {
        write: "bài 1 : Tập hợp. phần tử của tập hợp  ",
        content: "Nội Dung Cần Nắm Trong bài Học . Tập hợp và phần tử của tập hợp Tập hợp là một khái niệm cơ bản của toán học (không định nghĩa).Tập hợp được kí hiệu là các chữ cái in hoa: A, B, C, D, …   <br/> cần lưu ý về 2 kí hiệu THUỘC và Không Thuộc <br/> kí hiệu thuộc là ∈ và không thuộc là ∉ <br/> hiểu đơn giản là nếu số ko xuất hiện trong tập hợp thì nó không thuộc trong TẬP HỢP đó <br /> cần nắm chắc các phép hợp và giao <br /> ∪ (hợp) đại diện cho phép toán tập hợp hợp, tức là tạo ra một tập hợp mới chứa tất cả các phần tử từ các tập hợp ban đầu mà không lặp lại.<br/> ∩ (giao) đại diện cho phép toán tập hợp giao, tức là tạo ra một tập hợp mới chứa tất cả các phần tử mà hai tập hợp ban đầu có chung.",
        video: "https://www.youtube.com/embed/F4pCnUHd_G0",
        works: {
            basic:"https://quizizz.com/join?gc=84082601",
            medium:"https://quizizz.com/join?gc=72750017",
            advanced: "https://quizizz.com/join?gc=82018049",
        }
    },
    unit2: {
        write:"",
        content:"",
        video:"",
        works: {
            basic:"",
            medium:"",
            advanced:"",
        },
    },
    unit3: {
        write:"",
        content:"",
        video:"",
        works: {
            basic:"",
            medium:"",
            advanced:"",
        },
    },
    unit4: {
        write:"",
        content:"",
        video:"",
        works: {
            basic:"",
            medium:"",
            advanced:"",
        },
    },
    unit5: {
        write:"",
        content:"",
        video:"",
        works: {
            basic:"",
            medium:"",
            advanced:"",
        },
    },
    unit6: {
        write:"",
        content:"",
        video:"",
        works: {
            basic:"",
            medium:"",
            advanced:"",
        },
    },
    unit7: {
        write:"",
        content:"",
        video:"",
        works: {
            basic:"",
            medium:"",
            advanced:"",
        },
    },
    unit8: {
        write:"",
        content:"",
        video:"",
        works: {
            basic:"",
            medium:"",
            advanced:"",
        },
    },
    unit9: {
        write:"",
        content:"",
        video:"",
        works: {
            basic:"",
            medium:"",
            advanced:"",
        },
    },
    unit10: {
        write:"",
        content:"",
        video:"",
        works: {
            basic:"",
            medium:"",
            advanced:"",
        },
    },
    unit11: {
        write:"",
        content:"",
        video:"",
        works: {
            basic:"",
            medium:"",
            advanced:"",
        },
    },
    unit12: {
        write:"",
        content:"",
        video:"",
        works: {
            basic:"",
            medium:"",
            advanced:"",
        },
    },
    unit13: {
        write:"",
        content:"",
        video:"",
        works: {
            basic:"",
            medium:"",
            advanced:"",
        },
    },

};

for(let i = 0; i<classNumber.length; i++)  {
    classNumber[i].addEventListener("click", (event) => {
        const selectedClass = event.target.id; // Lấy id của lớp học (1, 2, 3, ...)

        // Lưu trạng thái lớp học đã chọn vào localStorage
        localStorage.setItem("selectedClass", selectedClass);

        window.location.href = "demo.html";
    });
};

//  lấy id khi click từ trang thái đã lưu 
const selectedClass = localStorage.getItem("selectedClass");
// kiểm tra selectedclass có tồn tại hay ko 
if (selectedClass) {
    // xác định phần tử lấy
    const lessonKey = "class" + selectedClass;
    // kiểm tra nó có tồn tại ko 
    if (listLessons.hasOwnProperty(lessonKey)) {
        // h2.innerHTML = listLessons[lessonKey].title;
        const lessonList = listLessons[lessonKey].partOne;
        //  duyệt các phần Key 
        for (const postKey in lessonList) {
            if (lessonList.hasOwnProperty(postKey)) {
                const postContent = lessonList[postKey];
                const newLi = document.createElement("li");
                newLi.innerHTML = postContent;
                partListI.appendChild(newLi);
            }
        } 

    }
}

// cartegory

const listPost = document.querySelectorAll("li");
const containerContent = document.getElementById("container_content");
const contentList = document.getElementById("contentList");
const boxIframe = document.getElementById("boxIframe");
const listWork = document.getElementById("listWork");
const iframe = document.createElement("iframe");

for (let i = 0; i<listPost.length; i++) {
    listPost[i].addEventListener("click",function(){
        const numberUnits = i+1;
 
        localStorage.setItem("numberUnits",numberUnits);
        window.location.href = "cartegory.html";
    })
}
const numberUnits = localStorage.getItem("numberUnits");
const basic = document.getElementById("basic");
const medium = document.getElementById("medium");
const advanced = document.getElementById("advanced");
const continew = document.getElementById("continew");
const titleWorks = document.getElementById("main_listWork-h2");
const basicHomWork = document.getElementById("list_basic");
const mediumHomWork = document.getElementById("list_medium");
const advancedHomWork = document.getElementById("list_advanced");

console.log(numberUnits);
if (numberUnits){
    const UnitNumber = "unit" + numberUnits;
    if(listUnits.hasOwnProperty(UnitNumber)){
        containerContent.innerHTML = listUnits[UnitNumber].write;
        iframe.height = "500";
        iframe.width = "1000%";
        iframe.src = listUnits[UnitNumber].video;
        boxIframe.appendChild(iframe);
        contentList.innerHTML = listUnits[UnitNumber].content;
       //  phần bài tập 
       basic.addEventListener("click",() =>{
           basicHomWork.href = listUnits[UnitNumber].works.basic;
           basic.style.display = "none";
           medium.style.display = "flex";
       });
       medium.addEventListener("click",() =>{
        mediumHomWork.href = listUnits[UnitNumber].works.medium;
            medium.style.display = "none";
            advanced.style.display = "flex";
        });       
        advanced.addEventListener("click",() =>{
        advancedHomWork.href = listUnits[UnitNumber].works.advanced;
        advanced.style.display = "none";
        continew.style.display = "flex";
        });
        continew.addEventListener("click",() =>{
            window.location.href = "demo.html";
            continew.style.display = "none";
        });
    }
}
// console.log(listUnits.unit1.work);