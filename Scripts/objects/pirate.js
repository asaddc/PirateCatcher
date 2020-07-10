var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var Pirate = /** @class */ (function (_super) {
        __extends(Pirate, _super);
        // Variables
        // Constructor
        function Pirate(assetManager, imageString, x, y) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            var _this = _super.call(this, assetManager.getResult(imageString)) || this;
            // Default position
            _this.x = x;
            _this.y = y;
            // Set up event handlers
            _this.on("mouseover", _this.MouseOver);
            _this.on("mouseout", _this.MouseOut);
            _this.MakePirateJump();
            return _this;
        }
        // Methods
        // Event Handlers
        Pirate.prototype.MouseOver = function () {
            this.alpha = 0.85;
        };
        Pirate.prototype.MouseOut = function () {
            this.alpha = 1.0;
        };
        Pirate.prototype.MakePirateJump = function () {
            var _this = this;
            setInterval(function () {
                _this.x = _this.GetRandomValue(855);
                _this.y = _this.GetRandomValue(555);
            }, 600);
        };
        Pirate.prototype.GetRandomValue = function (upperLimit) {
            return Math.floor(Math.random() * (upperLimit - 1 + 1)) + 1;
        };
        return Pirate;
    }(createjs.Bitmap));
    objects.Pirate = Pirate;
})(objects || (objects = {}));
//# sourceMappingURL=pirate.js.map