function solution(string, criteria) {
    let data;
    let propName, propValue;
    const isNotAll = criteria !== 'all';

    if (isNotAll) {
        [propName, propValue] = criteria.split('-');
        
    }

    try {
        data = JSON.parse(string);
    } catch (error) {
        data = [];
    }

    data.filter(function (i) {

        return isNotAll ? i[propName] === propValue : true;
    }).forEach((item, index) => console.log(`${index}. ${item.first_name} ${item.last_name} - ${item.email}`));
}

solution(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`, 
'gender-Female'
);