document
  .getElementById("calculator-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const screenHeight = parseFloat(
      document.getElementById("screen-height").value
    );
    const screenWidth = parseFloat(
      document.getElementById("screen-width").value
    );

    const moduleHeightMm = 320;
    const moduleWidthMm = 160;

    const heightModules = Math.ceil(screenHeight / moduleHeightMm);
    const widthModules = Math.ceil(screenWidth / moduleWidthMm);
    const totalModules = heightModules * widthModules;

    const modulesPerBox = 18;
    const boxesInHeight = Math.ceil(heightModules / 3);
    const boxesInWidth = Math.ceil(widthModules / 6);
    const totalBoxes = boxesInHeight * boxesInWidth;

    const receiversPerBox = 2; // assuming 2 receiving cards per box
    const totalReceivers = totalBoxes * receiversPerBox;

    const powerSuppliesPerBox = Math.ceil(modulesPerBox / 4);
    const totalPowerSupplies = totalBoxes * powerSuppliesPerBox;

    document.getElementById(
      "modules"
    ).innerText = `Total Modules: ${totalModules}`;
    document.getElementById(
      "receivers"
    ).innerText = `Total Receivers: ${totalReceivers}`;
    document.getElementById(
      "power-supplies"
    ).innerText = `Total Power Supplies: ${totalPowerSupplies}`;

    document.getElementById("results").style.display = "block";
  });
