import { apiCall, removeChild } from "./src/util.js";

let showRowCount = 5;
let prePageNumber = 1;
let currentPageNumber = 1;
let totalPageNumber = 1;

apiCall().then((dummyData) => {
  totalPageNumber = Math.floor(dummyData / showRowCount);

  const createTableBody = () => {
    const authTableBody = document.querySelector(".auth_table_body");
    removeChild(".auth_table_body");

    dummyData.forEach((item, i) => {
      if (
        (currentPageNumber - 1) * showRowCount > i ||
        currentPageNumber * showRowCount <= i
      )
        return;

      const trTag = document.createElement("tr");

      Object.entries(item).forEach(([_key, _value], i) => {
        const tdTag = document.createElement("td");
        tdTag.innerText = _value;
        trTag.append(tdTag);
      });

      authTableBody.append(trTag);
    });
  };

  const pagenationButtons = document.querySelectorAll("#pagination button");

  const renderPagenation = () => {
    pagenationButtons[currentPageNumber].classList.toggle(
      "current_page_number"
    );
    if (currentPageNumber !== prePageNumber)
      pagenationButtons[prePageNumber].classList.toggle("current_page_number");
  };

  const dropdown = document.querySelector("#dropdown select");

  dropdown.onchange = (e) => {
    showRowCount = e.target.value;
  };

  const movePage = (page) => {
    prePageNumber = currentPageNumber;
    currentPageNumber = page;
    renderPagenation();
    createTableBody();
  };

  pagenationButtons.forEach((item, i) => {
    let _page = i === 0 ? 1 : i;
    _page =
      i === pagenationButtons.length - 1 ? pagenationButtons.length - 2 : _page;
    item.onclick = () => {
      movePage(_page);
    };
  });

  createTableBody();
  renderPagenation();
});
