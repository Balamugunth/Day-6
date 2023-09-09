class Uber{
    constructor(basefare,Km,RatePerKm){
        this.basefare = basefare;
        this.Km = Km
        this.RatePerKm = RatePerKm;
               
    }

    CalculatePrice()
    {
        if(this.Km>=5)
        {
            let Totalfare = this.basefare * this.RatePerKm;
            console.log(Totalfare);
        }
        else{
            console.log(this.basefare);
        }
    }
}
let Uberfare = new Uber(100,10,20);

Uberfare.CalculatePrice();