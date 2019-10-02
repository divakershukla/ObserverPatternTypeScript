// Observer Pattern in Typescript--------
export interface ISubject
{
    addObserver(o: IObserver);
    removeObserver(o: IObserver);
    notifyObservers();
}

export interface IObserver
{
    update(temp: number);
}

export class WinterStation implements ISubject
{
    private observers: IObserver[] = [];
    private temp: number;

    setTemp(netTemp: number)
    {
    this.temp=netTemp;
    console.log("new tem set in weather station: "+ this.temp);
    this.notifyObservers()   
    }

    addObserver(obj: IObserver)
    {
        this.observers.push(obj);
    }

    removeObserver(obj: IObserver)
    {
        let index= this.observers.indexOf(obj);
        this.observers.splice(index,1)
    }

    notifyObservers()
    {
        for(let observer of this.observers)
        {
            observer.update(this.temp);
        }
    }

}

export class TempDisplay implements  IObserver
{

    update(temp: number)
    {
        if(temp>25)
        { 
            console.log("temp is greater than 25");
        }
        else
        {
            console.log("temp is less than 25");
        }
    }

}

export class Fan implements  IObserver
{

    update(temp: number)
    {
        if(temp>25)
        { 
            console.log("turn of fan");
        }
        else
        {
            console.log("turn on fan");
        }
    }

}
