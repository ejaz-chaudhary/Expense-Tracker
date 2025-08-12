// selection of global variable
let tForm = document.querySelector(".t-form");
let allInput = tForm.querySelectorAll("input");
let allSelect = tForm.querySelector("select");
let submitBtn = document.getElementById("submitBtn");
let updateBtn = document.getElementById("updateBtn");
let btnClose = document.querySelector(".btn-close");
let balanceEl = document.querySelector(".balance");
let expenseEl = document.querySelector(".Expense");
let incomeEl = document.querySelector(".Income");
let modalBtn = document.querySelector(".modal-btn");
let searchEl = document.querySelector(".search");
let tList = document.querySelector(".t-List");
let transaction = [];

if (localStorage.getItem("transaction") != null) {
  transaction = JSON.parse(localStorage.getItem("transaction"));
}

// add onsubmit action to form
tForm.onsubmit = (e) => {
  e.preventDefault();
  let obj = {
    title: allInput[0].value,
    amount: allInput[1].value,
    transaction: allSelect.value,
    Date: new Date(),
  };
  transaction.push(obj);
  localStorage.setItem("transaction", JSON.stringify(transaction));
  swal("success", "transaction added", "success");
  btnClose.click();
  tForm.reset();
  showTransaction();
  calculation();
};
// formate date
const formateDate = (d) => {
  let date = new Date(d);
  let yy = date.getFullYear();
  let mm = date.getMonth() + 1;
  let dd = date.getDay();
  mm = mm < 10 ? "0" + mm : mm;
  dd = dd < 10 ? "0" + dd : dd;
  return `${dd}-${mm}-${yy}`;
};
// delete
const deleteFunc = () => {
  let allDelBtn = tList.querySelectorAll(".del-btn");
  allDelBtn.forEach((btn, index) => {
    btn.onclick = () => {
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this data!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          transaction.splice(index, 1);
          localStorage.setItem("transaction", JSON.stringify(transaction));
          showTransaction();
          calculation();
          swal("Poof! Your data has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Your data is safe!");
        }
      });
    };
  });
};

// update
const editFunction = () => {
  let allEditBtn = tList.querySelectorAll(".edit-btn");
  allEditBtn.forEach((btn, index) => {
    btn.onclick = () => {
      modalBtn.click();
      allSelect.value = btn.getAttribute("transaction");
      allInput[0].value = btn.getAttribute("title");
      allInput[1].value = btn.getAttribute("amount").replace("₹", "");
      submitBtn.classList.add("d-none");
      updateBtn.classList.remove("d-none");
      updateBtn.onclick = () => {
        let obj = {
          title: allInput[0].value,
          amount: allInput[1].value,
          transaction: allSelect.value,
          Date: new Date(),
        };
        transaction[index] = obj;
        localStorage.setItem("transaction", JSON.stringify(transaction));
        swal("success", "transaction updated", "success");
        btnClose.click();
        tForm.reset();
        showTransaction();
        calculation();
        submitBtn.classList.remove("d-none");
        updateBtn.classList.add("d-none");
      };
    };
  });
};

// show all transaction data-bs-toggle="modal" data-bs-target="#myModal"
const showTransaction = () => {
  tList.innerHTML = "";
  transaction.forEach((item, index) => {
    tList.innerHTML += `<tr>
        <td class="text-nowrap ">${formateDate(item.Date)}</td>
        <td class="text-nowrap">${item.title}</td>
        <td class="text-nowrap">${item.transaction}</td>
        <td class="text-nowrap">₹${item.amount}</td>
        <td class="text-nowrap">
          <button 
            
            
               class="btn ">
                   <i  title="${item.title}" amount="₹${
      item.amount
    }" transaction="${item.transaction}" 
                    class="fa-solid edit-btn fa-pen" style="color: #74C0FC;"></i>
          </button>
          <button class="btn">
            <i
              class="fa-solid del-btn fa-trash-can"
              style="color: #c3375a;"
            ></i>
          </button>
        </td>
      </tr>`;
  });
  deleteFunc();
  editFunction();
};
showTransaction();

// calculate trans
const calculation = () => {
  let totalCr = 0;
  let totalDr = 0;

  let filterCr = transaction.filter((item) => item.transaction == "cr");
  for (let obj of filterCr) {
    totalCr += Number(obj.amount);
  }

  let filterDr = transaction.filter((item) => item.transaction == "dr");
  for (let obj of filterDr) {
    totalDr += Number(obj.amount);
  }

  incomeEl.innerText = `₹${totalCr}`;
  expenseEl.innerText = `₹${totalDr}`;
  balanceEl.style.color = totalCr - totalDr >= 0 ? "green" : "red";
  balanceEl.style.backgroundColor =
    totalCr - totalDr >= 0
      ? "rgba(119, 168, 119, 0.349)"
      : "rgba(172, 114, 114, 0.281)";
  balanceEl.innerText = `₹${Number(totalCr - totalDr)}`;
};

calculation();

// search
searchEl.oninput = () =>{
  search();
}

// search function
const search = () => {
  const searchValue = searchEl.value.toLowerCase().trim();
  let tr = tList.querySelectorAll("TR");

  for (let i = 0; i < tr.length; i++) {
    let allTd = tr[i].querySelectorAll("TD");

    if (allTd.length >= 3) {
      let dateVal = allTd[0].innerHTML.toLowerCase();
      let titleVal = allTd[1].innerHTML.toLowerCase();
      let typeVal = allTd[2].innerHTML.toLowerCase(); // cr or dr

      if (
        dateVal.includes(searchValue) ||
        titleVal.includes(searchValue) ||
        typeVal.includes(searchValue)
      ) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
};
