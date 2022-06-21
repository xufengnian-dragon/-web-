//做一个全局删除
function delA() {
    var tr = this.parentNode.parentNode;
    var name = tr.children[0].innerHTML;
    var flag = confirm("确认删除" + name + "吗？");
    if (flag) {
        tr.parentNode.removeChild(tr);
    };
    return false;
};
window.onload = function () {
    var allA = document.getElementsByTagName("a");
    for (var i = 0; i < allA.length; i++) {
        allA[i].onclick = delA;
    };
    //添加员工
    var addEmpButton = document.getElementById("addEmpButton");
    addEmpButton.onclick = function () {
        //获取输入的员工信息
        var name = document.getElementById("empName").value;
        var email = document.getElementById("empEmail").value;
        var salary = document.getElementById("empSalary").value;
        //添加一个tr元素
        var tr = document.createElement("tr");
        tr.innerHTML = "<td>" + name + "</td>" +
            "<td>" + email + "</td>" +
            "<td>" + salary + "</td>" +
            "<td><a href='javascript:;'>Delete</a></td>";
            var a = tr.getElementsByTagName("a")[0];
        /*         
                //添加四个td元素
                var nameTd = document.createElement("td");
                var emailTd = document.createElement("td");
                var salaryTd = document.createElement("td");
                var aTd = document.createElement("td");
                //添加一个a元素
                var a = document.createElement("a");
                //添加四个文本节点存放输入的员工信息
                var nameText = document.createTextNode(name);
                var emailText = document.createTextNode(email);
                var salaryText = document.createTextNode(salary);
                var delText = document.createTextNode("Delete");
                //将文本节点获取的员工信息添加到td中
                nameTd.appendChild(nameText);
                emailTd.appendChild(emailText);
                salaryTd.appendChild(salaryText);
                //将Delete添加到a中
                a.appendChild(delText);
                //将a添加到aTd中
                aTd.appendChild(a);
                //为a添加href属性，点亮Delete
                a.href = "javascript:;";
                //将已经得到添加的td内容添加到tr中
                tr.appendChild(nameTd);
                tr.appendChild(emailTd);
                tr.appendChild(salaryTd);
                tr.appendChild(aTd); */
        //将tr添加到tbody中
        var tbody = employeeTable.getElementsByTagName("tbody")[0];
        tbody.appendChild(tr);
        //删除后续添加的员工的信息
        a.onclick = delA;
    };
};


