let labels = ['Big Mac', 'Quarter Pounder with Cheese', 'McDouble', 'Double Cheeseberger', 'Hot Dog'];

let itemData = [500, 520, 400, 450, 250];

const data = {
    labels: labels,
    datasets: [{
        data: itemData,
        backgroundColor: 'rgb(66, 221, 245)'
    }]
};

const config = {
    type: 'bar',
    data: data
}

const chart = new Chart(
    document.getElementById('myChart'),
    config
);

console.log('hi');