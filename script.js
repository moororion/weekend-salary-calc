const employeeForm = document.getElementById('employeeForm');
const employeeTableBody = document.querySelector('#employeeTable tbody');
const totalMonthlyCostElement = document.getElementById('totalMonthly');
const footer = document.querySelector('footer');

let totalMonthlyCost = 0;

employeeForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const id = document.getElementById('id').value;
  const title = document.getElementById('title').value;
  const salary = parseFloat(document.getElementById('salary').value);

  addEmployeeToTable(firstName, lastName, id, title, salary);
  employeeForm.reset();
});

function addEmployeeToTable(firstName, lastName, id, title, salary) {
  const newRow = document.createElement('tr');
  newRow.innerHTML = `
    <td>${firstName}</td>
    <td>${lastName}</td>
    <td>${id}</td>
    <td>${title}</td>
    <td>$${salary.toFixed(2)}</td>
    <td><button class="deleteBtn">Delete</button></td>
  `;

  employeeTableBody.appendChild(newRow);
  updateTotalMonthlyCost(salary);

  const deleteBtn = newRow.querySelector('.deleteBtn');
  deleteBtn.addEventListener('click', function() {
    newRow.remove();
  });
}

function updateTotalMonthlyCost(salary) {
  const monthlySalary = salary / 12;
  totalMonthlyCost += monthlySalary;

  totalMonthlyCostElement.textContent = `$${totalMonthlyCost.toFixed(2)}`;

  if (totalMonthlyCost > 20000) {
    footer.classList.add('over-budget');
  } else {
    footer.classList.remove('over-budget');
  }
}
