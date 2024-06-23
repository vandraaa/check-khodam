const input = document.getElementById("inputName");
const error = document.getElementById("error");

const btnCheck = document.getElementById("btnCheck");
const btnReset = document.getElementById("btnReset");
const btnBack = document.getElementById("btnBack");

const getName = document.getElementById("getName");

const overlay = document.getElementById("overlay");
const overlayResult = document.getElementById("overlayResult");
const result = document.getElementById("result");
const resultText = document.getElementById("resultText");
const loading = document.getElementById("loading");

const dataKhodam = [
    "Beruang Tipes","Naga Hytam","Pelek Tronton","Teh Celup","Gojo Skibidi","Tuyul Mullet","Cupang Rembo","Kenalpot Resing","Rusdi Sigma","Mas Faiz 😋","Reza Kecap","Bekantan","Kambir Jawir","Paus Biru Mandalika","Joker Merah","Pelek Vario","Cicak Manado","Ilham Batagor","Musang Birahi","Paus Sumatra","Farhan Kebab","Gendang Jawa","Orang Hytam","Harimau Jawa"
];

btnCheck.addEventListener("click", () => {
  const nameInput = input.value;
  if (nameInput === "") {
    error.classList.add("block");
    error.classList.remove("hidden");
    btnCheck.disabled = true;
  } else {
    getName.innerHTML = nameInput;
    overlay.classList.remove("hidden");
    overlayResult.classList.remove("hidden");
    overlayResult.classList.add("flex");
    loading.classList.remove("hidden");
    result.classList.add("flex");
    setTimeout(() => {
      loading.classList.add("hidden");
      result.classList.remove("hidden");
      resultText.innerHTML = checkKhodam();
    }, 3000);
  }
});

btnReset.addEventListener("click", () => {
  input.value = "";
  btnCheck.disabled = false;
});

btnBack.addEventListener("click", () => {
  overlay.classList.add("hidden");
  overlayResult.classList.add("hidden");
  overlayResult.classList.remove("flex");
  result.classList.add("hidden");
  input.value = "";
  error.classList.remove("block");
  error.classList.add("hidden");
  btnCheck.disabled = false;
});

function checkKhodam() {
    const randomKhodam = Math.floor(Math.random() * dataKhodam.length);  
    return dataKhodam[randomKhodam];
}