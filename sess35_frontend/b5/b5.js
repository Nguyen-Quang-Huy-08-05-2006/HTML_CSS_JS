
let categories = [
    {
      cateCode: 'DM001',
      cateName: 'Quần áo',
      cateStatus: true,
    },
    {
      cateCode: 'DM002',
      cateName: 'Kính mắt',
      cateStatus: false,
    },
    {
      cateCode: 'DM003',
      cateName: 'Giày dép',
      cateStatus: true,
    },
    {
      cateCode: 'DM004',
      cateName: 'Thời trang nam',
      cateStatus: true,
    },
    {
      cateCode: 'DM005',
      cateName: 'Thời trang nữ',
      cateStatus: true,
    },
  ];
  function renderCategories() {
    const tbody = document.getElementById("tbody");
    tbody.innerHTML = ""; // Xóa nội dung cũ

    // Lấy danh sách từ Local Storage
    categories = JSON.parse(localStorage.getItem("categories")) || [];

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

// Gọi hàm này khi trang tải lên để hiển thị danh mục
document.addEventListener("DOMContentLoaded", renderCategories);
  
document.getElementById("save-btn").addEventListener("click", function () {
  const categoryId = document.getElementById("category-id").value.trim();
  const categoryName = document.getElementById("category-name").value.trim();

  // Kiểm tra validation
  if (categoryId === "") {
      document.getElementById("category-id").classList.add("is-invalid");
      return;
  } else {
      document.getElementById("category-id").classList.remove("is-invalid");
  }

  if (categoryName === "") {
      document.getElementById("category-name").classList.add("is-invalid");
      return;
  } else {
      document.getElementById("category-name").classList.remove("is-invalid");
  }

  // Lấy giá trị trạng thái
  const status = document.querySelector('input[name="status"]:checked')?.value || "inactive";
  const isActive = status === "active";

  // Lấy danh sách từ Local Storage (nếu có)
  let categories = JSON.parse(localStorage.getItem("categories")) || [];

  // Kiểm tra trùng mã danh mục
  const isDuplicate = categories.some((cate) => cate.cateCode === categoryId);
  if (isDuplicate) {
      alert("Mã danh mục đã tồn tại!");
      return;
  }

  // Thêm danh mục mới vào mảng
  categories.push({
      cateCode: categoryId,
      cateName: categoryName,
      cateStatus: isActive,
  });

  // Lưu vào Local Storage
  localStorage.setItem("categories", JSON.stringify(categories));

  // Cập nhật danh sách hiển thị
  renderCategories();

  // Reset form và đóng modal
  document.getElementById("category-form").reset();
  document.getElementById("modal-add-category").querySelector(".btn-close").click();
});

// Hàm hiển thị danh sách danh mục
function renderCategories() {
  const tbody = document.getElementById("tbody");
  tbody.innerHTML = ""; // Xóa nội dung cũ

  // Lấy danh sách từ Local Storage
  let categories = JSON.parse(localStorage.getItem("categories")) || [];

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

// Gọi hàm này khi trang tải lên để hiển thị danh mục
document.addEventListener("DOMContentLoaded", renderCategories);