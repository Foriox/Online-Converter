const length = document.getElementById('amount');
const convertFrom = document.getElementById('from');
const convertTo = document.getElementById('to');
const formular = document.getElementById('.content');
const result = document.getElementById('result');

// display formular hints
const hints = [{
    // 0
    sameUnit:'gives the same value'
},
{
    // 1 millimeter to centimeter
    mm_c:'Divide the lenght by 10'
},
{
    // 2 millimeter to meter
    mm_m:'Divide the lenght by 1000'
},
{
    // 3 centimeter to millimeter
    c_mm:'multiply the length by 10'
},
{
    // 4 centimeter to meter
    c_m:'multiply the length by 100'
},
{
    // 5 meter to centemeter
    m_c:'divide the length by 100'
},
{
    // 6 meter to millimeter
    m_mm:'divide the length by 1000'
}];

// --get options value--
const units = [
    'millimeter',
    'centimeter',
    'meter',
];

const selectElem=document.querySelectorAll('select');




// function to convert units
function convertunits (){
    if(convertFrom.value=="millimeter" && convertTo.value=="centimeter"){
        result.value = amount.value / 10
    }
    if(convertFrom.value=="millimeter" && convertTo.value=="meter"){
        result.value = amount.value / 1000
    }
    if(convertFrom.value=="centimeter" && convertTo.value=="millimeter"){
        result.value = amount.value * 10
    }
    if(convertFrom.value=="centimeter" && convertTo.value=="meter"){
        result.value = amount.value * 100
    }
    if(convertFrom.value=="meter" && convertTo.value=="centimeter"){
        result.value = amount.value / 100
    }
    if(convertFrom.value=="meter" && convertTo.value=="millimeter"){
        result.value = amount.value / 1000
    }
    
    if(convertFrom.value=="meter" && convertTo.value=="meter"){
        result.value = amount.value * 1
    }
    
    if(convertFrom.value=="millimeter" && convertTo.value=="millimeter"){
        result.value = amount.value * 1
    }
    
    if(convertFrom.value=="centimeter" && convertTo.value=="centimeter"){
        result.value = amount.value * 1
    }
}
// run function based on change and input events
convertFrom.addEventListener('change',convertUnits);
convertTo.addEventListener('change',convertUnits);
lenght.addEventListener('change',convertUnits);