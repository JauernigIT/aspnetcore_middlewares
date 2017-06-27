webpackJsonp([1,4],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.navItem = 'sessions';
    }
    AppComponent.prototype.onNavigate = function (navItem) {
        this.navItem = navItem;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(172),
        styles: [__webpack_require__(165)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__header_header_component__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sessions_session_list_session_list_component__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__speakers_speakers_component__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__speakers_speaker_list_speaker_list_component__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__speakers_speaker_list_speaker_item_speaker_item_component__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__speakers_speaker_detail_speaker_detail_component__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__sessions_sessions_service__ = __webpack_require__(65);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_7__sessions_session_list_session_list_component__["a" /* SessionListComponent */] },
    { path: 'sessions', component: __WEBPACK_IMPORTED_MODULE_7__sessions_session_list_session_list_component__["a" /* SessionListComponent */] },
    { path: 'speakers', component: __WEBPACK_IMPORTED_MODULE_8__speakers_speakers_component__["a" /* SpeakersComponent */] },
    { path: 'speakers/:id', component: __WEBPACK_IMPORTED_MODULE_8__speakers_speakers_component__["a" /* SpeakersComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_7__sessions_session_list_session_list_component__["a" /* SessionListComponent */],
            __WEBPACK_IMPORTED_MODULE_8__speakers_speakers_component__["a" /* SpeakersComponent */],
            __WEBPACK_IMPORTED_MODULE_9__speakers_speaker_list_speaker_list_component__["a" /* SpeakerListComponent */],
            __WEBPACK_IMPORTED_MODULE_10__speakers_speaker_list_speaker_item_speaker_item_component__["a" /* SpeakerItemComponent */],
            __WEBPACK_IMPORTED_MODULE_11__speakers_speaker_detail_speaker_detail_component__["a" /* SpeakerDetailComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_12__sessions_sessions_service__["a" /* SessionsService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
        this.navChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]();
    }
    HeaderComponent.prototype.onNavChanged = function (navItem) {
        this.navChanged.emit(navItem);
    };
    return HeaderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Output */])(),
    __metadata("design:type", Object)
], HeaderComponent.prototype, "navChanged", void 0);
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__(173)
    })
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sessions_service__ = __webpack_require__(65);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SessionListComponent = (function () {
    function SessionListComponent(sessionsService) {
        this.sessionsService = sessionsService;
    }
    SessionListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sessions = this.sessionsService.getSessions();
        this.sessionsService.sessionsChanged
            .subscribe(function (sessions) {
            _this.sessions = sessions;
        });
    };
    return SessionListComponent;
}());
SessionListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-session-list',
        template: __webpack_require__(174),
        styles: [__webpack_require__(166)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__sessions_service__["a" /* SessionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__sessions_service__["a" /* SessionsService */]) === "function" && _a || Object])
], SessionListComponent);

var _a;
//# sourceMappingURL=session-list.component.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Session; });
var Session = (function () {
    function Session(title, summary, description, date, length, speaker) {
        this.title = title;
        this.summary = summary;
        this.description = description;
        this.date = date;
        this.length = length;
        this.speaker = speaker;
    }
    return Session;
}());

//# sourceMappingURL=session.model.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_speakers_speaker_model__ = __webpack_require__(34);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeakerDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SpeakerDetailComponent = (function () {
    function SpeakerDetailComponent() {
    }
    SpeakerDetailComponent.prototype.ngOnInit = function () {
    };
    return SpeakerDetailComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_speakers_speaker_model__["a" /* Speaker */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_speakers_speaker_model__["a" /* Speaker */]) === "function" && _a || Object)
], SpeakerDetailComponent.prototype, "speaker", void 0);
SpeakerDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-speaker-detail',
        template: __webpack_require__(175),
        styles: [__webpack_require__(167)]
    })
], SpeakerDetailComponent);

var _a;
//# sourceMappingURL=speaker-detail.component.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__speaker_model__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__speakers_service__ = __webpack_require__(35);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeakerItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SpeakerItemComponent = (function () {
    function SpeakerItemComponent(speakersService) {
        this.speakersService = speakersService;
    }
    SpeakerItemComponent.prototype.ngOnInit = function () {
    };
    SpeakerItemComponent.prototype.onSpeakerSelect = function () {
        this.speakersService.speakerSelected.emit(this.speaker);
    };
    return SpeakerItemComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__speaker_model__["a" /* Speaker */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__speaker_model__["a" /* Speaker */]) === "function" && _a || Object)
], SpeakerItemComponent.prototype, "speaker", void 0);
SpeakerItemComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-speaker-item',
        template: __webpack_require__(176),
        styles: [__webpack_require__(168)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__speakers_service__["a" /* SpeakersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__speakers_service__["a" /* SpeakersService */]) === "function" && _b || Object])
], SpeakerItemComponent);

