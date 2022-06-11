class Dates {
    constructor(year, month, day) {
        this.year = year
        this.month = month
        this.day = day
    }

    set day(day) {
        this._day = day
    }

    set month(month) {
        this._month = month
    }

    set year(year) {
        if (year > 1300 && year < 1420) {
            this._year = year
        }
    }
}

