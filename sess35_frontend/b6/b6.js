// Khởi tạo dữ liệu mặc định nếu chưa có
if (!localStorage.getItem("categories")) {
    const defaultCategories = [
        { cateCode: 'DM001', cateName: 'Quần áo', cateStatus: true },
        { cateCode: 'DM002', cateName: 'Kính mắt', cateStatus: false },
        { cateCode: 'DM003', cateName: 'Giày dép', cateStatus: true },
        { cateCode: 'DM004', cateName: 'Thời trang nam', cateStatus: true },
        { cateCode: 'DM005', cateName: 'Thời trang nữ', cateStatus: true },
    ];
    localStorage.setItem("categories", JSON.stringify(defaultCategories));
}

function renderCategories() {
    const tbody = document.getElementById("tbody");
    tbody.innerHTML = "";

    let categories = JSON.parse(localStorage.getItem("categories")) || [];

    // Lọc theo trạng thái
    const filterValue = document.getElementById("filter-status").value;
    categories = categories.filter(category =>
        filterValue === "all" || category.cateStatus === (filterValue === "active")
    );

    // Lọc theo tìm kiếm
    const searchValue = document.getElementById("search-input").value.toLowerCase();
    categories = categories.filter(category =>
        category.cateName.toLowerCase().includes(searchValue)
    );

    // Hiển thị danh mục
    categories.forEach(category => {
        const statusText = category.cateStatus ? "Đang hoạt động" : "Ngừng hoạt động";
        const statusClass = category.cateStatus ? "text-success" : "text-danger";

        const newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td>${category.cateCode}</td>
            <td>${category.cateName}</td>
            <td class="${statusClass}"><i class="bi bi-dot"></i> ${statusText}</td>
            <td>
                <i class="bi bi-trash text-danger mx-2" onclick="deleteRow('${category.cateCode}')"></i>
                <i class="bi bi-pencil-square text-primary"></i>
            </td>
        `;
        tbody.appendChild(newRow);
    });
}

function deleteRow(cateCode) {
    let categories = JSON.parse(localStorage.getItem("categories")) || [];
    categories = categories.filter(category => category.cateCode !== cateCode);
    localStorage.setItem("categories", JSON.stringify(categories));
    renderCategories();
}

// Lưu danh mục mới
document.getElementById("save-btn").addEventListener("click", function () {
    const categoryId = document.getElementById("category-id").value.trim();
    const categoryName = document.getElementById("category-name").value.trim();

    if (!categoryId || !categoryName) {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    const status = document.querySelector('input[name="status"]:checked').value === "active";

    let categories = JSON.parse(localStorage.getItem("categories")) || [];

    if (categories.some((cate) => cate.cateCode === categoryId)) {
        alert("Mã danh mục đã tồn tại!");
        return;
    }

    categories.push({ cateCode: categoryId, cateName: categoryName, cateStatus: status });
    localStorage.setItem("categories", JSON.stringify(categories));

    renderCategories();

    // Reset form và đóng modal
    document.getElementById("category-form").reset();
    const modal = bootstrap.Modal.getInstance(document.getElementById("modal-add-category"));
    modal.hide();
});

// Gọi lại hàm render khi trang tải lên
document.addEventListener("DOMContentLoaded", renderCategories);
document.getElementById("filter-status").addEventListener("change", renderCategories);
document.getElementById("search-input").addEventListener("input", renderCategories);