var _a, _b;
//# sourceMappingURL=speaker-item.component.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__speakers_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(64);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeakerListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SpeakerListComponent = (function () {
    function SpeakerListComponent(speakersService, route) {
        this.speakersService = speakersService;
        this.route = route;
    }
    SpeakerListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.speakers = this.speakersService.getSpeakers();
        var initialSpeakerId = 1;
        this.route.params
            .subscribe(function (params) {
            var id = params['id'] || initialSpeakerId;
            if (id) {
                var speakerIndex = _this.speakers.findIndex(function (speaker) { return speaker.id == id; });
                var selectedSpeaker = _this.speakers[speakerIndex >= 0 ? speakerIndex : 0];
                _this.speakersService.speakerSelected.emit(selectedSpeaker);
                initialSpeakerId = null;
            }
        });
        this.speakersService.speakersChanged
            .subscribe(function (speakers) {
            _this.speakers = speakers;
        });
    };
    return SpeakerListComponent;
}());
SpeakerListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-speaker-list',
        template: __webpack_require__(177),
        styles: [__webpack_require__(169)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__speakers_service__["a" /* SpeakersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__speakers_service__["a" /* SpeakersService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object])
], SpeakerListComponent);

var _a, _b;
//# sourceMappingURL=speaker-list.component.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__speakers_service__ = __webpack_require__(35);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeakersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SpeakersComponent = (function () {
    function SpeakersComponent(speakersService) {
        this.speakersService = speakersService;
    }
    SpeakersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.speakersService.speakerSelected
            .subscribe(function (speaker) {
            _this.selectedSpeaker = speaker;
        });
    };
    return SpeakersComponent;
}());
SpeakersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-speakers',
        template: __webpack_require__(178),
        styles: [__webpack_require__(170)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__speakers_service__["a" /* SpeakersService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__speakers_service__["a" /* SpeakersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__speakers_service__["a" /* SpeakersService */]) === "function" && _a || Object])
], SpeakersComponent);

var _a;
//# sourceMappingURL=speakers.component.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, ".list-group-item:hover {\r\n    cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 172:
/***/ (function(module, exports) {

module.exports = "<app-header (navChanged)=\"onNavigate($event)\"></app-header>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <!--<app-speakers *ngIf=\"navItem === 'speakers'\"></app-speakers>\n      <app-session-list *ngIf=\"navItem === 'sessions'\"></app-session-list>-->\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 173:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-header\">\r\n            <a routerLink=\"/\" class=\"navbar-brand\">DWX 2017</a>\r\n        </div>\r\n        <div class=\"collapse navbar-collapse\">\r\n            <ul class=\"nav navbar-nav\">\r\n                <li routerLinkActive=\"active\"><a routerLink=\"/sessions\">Sessions</a></li>\r\n                <li routerLinkActive=\"active\"><a routerLink=\"/speakers\">Speakers</a></li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>"

/***/ }),

/***/ 174:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <ul class=\"list-group\">\n      <a *ngFor=\"let session of sessions\" class=\"list-group-item\" style=\"cursor:pointer;\">\n        <h2>{{ session.title }}</h2>\n        <h4>{{ session.speaker }} - {{ session.date }}</h4>\n        <div>{{ session.description }}</div>\n      </a>\n    </ul>\n  </div>\n</div>"

/***/ }),

/***/ 175:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <h1>{{speaker.getFullName()}}</h1>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-xs-12\">\n    {{speaker.resumee}}\n  </div>\n</div>"

/***/ }),

/***/ 176:
/***/ (function(module, exports) {

module.exports = "<a class=\"list-group-item clearfix\" (click)=\"onSpeakerSelect()\" >\n  <div class=\"pull-left\">\n    <h4 class=\"list-group-item-heading\">{{speaker.getFullName()}}</h4>\n    <p class=\"list-group-item-text\">{{speaker.company}}</p>\n  </div>\n  <div class=\"pull-right\">\n    <img [src]=\"speaker.getFullImagePath()\">\n  </div>\n</a>"

/***/ }),

