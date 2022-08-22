document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll("#blogCards .btn");
    const list = document.getElementById("list");
    const count = document.getElementById("count");
    let length = buttons.length;
    for (let i = 0; i < length; i++) {
        buttons[i].addEventListener('click', function (e) {
            let playerName = e.target.previousElementSibling.previousElementSibling;
            const listItemCount = document.querySelectorAll("#list li").length;
            if (listItemCount < 5) {
                let li = document.createElement('li');
                li.innerText = playerName.innerText;
                list.appendChild(li)
                e.target.setAttribute("disabled", true)
                e.target.classList.add("disabled")
            } else {
                alert("You cannot add more than 5 Players.")
            }
            count.innerText = listItemCount + 1;
        })
    }

    // cost
    const calculateBtn = document.getElementById("calculateBtn");
    const perPlayerCost = document.getElementById("perPlayer").value;

    calculateBtn.addEventListener("click", function () {
        // number & perPlayerCode is greater than 0;
        if (perPlayerCost >= 0) {
            let totalSelectedPlayer = parseInt(count.innerText);
            if (totalSelectedPlayer > 0) {
                let totalPlayerExpense = parseInt(perPlayerCost) * totalSelectedPlayer;
                document.getElementById("totalExpense").innerText = totalPlayerExpense;
            }
        }
    })

    // total Calculations
    document.getElementById("calculateTotal").addEventListener("click", function () {
        const manager = getValue("manager");
        const coach = getValue('coach');
        const totalExpense = getInnerText("totalExpense");
        if (manager >= 0 && coach >= 0) {
            let totalCost = manager + coach + totalExpense;
            document.getElementById("total").innerText = totalCost;
        }

    })

})