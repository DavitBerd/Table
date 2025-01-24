const rowCount = () => {
    const rowcount = document.querySelectorAll("#Table tr").length
    document.getElementById("rowCount").textContent = `All (${rowcount})`
}

const table = async () => {
    const tableBody = document.getElementById("Table")

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await response.json()

        data.forEach(item => {
            const row = document.createElement("tr")

            const cell0 = document.createElement("td")
            const checkbox = document.createElement("input")
            checkbox.type = "checkbox"
            checkbox.classList = "check"
            cell0.classList = "test"
            cell0.appendChild(checkbox)
            row.appendChild(cell0)

            const cell1 = document.createElement("td")
            cell1.classList = "test"
            const img = document.createElement("img")
            img.src = "imgs/Rectangle 79.png"
            cell1.appendChild(img)
            row.appendChild(cell1)

            const cell2 = document.createElement("td")
            cell2.textContent = item.name
            row.appendChild(cell2)

            const cell3 = document.createElement("td")
            cell3.textContent = item.email
            row.appendChild(cell3)

            const cell4 = document.createElement("td")
            cell4.textContent = item.address.street
            row.appendChild(cell4)

            const cell5 = document.createElement("td")
            cell5.textContent = item.phone
            row.appendChild(cell5)

            const cell6 = document.createElement("td")
            const img1 = document.createElement("img")
            img1.src = "imgs/Danger.png"
            cell6.className = "test"
            cell6.appendChild(img1)
            row.appendChild(cell6)

            const cell7 = document.createElement("td")
            cell7.textContent = "..."
            cell7.className = "Test"
            row.appendChild(cell7)

            tableBody.appendChild(row)
        })

        rowCount()
    } catch (error) {
        console.error("Error fetching data:", error)
        tableBody.innerHTML = `<tr><td colspan="8">Failed to load data. Please try again later.</td></tr>`
    }
}

table()