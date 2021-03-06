/**
 * 创建定时器
 */
export class CreatTimer {
    constructor(startTime) {
        this.diff = startTime ? Date.now() - startTime : 0;
        this.counting = false;
        this.endTime = 0;
        this.time = 0
    }
    start(callback) {
        if (this.counting) {
            return
        }
        this.counting = true;
        this.endTime = Date.now() - this.time;
        this.microTick(callback);
    }
    pause() {
        if (!this.counting) {
            return
        }
        this.counting = false;
        window.cancelAnimationFrame(this.timerId);
    }
    clear() {
        if (!this.counting) {
            return
        }
        this.counting = false;
        window.cancelAnimationFrame(this.timerId);

    }
    microTick(callback) {
        const _this = this;
        this.timerId = window.requestAnimationFrame(() => {
            this.time = Date.now() - _this.endTime;
            callback(this.time + this.diff);
            this.microTick(callback);
        })
    }
}
var SECOND = 1000;
var MINUTE = 60 * SECOND;
var HOUR = 60 * MINUTE;
var DAY = 24 * HOUR;
export function parseTimeData(time) {
    var days = Math.floor(time / DAY);
    var hours = Math.floor(time % DAY / HOUR);
    var minutes = Math.floor(time % HOUR / MINUTE);
    var seconds = Math.floor(time % MINUTE / SECOND);
    var milliseconds = Math.floor(time % SECOND);
    return {
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
        milliseconds: milliseconds
    };
}

export function parseFormat(format, timeData) {
    var days = timeData.days;
    var hours = timeData.hours,
        minutes = timeData.minutes,
        seconds = timeData.seconds,
        milliseconds = timeData.milliseconds;

    if (format.indexOf('DD') === -1) {
        hours += days * 24;
    } else {
        format = format.replace('DD', padZero(days));
    }

    if (format.indexOf('HH') === -1) {
        minutes += hours * 60;
    } else {
        format = format.replace('HH', padZero(hours));
    }

    if (format.indexOf('mm') === -1) {
        seconds += minutes * 60;
    } else {
        format = format.replace('mm', padZero(minutes));
    }

    if (format.indexOf('ss') === -1) {
        milliseconds += seconds * 1000;
    } else {
        format = format.replace('ss', padZero(seconds));
    }

    if (format.indexOf('S') !== -1) {
        var ms = padZero(milliseconds, 3);

        if (format.indexOf('SSS') !== -1) {
            format = format.replace('SSS', ms);
        } else if (format.indexOf('SS') !== -1) {
            format = format.replace('SS', ms.slice(0, 2));
        } else {
            format = format.replace('S', ms.charAt(0));
        }
    }
    return format;
}

export function padZero(num, targetLength) {
    if (targetLength === void 0) {
        targetLength = 2;
    }

    var str = num + '';

    while (str.length < targetLength) {
        str = '0' + str;
    }

    return str;
}

export function parseStyleSize(size) {
    if (typeof size === 'number') {
        return size;
    }
    if (typeof size === 'string') {
        if (/^\d+(?:px)?$/.test(size)) {
            return parseInt(size, 10);
        } else {
            return size;
        }
    }
    return null;
}