/***/ 177:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <app-speaker-item \n      *ngFor=\"let speaker of speakers\"\n      [speaker]=\"speaker\"\n      (speakerSelected)=\"onSpeakerSelected(speaker)\">\n    </app-speaker-item>\n  </div>\n</div>"

/***/ }),

/***/ 178:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-4\">\n    <app-speaker-list></app-speaker-list>\n  </div>\n  <div class=\"col-md-8\">\n    <app-speaker-detail \n      *ngIf=\"selectedSpeaker; else selectSpeakerText\"\n      [speaker]=\"selectedSpeaker\">\n    </app-speaker-detail>\n    \n    <ng-template #selectSpeakerText>\n      <div>Please select a speaker!</div>\n    </ng-template>\n  </div>\n</div>"

/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(93);


/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Speaker; });
var Speaker = (function () {
    function Speaker(id, firstName, lastName, company, resumee, imageFileName) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.company = company;
        this.resumee = resumee;
        this.imageFileName = imageFileName;
    }
    Speaker.prototype.getFullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    Speaker.prototype.getFullImagePath = function () {
        return '/dwx_speakers/' + this.imageFileName;
    };
    return Speaker;
}());

//# sourceMappingURL=speaker.model.js.map

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__speaker_model__ = __webpack_require__(34);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeakersService; });


var SpeakersService = (function () {
    function SpeakersService() {
        this.speakersChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]();
        this.speakerSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]();
        this.speakers = [
            new __WEBPACK_IMPORTED_MODULE_1__speaker_model__["a" /* Speaker */](1, 'Matthias', 'Jauernig', 'Jauernig IT', 'Matthias ist freiberuflicher Senior Softwareentwickler/-architekt im Raum Frankfurt/Main. Seine Schwerpunkte liegen in der modernen Webentwicklung mit C#/.NET, .NET Core, ASP.NET MVC, Angular und HTML5/JavaScript. In seiner Freizeit testet er seine Ausdauer im Triathlon und bei der Erziehung seiner 2 Kinder.', 'mjauernig.jpg'),
            new __WEBPACK_IMPORTED_MODULE_1__speaker_model__["a" /* Speaker */](2, 'Johannes', 'Hoppe', 'Haus Hoppe ITS', 'Johannes Hoppe ist Autor des Buchs „Angular: Einstieg in die komponentenbasierte Entwicklung“. Er arbeitet als selbstständiger IT-Berater, Softwareentwickler und Trainer für Angular und TypeScript. Für seine Community-Tätigkeit rund ums Web wurde er mehrfach als Telerik Developer Expert (TDE) ausgezeichnet. Johannes ist Leiter der .NET User Group Rhein-Neckar und unterrichtet als Lehrbeauftragter. Johannes schreibt über seine Vorlesungen, Trainings und Vorträge in seinem Blog. (http://blog.johanneshoppe.de/)', 'jhoppe.jpg'),
            //new Speaker(3, 'Markus', 'Demmler', 'SDX AG', 'Markus Demmler ist Principal eXpert bei der SDX AG in München und unterstützt Enterprise-Kunden bei der Konzeption und Umsetzung skalierbarer Client- und Backend-Architekturen mit Fokus auf die Entwicklung von mobilen Business Apps auf Basis von Xamarin oder Cordova.', 'mdemmler.jpg'),
            new __WEBPACK_IMPORTED_MODULE_1__speaker_model__["a" /* Speaker */](4, 'Chuck', 'Norris', 'The One and Only!', 'Chuck Norris (* 10. März 1940 in Ryan, Oklahoma; eigentlich Carlos Ray Norris Jr.) ist ein US-amerikanischer Kampfkünstler, Action-Schauspieler und Buchautor. Größere Berühmtheit erlangte er als Filmgegner von Bruce Lee in Die Todeskralle schlägt wieder zu (1972) sowie durch die dreiteilige Kinofilmreihe Missing in Action (1984–1988) und die Fernsehserie Walker, Texas Ranger (1993–2001), bei der er auch als ausführender Produzent agierte.', 'cnorris.jpg')
        ];
    }
    SpeakersService.prototype.getSpeakers = function () {
        return this.speakers.slice();
    };
    SpeakersService.prototype.addSpeaker = function (speaker) {
        this.speakers.push(speaker);
        this.speakersChanged.emit(this.getSpeakers());
    };
    return SpeakersService;
}());

