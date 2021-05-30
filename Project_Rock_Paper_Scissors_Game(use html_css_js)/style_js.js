//sử dụng biến đếm số lượt win của người dùng và máy 
let userScore = 0;
let compScore = 0;
//lấy giá trị điểm cho vào phần tính tăng giá trị 
const compScore_span = document.getElementById("comp_score");
const userScores_span = document.getElementById("user_score");
const calculate_div = document.querySelector(".calculate");
//sử dụng để in ra text 
const text_inform_p = document.querySelector(".text_inform > p");
//các lựa chọn của user
const keo_div = document.getElementById("keo");
const dam_div = document.getElementById("dam");
const la_div = document.getElementById("la");

//hàm chuyển đổi tên các select
function convertToword(word) {
    if (word == "đấm") { return "Đấm"; } else if (word == "kéo") { return "Kéo"; }
    return "Lá";
}
// hàm chức năng tính điểm + chuyển dữ liệu vào html 
function win(userChoice, compChoice) {
    userScore++;
    userScores_span.innerHTML = userScore;
    text_inform_p.innerHTML = convertToword(userChoice) + " " + convertToword(compChoice) + " You Win!!! ";
    //console.log(userScores_span);
}

function lose(userChoice, compChoice) {
    compScore++;
    compScore_span.innerHTML = compScore;
    text_inform_p.innerHTML = convertToword(userChoice) + " " + convertToword(compChoice) + " Bot Win!!! ";
    //console.log(compScore_span);
}

function draw(userChoice, compChoice) {
    text_inform_p.innerHTML = convertToword(userChoice) + " " + convertToword(compChoice) + " Both Drawwww!!!";
}
//hàm chức năng random lựa chọn của computer
function choiceComputer() {
    const choice = [' đấm', ' lá', ' kéo'];
    const ramdomNumber = Math.floor(Math.random() * 3); //hàm random lựa chọn 0 1 2 hàm math.floor() làm tròn số 
    return choice[ramdomNumber];
}
//hàm chức năng so sánh lựa chọn giữa user và computer
function game(userChoice) {
    let compChoice = choiceComputer();
    switch (userChoice + '' + compChoice) {
        case "đấm lá":
        case "kéo đấm":
        case "lá kéo":
            lose(userChoice, compChoice);
            break;
        case "kéo kéo":
        case "lá lá":
        case "đấm đấm":
            draw(userChoice, compChoice);
            break;
        case "kéo lá":
        case "đấm kéo":
        case "lá đấm":
            win(userChoice, compChoice);
            break;
    }

}
//hàm main select vào html những lựa chọn của user
function main() {
    la_div.addEventListener('click', function() {
            game("lá")
        }) //click lựa chọn của user

    dam_div.addEventListener('click', function() {
        game("đấm")
    })

    keo_div.addEventListener('click', function() {
        game("kéo");
    })
}
main();