//# sourceMappingURL=speakers.service.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__session_model__ = __webpack_require__(105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionsService; });


var SessionsService = (function () {
    function SessionsService() {
        this.sessionsChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]();
        this.sessionSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]();
        this.sessions = [
            new __WEBPACK_IMPORTED_MODULE_1__session_model__["a" /* Session */]('Like a Fish in Water With ASP.NET Core', '', 'This session will bring you up to speed with all the goodness of ASP.NET Core, formerly known as ASP.NET 5, using a practical, demo-first approach: I am going to show you how to build an application for monitoring a fish tank! This ASP.NET release has the best new features seen in a long time. It not only supports development for a lightweight version of .NET called .NET Core, but for the first time you can also target non-Windows platforms. You will learn how this all works while I show you the internals of the fish tank app. You’ll also see how MVC has become better with tag helpers, view components and many more cool features.', '26.06.2017 11:45', 60, 'Roland Guijt'),
            new __WEBPACK_IMPORTED_MODULE_1__session_model__["a" /* Session */]('ASP.NET Core Middlewares', '', 'Middlewares sind das Herzstück einer jeden ASP.NET Core Anwendung, da mit diesen die Request/Response-Verarbeitung zentral gesteuert wird. Dieser Vortrag gibt zunächst einen Überblick über die Funktionalität, die .NET Core zum Aufbau der Request-Pipeline bietet und welche Middlewares von Haus aus genutzt werden können. Anhand praktischer Beispiele wird darauf aufbauend gezeigt, wie sich wirkungsvoll eigene Middlewares erstellen lassen, die eine ASP.NET Core Anwendung um sinnvolle Funktionen erweitern.', '26.06.2017 15:30', 60, 'Matthias Jauernig'),
            new __WEBPACK_IMPORTED_MODULE_1__session_model__["a" /* Session */]('Entity Framework Core in a Nutshell', '', 'Kurz mal ein paar Minuten Zeit und Lust das neue Entity Framework Core kennen zulernen? Dann sind Sie in dieser Session richtig! Kurz und bündig wird das Entity Framework Core in seiner neuesten Version vorgestellt. Diese Session richtet sich definitiv an Entwickler, die optimaler Weise sogar schon das „alte“ Entity Framework 4-6 kennen- muss aber nicht!', '26.06.2017 18:15', 60, 'Thorsten Kansy'),
            new __WEBPACK_IMPORTED_MODULE_1__session_model__["a" /* Session */]('Advanced TypeScript', '', 'TypeScript wächst und gedeiht. Gerade in Verbindung mit Angular gewinnt die Sprache schnell an Beliebtheit. Neue Sprachfeatures machen es dabei möglich, die dynamische Natur von JavaScript zunehmend besser in einem statischen Typsystem abzubilden. Wir betrachten die fortgeschrittenen Möglichkeiten, die uns TypeScript bietet und die über reine Typüberprüfung hinausgehen, z.B. asynchrone Programmierung mit async/await oder UI-Entwicklung mit React und JSX. Zusätzlich analysieren wir den aktuellen Stand von TypeScript als Sprache. Schlussendlich werfen wir einen Blick auf geplante Entwicklungen der Zukunft.', '27.06.2017 09:00', 60, 'Marius Schulz'),
            new __WEBPACK_IMPORTED_MODULE_1__session_model__["a" /* Session */]('Are Progressive Web Apps the Future of Web Development?', '', 'There’s been a lot of talk lately about Progressive Web Apps. The main purpose is to provide an app-like user experience. For those who haven’t heard of them, progressive web apps aim to bridge the gap between the mobile web and native apps by providing things like the ability to install, provide offline support, run background processes and send push notifications. What are the non-technical doubts about using it? How does it work? Is it worth to dig into PWA now? Johannes Weber shows PWA in action and is intended to answer all these questions.', '27.06.2017 15:30', 60, 'Johannes Weber')
        ];
    }
    SessionsService.prototype.getSessions = function () {
        return this.sessions.slice();
    };
    SessionsService.prototype.addSession = function (session) {
        this.sessions.push(session);
        this.sessionsChanged.emit(this.getSessions());
    };
    return SessionsService;
}());

//# sourceMappingURL=sessions.service.js.map

/***/ }),

/***/ 92:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 92;


/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(110);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ })

},[212]);
//# sourceMappingURL=main.bundle.js.map