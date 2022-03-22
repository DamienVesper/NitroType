// Tue Mar 22 2022 15:45:37 GMT-0700 (Pacific Daylight Time)
// https://www.nitrotype.com/dist/site/js/ga.js

!function(e) {
	function t(t) {
		for (var r, i, s = t[0], c = t[1], l = t[2], p = 0, f = []; p < s.length; p++) i = s[p], Object.prototype.hasOwnProperty.call(o, i) && o[i] && f.push(o[i][0]), o[i] = 0;
		for (r in c) Object.prototype.hasOwnProperty.call(c, r) && (e[r] = c[r]);
		for (u && u(t); f.length;) f.shift()();
		return a.push.apply(a, l || []), n()
	}

	function n() {
		for (var e, t = 0; t < a.length; t++) {
			for (var n = a[t], r = !0, s = 1; s < n.length; s++) {
				var c = n[s];
				0 !== o[c] && (r = !1)
			}
			r && (a.splice(t--, 1), e = i(i.s = n[0]))
		}
		return e
	}
	var r = {},
		o = {
			9: 0,
			1: 0
		},
		a = [];

	function i(t) {
		if (r[t]) return r[t].exports;
		var n = r[t] = {
			i: t,
			l: !1,
			exports: {}
		};
		return e[t].call(n.exports, n, n.exports, i), n.l = !0, n.exports
	}
	i.m = e, i.c = r, i.d = function(e, t, n) {
		i.o(e, t) || Object.defineProperty(e, t, {
			enumerable: !0,
			get: n
		})
	}, i.r = function(e) {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(e, "__esModule", {
			value: !0
		})
	}, i.t = function(e, t) {
		if (1 & t && (e = i(e)), 8 & t) return e;
		if (4 & t && "object" == typeof e && e && e.__esModule) return e;
		var n = Object.create(null);
		if (i.r(n), Object.defineProperty(n, "default", {
				enumerable: !0,
				value: e
			}), 2 & t && "string" != typeof e)
			for (var r in e) i.d(n, r, function(t) {
				return e[t]
			}.bind(null, r));
		return n
	}, i.n = function(e) {
		var t = e && e.__esModule ? function() {
			return e.default
		} : function() {
			return e
		};
		return i.d(t, "a", t), t
	}, i.o = function(e, t) {
		return Object.prototype.hasOwnProperty.call(e, t)
	}, i.p = "/dist/site/js/";
	var s = window.webpackJsonp = window.webpackJsonp || [],
		c = s.push.bind(s);
	s.push = t, s = s.slice();
	for (var l = 0; l < s.length; l++) t(s[l]);
	var u = c;
	a.push([325, 0, 2]), n()
}({
	10: function(e, t, n) {
		"use strict";
		n.d(t, "b", (function() {
			return s
		}));

		function r(e, t) {
			var n = Object.keys(e);
			if (Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(e);
				t && (r = r.filter((function(t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				}))), n.push.apply(n, r)
			}
			return n
		}

		function o(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = null != arguments[t] ? arguments[t] : {};
				t % 2 ? r(Object(n), !0).forEach((function(t) {
					a(e, t, n[t])
				})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach((function(t) {
					Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
				}))
			}
			return e
		}

		function a(e, t, n) {
			return t in e ? Object.defineProperty(e, t, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = n, e
		}
		var i = function() {
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case "nitrotype/globals/SET_GLOBALS":
						return o({}, t.payload)
				}
				return e
			},
			s = n(29);
		t.a = i
	},
	100: function(e, t, n) {
		"use strict";
		var r = n(6),
			o = n(0),
			a = n.n(o),
			i = (n(1), n(3)),
			s = n.n(i),
			c = function(e) {
				var t = e.name,
					n = e.offsetTop,
					r = e.transition,
					o = void 0 === r || r,
					i = e.size,
					c = e.color,
					l = e.extraClasses,
					u = e.cacheId,
					p = "/dist/site/images/icons/icons.css.".concat(u, ".svg#icon-").concat(t),
					f = i ? "icon-".concat(t, "-").concat(i) : "icon-".concat(t),
					d = n ? "icon--n-".concat(n) : null,
					m = c ? "tc-".concat(c) : null;
				return a.a.createElement("svg", {
					className: s()("icon", f, d, {
						"icon--nt": !o
					}, m, l)
				}, a.a.createElement("use", {
					xmlnsXlink: "http://www.w3.org/1999/xlink",
					xlinkHref: p
				}))
			};
		t.a = Object(r.b)((function(e) {
			return {
				cacheId: e.globals.CACHE_ID_INTEGER
			}
		}), (function(e) {
			return {}
		}))(c)
	},
	11: function(e, t, n) {
		"use strict";
		n.d(t, "l", (function() {
			return o
		})), n.d(t, "f", (function() {
			return a
		})), n.d(t, "e", (function() {
			return i
		})), n.d(t, "y", (function() {
			return s
		})), n.d(t, "x", (function() {
			return c
		})), n.d(t, "v", (function() {
			return l
		})), n.d(t, "u", (function() {
			return u
		})), n.d(t, "a", (function() {
			return p
		})), n.d(t, "p", (function() {
			return f
		})), n.d(t, "o", (function() {
			return d
		})), n.d(t, "j", (function() {
			return m
		})), n.d(t, "i", (function() {
			return h
		})), n.d(t, "q", (function() {
			return y
		})), n.d(t, "k", (function() {
			return g
		})), n.d(t, "w", (function() {
			return v
		})), n.d(t, "c", (function() {
			return b
		})), n.d(t, "z", (function() {
			return w
		})), n.d(t, "b", (function() {
			return E
		})), n.d(t, "s", (function() {
			return O
		})), n.d(t, "h", (function() {
			return S
		})), n.d(t, "A", (function() {
			return _
		})), n.d(t, "r", (function() {
			return T
		})), n.d(t, "g", (function() {
			return N
		})), n.d(t, "m", (function() {
			return C
		})), n.d(t, "d", (function() {
			return A
		})), n.d(t, "t", (function() {
			return I
		})), n.d(t, "n", (function() {
			return k
		}));
		var r = n(5),
			o = function(e) {
				return {
					type: r.SET_LEVEL,
					payload: e
				}
			},
			a = function() {
				return {
					type: r.CLEAR_TEAM_NOTIFICATIONS
				}
			},
			i = function() {
				return {
					type: r.CLEAR_NEWLY_JOINED_TEAM_ID
				}
			},
			s = function(e) {
				return {
					type: r.UPDATE_WITH_TYPING_RACE_RESULTS,
					payload: e
				}
			},
			c = function(e) {
				return {
					type: r.UPDATE_WITH_MATH_RACE_RESULTS,
					payload: e
				}
			},
			l = function(e) {
				return {
					type: r.UPDATE_SOUND_PREFERENCES,
					payload: e
				}
			},
			u = function(e) {
				return {
					type: r.UPDATE_LINE_TYPE,
					payload: e
				}
			},
			p = function() {
				return {
					type: r.ADD_DQ
				}
			},
			f = function(e) {
				return {
					type: r.SET_UPGRADED_TO_GOLD,
					payload: e
				}
			},
			d = function(e) {
				return {
					type: r.SET_SEND_CASH_SUCCESSFUL,
					payload: e
				}
			},
			m = function(e) {
				return {
					type: r.SET_CASH_GIFT_RECEIVED,
					payload: e
				}
			},
			h = function(e) {
				return {
					type: r.REFRESH_USER_SESSION_AFTER_STRIPE_PURCHASE,
					payload: e
				}
			},
			y = function() {
				return {
					type: r.SET_USER_EMAIL_VALID
				}
			},
			g = function(e) {
				return {
					type: r.SET_EVENT_MODAL_VISIBILITY,
					payload: e
				}
			},
			v = function(e) {
				return {
					type: r.UPDATE_USERNAME,
					username: e
				}
			},
			b = function(e) {
				return {
					type: r.CAPTCHA_SUCCESSFUL,
					status: e
				}
			},
			w = function() {
				return {
					type: r.VISITED_NEWS
				}
			},
			E = function() {
				return {
					type: r.BACK_OFF_ACHIEVEMENTS_CHECK
				}
			},
			O = function() {
				return {
					type: r.TRACK_CHECKINS
				}
			},
			S = function(e) {
				return {
					type: r.ONLINE_NOTIFICATION_SEEN,
					userID: e
				}
			},
			_ = function() {
				return {
					type: r.VISITED_SHOP
				}
			},
			T = function(e, t) {
				return {
					type: r.STORE_LAST_PURCHASE,
					lastPurchaseUserID: e,
					lastPurchase: t
				}
			},
			N = function(e) {
				return {
					type: r.NEW_REALTIME_MESSAGE,
					payload: e
				}
			},
			C = function(e) {
				return {
					type: r.SET_QUALIFYING_INFO,
					payload: e
				}
			},
			A = function(e) {
				return {
					type: r.CLAIM_EXTRA_LEVEL_REWARD,
					payload: e
				}
			},
			I = function(e) {
				return {
					type: r.UPDATE_DAILY_CHALLENGES,
					challenges: e
				}
			},
			k = function(e) {
				return {
					type: r.SET_SELECTED_MATH_PROBLEM_TYPE,
					lessonID: e
				}
			}
	},
	113: function(e, t, n) {
		"use strict";
		n.d(t, "a", (function() {
			return A
		}));
		var r = n(0),
			o = n.n(r),
			a = (n(1), n(3)),
			i = n.n(a),
			s = n(41),
			c = n(2);

		function l(e) {
			return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}

		function u(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
			}
		}

		function p(e, t) {
			return (p = Object.setPrototypeOf || function(e, t) {
				return e.__proto__ = t, e
			})(e, t)
		}

		function f(e) {
			var t = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
				} catch (e) {
					return !1
				}
			}();
			return function() {
				var n, r = m(e);
				if (t) {
					var o = m(this).constructor;
					n = Reflect.construct(r, arguments, o)
				} else n = r.apply(this, arguments);
				return d(this, n)
			}
		}

		function d(e, t) {
			return !t || "object" !== l(t) && "function" != typeof t ? function(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}(e) : t
		}

		function m(e) {
			return (m = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
				return e.__proto__ || Object.getPrototypeOf(e)
			})(e)
		}
		var h = function(e) {
				! function(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							writable: !0,
							configurable: !0
						}
					}), t && p(e, t)
				}(l, e);
				var t, n, r, a = f(l);

				function l(e) {
					var t;
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, l), (t = a.call(this, e)).state = {
						progress: 0
					};
					var n = e.animateFrom;
					return isNaN(n) && (n = e.progress), isNaN(n) && (n = 0), t.state = {
						progress: n,
						isComplete: e.progress >= t.props.goal
					}, t
				}
				return t = l, (n = [{
					key: "componentDidMount",
					value: function() {
						var e = this;
						setTimeout((function() {
							e.setState({
								progress: e.props.progress
							})
						}), 250)
					}
				}, {
					key: "render",
					value: function() {
						var e = this.props,
							t = e.title,
							n = e.field,
							r = e.reward,
							a = e.goal,
							l = this.state.progress,
							u = l / a * 100,
							p = l >= a,
							f = i()("daily-challenge-progress", {
								"is-complete": p
							});
						return o.a.createElement("div", {
							className: f
						}, o.a.createElement("div", {
							className: "daily-challenge-progress--info"
						}, o.a.createElement("div", {
							className: "daily-challenge-progress--requirements"
						}, o.a.createElement("div", {
							className: "daily-challenge-progress--name"
						}, o.a.createElement(s.a, {
							align: "left"
						}, t)), o.a.createElement("div", {
							className: "daily-challenge-progress--status"
						}, p ? "Earned" : "Earn", " ", Math.floor(r / 100) / 10, "k XP")), o.a.createElement("div", {
							className: "daily-challenge-progress--progress"
						}, o.a.createElement("div", {
							className: "daily-challenge-progress--progress-bar-container"
						}, o.a.createElement("div", {
							className: "daily-challenge-progress--progress-bar",
							style: {
								width: "".concat(Math.min(100, u), "%")
							}
						}), o.a.createElement("div", {
							className: "daily-challenge-progress--progress-bar--earned",
							style: {
								width: "".concat(Math.min(100, u), "%")
							}
						})))), o.a.createElement("div", {
							className: "daily-challenge-progress--badge"
						}, o.a.createElement("div", {
							className: "daily-challenge-progress--success"
						}), o.a.createElement("div", {
							className: "daily-challenge-progress--xp"
						}, Math.min(l || 0, a), o.a.createElement("span", {
							className: "daily-challenge-progress--divider"
						}, "/"), a), o.a.createElement("div", {
							className: "daily-challenge-progress--label"
						}, Object(c.u)(n, a))))
					}
				}]) && u(t.prototype, n), r && u(t, r), l
			}(o.a.PureComponent),
			y = n(8),
			g = n.n(y),
			v = n(100),
			b = n(4);

		function w(e) {
			return (w = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}

		function E() {
			return (E = Object.assign || function(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = arguments[t];
					for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
				}
				return e
			}).apply(this, arguments)
		}

		function O(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function S(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
			}
		}

		function _(e, t) {
			return (_ = Object.setPrototypeOf || function(e, t) {
				return e.__proto__ = t, e
			})(e, t)
		}

		function T(e) {
			var t = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
				} catch (e) {
					return !1
				}
			}();
			return function() {
				var n, r = C(e);
				if (t) {
					var o = C(this).constructor;
					n = Reflect.construct(r, arguments, o)
				} else n = r.apply(this, arguments);
				return N(this, n)
			}
		}

		function N(e, t) {
			return !t || "object" !== w(t) && "function" != typeof t ? function(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}(e) : t
		}

		function C(e) {
			return (C = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
				return e.__proto__ || Object.getPrototypeOf(e)
			})(e)
		}
		var A = function(e) {
			! function(e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						writable: !0,
						configurable: !0
					}
				}), t && _(e, t)
			}(i, e);
			var t, n, r, a = T(i);

			function i() {
				var e;
				O(this, i);
				for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
				return (e = a.call.apply(a, [this].concat(n))).state = {
					arriving: null,
					hasArriving: !1
				}, e.refresh = function() {
					var t, n, r = !isNaN(1e3 * (null === (t = e.props.dailyChallenges[0]) || void 0 === t ? void 0 : t.expiration)),
						o = g()(1e3 * (null === (n = e.props.dailyChallenges[0]) || void 0 === n ? void 0 : n.expiration)).fromNow();
					e.setState({
						hasArriving: r,
						arriving: o
					})
				}, e
			}
			return t = i, (n = [{
				key: "componentDidMount",
				value: function() {
					this.refresh(), setInterval(this.refresh, 1e3)
				}
			}, {
				key: "render",
				value: function() {
					var e = this,
						t = Object(b.o)(this.props.dailyChallenges, 0, 3);
					return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
						className: "daily-challenge-list--heading"
					}, o.a.createElement("h4", null, "Daily Challenges"), this.state.hasArriving && o.a.createElement("div", {
						className: "daily-challenge-list--arriving"
					}, o.a.createElement("div", {
						className: "tooltip tooltip--a tooltip--r",
						"data-ttcopy": "Your next set of Daily Challenges will arrive ".concat(this.state.arriving, "!")
					}, o.a.createElement("div", {
						className: "daily-challenge-list--arriving-label"
					}, o.a.createElement(v.a, {
						name: "recent-time"
					}), "New ", this.state.arriving)))), o.a.createElement("div", {
						className: "daily-challenge-list--challenges"
					}, t.map((function(t) {
						var n, r = null === (n = e.props.previousChallenges) || void 0 === n ? void 0 : n.find((function(e) {
							return e.challengeID === t.challengeID
						}));
						return o.a.createElement("div", {
							className: "raceResults--dailyChallenge",
							key: t.challengeID
						}, o.a.createElement(h, E({}, t, {
							animateFrom: null == r ? void 0 : r.progress
						})))
					}))))
				}
			}]) && S(t.prototype, n), r && S(t, r), i
		}(o.a.PureComponent)
	},
	125: function(e, t, n) {
		"use strict";

		function r(e, t, n, r, o, a, i) {
			try {
				var s = e[a](i),
					c = s.value
			} catch (e) {
				return void n(e)
			}
			s.done ? t(c) : Promise.resolve(c).then(r, o)
		}

		function o(e) {
			return function() {
				var t = this,
					n = arguments;
				return new Promise((function(o, a) {
					var i = e.apply(t, n);

					function s(e) {
						r(i, o, a, s, c, "next", e)
					}

					function c(e) {
						r(i, o, a, s, c, "throw", e)
					}
					s(void 0)
				}))
			}
		}

		function a(e) {
			return i.apply(this, arguments)
		}

		function i() {
			return (i = o(regeneratorRuntime.mark((function e(t) {
				return regeneratorRuntime.wrap((function(e) {
					for (;;) switch (e.prev = e.next) {
						case 0:
							return e.abrupt("return", new Promise((function(e, n) {
								var r = document.createElement("img");
								r.onload = function() {
									return e(r)
								}, r.onerror = n, r.src = t
							})));
						case 1:
						case "end":
							return e.stop()
					}
				}), e)
			})))).apply(this, arguments)
		}

		function s() {
			var e = document.createElement("canvas"),
				t = e.getContext("2d");
			return {
				canvas: e,
				ctx: t
			}
		}
		n.d(t, "b", (function() {
			return a
		})), n.d(t, "a", (function() {
			return s
		}))
	},
	13: function(e, t, n) {
		"use strict";
		n.d(t, "b", (function() {
			return o
		})), n.d(t, "c", (function() {
			return r
		}));
		var r = {};
		n.r(r), n.d(r, "SEARCH_TEAMS", (function() {
			return a
		})), n.d(r, "IGNORE_TEAM_INVITE", (function() {
			return i
		})), n.d(r, "ACCEPT_TEAM_INVITE", (function() {
			return s
		})), n.d(r, "SET_TEAM_DETAILS", (function() {
			return c
		})), n.d(r, "SET_TEAM_APPLICATIONS", (function() {
			return v
		})), n.d(r, "ACCEPT_TEAM_APPLICATION", (function() {
			return b
		})), n.d(r, "DENY_TEAM_APPLICATION", (function() {
			return w
		})), n.d(r, "ACCEPT_ALL_TEAM_APPLICATIONS", (function() {
			return E
		})), n.d(r, "DENY_ALL_TEAM_APPLICATIONS", (function() {
			return O
		})), n.d(r, "LEAVE_TEAM", (function() {
			return l
		})), n.d(r, "PROMOTE_TO_OFFICER", (function() {
			return S
		})), n.d(r, "DEMOTE_TO_MEMBER", (function() {
			return _
		})), n.d(r, "REMOVE_MEMBER", (function() {
			return T
		})), n.d(r, "APPLY_FOR_TEAM", (function() {
			return u
		})), n.d(r, "JOIN_TEAM", (function() {
			return p
		})), n.d(r, "NEW_MOTD", (function() {
			return f
		})), n.d(r, "NEW_STATUS_UPDATE", (function() {
			return d
		})), n.d(r, "INVITE_TO_TEAM", (function() {
			return m
		})), n.d(r, "CREATE_TEAM", (function() {
			return h
		})), n.d(r, "EDIT_TEAM", (function() {
			return y
		})), n.d(r, "DISBAND_TEAM", (function() {
			return g
		}));
		var o = {};
		n.r(o), n.d(o, "teamSearch", (function() {
			return te
		})), n.d(o, "ignoreTeamInvite", (function() {
			return ne
		})), n.d(o, "acceptTeamInvite", (function() {
			return re
		})), n.d(o, "leaveTeam", (function() {
			return oe
		})), n.d(o, "fetchDetails", (function() {
			return ae
		})), n.d(o, "applyForTeam", (function() {
			return ie
		})), n.d(o, "joinTeam", (function() {
			return Ee
		})), n.d(o, "fetchTeamApplications", (function() {
			return se
		})), n.d(o, "acceptTeamApplication", (function() {
			return ce
		})), n.d(o, "denyTeamApplication", (function() {
			return le
		})), n.d(o, "acceptAllTeamApplications", (function() {
			return ue
		})), n.d(o, "denyAllTeamApplications", (function() {
			return pe
		})), n.d(o, "promoteToOfficer", (function() {
			return fe
		})), n.d(o, "demoteToMember", (function() {
			return de
		})), n.d(o, "removeMember", (function() {
			return me
		})), n.d(o, "updateMOTD", (function() {
			return he
		})), n.d(o, "inviteToTeam", (function() {
			return ye
		})), n.d(o, "editTeam", (function() {
			return ve
		})), n.d(o, "createTeam", (function() {
			return ge
		})), n.d(o, "disbandTeam", (function() {
			return be
		})), n.d(o, "addMotdBoost", (function() {
			return we
		}));
		var a = "nitrotype/team/SEARCH_TEAMS",
			i = "nitrotype/team/IGNORE_TEAM_INVITE",
			s = "nitrotype/team/ACCEPT_TEAM_INVITE",
			c = "nitrotype/team/SET_TEAM_DETAILS",
			l = "nitrotype/team/LEAVE_TEAM",
			u = "nitrotype/team/APPLY_FOR_TEAM",
			p = "nitrotype/team/JOIN_TEAM",
			f = "nitrotype/team/NEW_MOTD",
			d = "nitrotype/team/NEW_STATUS_UPDATE",
			m = "nitrotype/team/INVITE_TO_TEAM",
			h = "nitrotype/team/CREATE_TEAM",
			y = "nitrotype/team/EDIT_TEAM",
			g = "nitrotype/team/DISBAND_TEAM",
			v = "nitrotype/team/SET_TEAM_APPLICATIONS",
			b = "nitrotype/team/ACCEPT_TEAM_APPLICATION",
			w = "nitrotype/team/DENY_TEAM_APPLICATION",
			E = "nitrotype/team/ACCEPT_ALL_TEAM_APPLICATIONS",
			O = "nitrotype/team/DENY_ALL_TEAM_APPLICATIONS",
			S = "nitrotype/team/PROMOTE_TO_OFFICER",
			_ = "nitrotype/team/DEMOTE_TO_MEMBER",
			T = "nitrotype/team/REMOVE_MEMBER";

		function N(e) {
			return function(e) {
				if (Array.isArray(e)) return C(e)
			}(e) || function(e) {
				if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
			}(e) || function(e, t) {
				if (!e) return;
				if ("string" == typeof e) return C(e, t);
				var n = Object.prototype.toString.call(e).slice(8, -1);
				"Object" === n && e.constructor && (n = e.constructor.name);
				if ("Map" === n || "Set" === n) return Array.from(e);
				if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return C(e, t)
			}(e) || function() {
				throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
			}()
		}

		function C(e, t) {
			(null == t || t > e.length) && (t = e.length);
			for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
			return r
		}

		function A(e, t) {
			var n = Object.keys(e);
			if (Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(e);
				t && (r = r.filter((function(t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				}))), n.push.apply(n, r)
			}
			return n
		}

		function I(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = null != arguments[t] ? arguments[t] : {};
				t % 2 ? A(Object(n), !0).forEach((function(t) {
					k(e, t, n[t])
				})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : A(Object(n)).forEach((function(t) {
					Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
				}))
			}
			return e
		}

		function k(e, t, n) {
			return t in e ? Object.defineProperty(e, t, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = n, e
		}
		var R = {
				invites: null,
				teams: null,
				info: null,
				members: null,
				stats: null,
				season: null,
				motd: null,
				leaderboard: null,
				applications: null,
				sentInvites: []
			},
			P = function(e, t) {
				return I(I({}, e), t)
			},
			j = function(e, t) {
				var n = N(e.invites).filter((function(e) {
					return e.teamID != t
				}));
				return I(I({}, e), {}, {
					invites: n
				})
			},
			D = function(e, t) {
				var n = t.info,
					r = t.members,
					o = t.stats,
					a = t.season,
					i = t.motd,
					s = t.leaderboard,
					c = t.removed;
				return I(I({}, e), {}, {
					info: n,
					members: r,
					stats: o,
					season: a,
					motd: i,
					leaderboard: s,
					removed: c
				})
			},
			x = function(e, t) {
				return I(I({}, e), {}, {
					applications: t
				})
			},
			L = function(e, t) {
				var n = t.userID,
					r = N(e.applications).filter((function(e) {
						return e.userID != n
					}));
				return (!r.length || r.length < 1) && (r = null), I(I({}, e), {}, {
					applications: r
				})
			},
			M = function(e, t) {
				var n = N(e.applications).filter((function(e) {
					return e.userID != t
				}));
				return (!n.length || n.length < 1) && (n = null), I(I({}, e), {}, {
					applications: n
				})
			},
			U = function(e) {
				return I(I({}, e), {}, {
					applications: null
				})
			},
			F = function(e) {
				return I(I({}, e), {}, {
					applications: null
				})
			},
			B = function(e, t) {
				var n = N(e.members),
					r = N(e.season),
					o = function(e) {
						return e.userID == t && (e.role = "officer"), e
					};
				return n = n.map(o), r = r.map(o), I(I({}, e), {}, {
					members: n,
					season: r
				})
			},
			q = function(e, t) {
				var n = N(e.members),
					r = N(e.season),
					o = function(e) {
						return e.userID == t && (e.role = "member"), e
					};
				return n = n.map(o), r = r.map(o), I(I({}, e), {}, {
					members: n,
					season: r
				})
			},
			H = function(e, t) {
				var n = N(e.members),
					r = N(e.season),
					o = function(e) {
						return e.userID != t
					};
				return n = n.filter(o), r = r.filter(o), I(I({}, e), {}, {
					members: n,
					season: r
				})
			},
			G = function(e, t) {
				var n = t.userID;
				return I(I({}, e), {}, {
					sentInvites: [].concat(N(e.sentInvites), [n])
				})
			},
			V = function() {
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : R,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case a:
						return P(e, t.payload);
					case i:
						return j(e, t.payload);
					case c:
						return D(e, t.payload);
					case v:
						return x(e, t.payload);
					case b:
						return L(e, t.payload);
					case w:
						return M(e, t.payload);
					case E:
						return U(e);
					case O:
						return F(e);
					case S:
						return B(e, t.payload);
					case _:
						return q(e, t.payload);
					case T:
						return H(e, t.payload);
					case m:
						return G(e, t.payload)
				}
				return e
			},
			z = function(e) {
				return {
					type: a,
					payload: e
				}
			},
			W = function(e) {
				return {
					type: p,
					payload: e
				}
			},
			Y = function(e) {
				return {
					type: c,
					payload: e
				}
			},
			X = n(2),
			K = n(7),
			J = n(8),
			Q = n.n(J);

		function Z(e, t) {
			var n = Object.keys(e);
			if (Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(e);
				t && (r = r.filter((function(t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				}))), n.push.apply(n, r)
			}
			return n
		}

		function $(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = null != arguments[t] ? arguments[t] : {};
				t % 2 ? Z(Object(n), !0).forEach((function(t) {
					ee(e, t, n[t])
				})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Z(Object(n)).forEach((function(t) {
					Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
				}))
			}
			return e
		}

		function ee(e, t, n) {
			return t in e ? Object.defineProperty(e, t, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = n, e
		}
		var te = function() {
				var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
					n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
				return function(r) {
					Object(X.b)("/api/v2/teams/search", {
						method: "post",
						params: {
							invites: e ? 1 : 0,
							racesPlayed: t,
							speed: n
						},
						apiScope: "teamSearch"
					}, r).then((function(e) {
						r(z(e))
					}), (function() {
						return null
					}))
				}
			},
			ne = function(e) {
				return function(t) {
					Object(X.b)("/api/v2/teams/".concat(e, "/ignore-invite"), {
						method: "post",
						apiScope: "ignoreTeamInvite"
					}, t).then((function(n) {
						t(function(e) {
							return {
								type: i,
								payload: e
							}
						}(e))
					}), (function() {
						return null
					}))
				}
			},
			re = function(e) {
				return function(t) {
					Object(X.b)("/api/v2/teams/".concat(e, "/accept-invite"), {
						method: "post",
						apiScope: "acceptTeamInvite"
					}, t).then((function(e) {
						t(function(e) {
							return {
								type: s,
								payload: e
							}
						}({
							teamID: e.teamID,
							tag: e.tag,
							tagColor: e.tagColor
						}))
					}), (function() {
						return null
					}))
				}
			},
			oe = function() {
				return function(e, t) {
					var n, r = "unknown",
						o = t().user.userID,
						a = null === (n = t().team.members) || void 0 === n ? void 0 : n.find((function(e) {
							return e.userID === o
						}));
					a && (r = Q()().unix() - a.joinStamp), K.a.trackEvent("teams", "leave", "timeOnTeam-".concat(r), null), Object(X.b)("/api/v2/teams/leave", {
						method: "post",
						apiScope: "leaveTeam"
					}, e).then((function(t) {
						e(function(e) {
							return {
								type: l,
								payload: e
							}
						}(t))
					}), (function() {
						return null
					}))
				}
			},
			ae = function(e) {
				var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
					n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
					r = t ? "/api/v2/classes" : "/api/v2/teams/".concat(e),
					o = {};
				return n && (o.isMember = 1),
					function(e) {
						Object(X.b)(r, {
							method: "get",
							params: o,
							apiScope: "fetchDetails"
						}, e).then((function(t) {
							e(Y(t))
						}), (function() {
							return null
						}))
					}
			},
			ie = function(e) {
				return function(t, n) {
					Object(X.b)("/api/v2/teams/".concat(e, "/apply"), {
						method: "post",
						apiScope: "applyForTeam"
					}, t).then((function(n) {
						"applied" === n.status ? t(function(e) {
							return {
								type: u,
								payload: e
							}
						}(e)) : "joined" === n.status && t(W(n)), K.a.trackEvent("teams", "join", "apply", null)
					}), (function() {
						return null
					}))
				}
			},
			se = function() {
				return function(e) {
					Object(X.b)("/api/v2/teams/applications", {
						method: "get",
						apiScope: "fetchApplications"
					}, e).then((function(t) {
						e(function(e) {
							return {
								type: v,
								payload: e
							}
						}(t))
					}), (function() {
						return null
					}))
				}
			},
			ce = function(e, t) {
				return function(n, r) {
					Object(X.b)("/api/v2/team-applications/".concat(t, "/accept"), {
						method: "post",
						apiScope: "denyTeamApplication"
					}, n).then((function(r) {
						n(function(e) {
							return {
								type: b,
								payload: e
							}
						}({
							teamID: e,
							userID: t
						})), K.a.trackEvent("teams", "join", "approve", null)
					}), (function() {
						return null
					}))
				}
			},
			le = function(e, t) {
				return function(t, n) {
					Object(X.b)("/api/v2/team-applications/".concat(e, "/deny"), {
						method: "post",
						apiScope: "denyTeamApplication"
					}, t).then((function(n) {
						t(function(e) {
							return {
								type: w,
								payload: e
							}
						}(e)), K.a.trackEvent("teams", "join", "rejected", null)
					}), (function() {
						return null
					}))
				}
			},
			ue = function(e, t) {
				return function(n, r) {
					Object(X.b)("/api/v2/team-applications/accept-all", {
						method: "post",
						apiScope: "acceptAllTeamApplications"
					}, n).then((function(r) {
						n(function(e) {
							return {
								type: E,
								payload: e
							}
						}({
							teamID: e,
							userIDs: t
						})), K.a.trackEvent("teams", "join", "bulk accepted", null)
					}), (function() {
						return null
					}))
				}
			},
			pe = function(e) {
				return function(e, t) {
					Object(X.b)("/api/v2/team-applications/deny-all", {
						method: "post",
						apiScope: "denyAllTeamApplications"
					}, e).then((function(t) {
						e(function(e) {
							return {
								type: O,
								payload: e
							}
						}()), K.a.trackEvent("teams", "join", "bulk rejected", null)
					}), (function() {
						return null
					}))
				}
			},
			fe = function(e) {
				return function(t) {
					Object(X.b)("/api/v2/team-members/".concat(e, "/promote"), {
						method: "post",
						apiScope: "promoteToOfficer"
					}, t).then((function(n) {
						t(function(e) {
							return {
								type: S,
								payload: e
							}
						}(e)), K.a.trackEvent("teams", "user management", "promote", null)
					}), (function() {
						return null
					}))
				}
			},
			de = function(e) {
				return function(t) {
					Object(X.b)("/api/v2/team-members/".concat(e, "/demote"), {
						method: "post",
						apiScope: "demoteToMember"
					}, t).then((function(n) {
						t(function(e) {
							return {
								type: _,
								payload: e
							}
						}(e)), K.a.trackEvent("teams", "user management", "demote", null)
					}), (function() {
						return null
					}))
				}
			},
			me = function(e) {
				return function(t) {
					Object(X.b)("/api/v2/team-members/".concat(e, "/kick"), {
						method: "post",
						apiScope: "removeMember"
					}, t).then((function(n) {
						t(function(e) {
							return {
								type: T,
								payload: e
							}
						}(e)), K.a.trackEvent("teams", "user management", "remove", null)
					}), (function() {
						return null
					}))
				}
			},
			he = function(e, t) {
				return function(n, r) {
					var o = r().team.motd;
					Object(X.b)("/api/v2/teams/motd", {
						method: "post",
						params: {
							message: e
						},
						apiScope: "updateMOTD"
					}, n).then((function() {
						var e = "never";
						Array.isArray(o) && o.length && (e = Q()().unix() - o[0].createdStamp), K.a.trackEvent("teams", "motd", "update", {
							"team-motd-last-updated": e
						}), n({
							type: f,
							payload: t
						})
					}), (function() {
						return null
					}))
				}
			},
			ye = function(e, t) {
				return function(n) {
					var r = "/api/v2/teams/".concat(e, "/invite");
					Object(X.b)(r, {
						method: "post"
					}, (function() {
						return null
					})).then((function() {
						K.a.trackEvent("teams", "user management", "invite", null), n({
							type: m,
							payload: {
								userID: e,
								teamID: t
							}
						})
					}))
				}
			},
			ge = function(e, t, n, r, o, a, i, s, c, l) {
				return function(u) {
					var p = {
						tag: e,
						name: t,
						tagColor: n,
						minRaces: r,
						minSpeed: o,
						otherRequirements: a,
						password: i,
						enrollment: c,
						autoRemove: l
					};
					Object(X.b)("/api/v2/teams/create", {
						method: "post",
						params: p,
						apiScope: "createTeam"
					}, u).then((function(e) {
						var t, n = parseInt(e.teamID);
						u((t = $($({}, p), {}, {
							teamID: n,
							cost: s
						}), {
							type: h,
							payload: t
						})), K.a.trackEvent("teams", "create", "minRaces-".concat(r, " minSpeed-").concat(o, " enrollment-").concat(c, " autoRemove-").concat(l), null)
					}), (function() {
						return null
					}))
				}
			},
			ve = function(e, t, n, r, o, a, i, s, c) {
				return function(l) {
					var u = {
						tag: e,
						name: t,
						tagColor: n,
						minRaces: r,
						minSpeed: o,
						otherRequirements: a,
						password: i,
						enrollment: s,
						autoRemove: c
					};
					Object(X.b)("/api/v2/teams/update", {
						method: "post",
						params: u,
						apiScope: "editTeam"
					}, l).then((function(t) {
						l({
							type: y,
							payload: {
								tag: e,
								tagColor: n
							}
						}), K.a.trackEvent("teams", "edit", "minRaces-".concat(r, " minSpeed-").concat(o, " enrollment-").concat(s, " autoRemove-").concat(c), null)
					}), (function() {
						return null
					}))
				}
			},
			be = function(e) {
				return function(t, n) {
					var r = n().team;
					K.a.trackEvent("teams", "disband", "members-".concat(r.members.length, " age-").concat(Q()().unix() - r.info.createdStamp), null), Object(X.b)("/api/v2/teams/disband", {
						method: "post",
						params: {
							password: e
						},
						apiScope: "disbandTeam"
					}, t).then((function() {
						var e;
						t({
							type: g,
							payload: e
						})
					}), (function() {
						return null
					}))
				}
			},
			we = function(e, t) {
				return e = parseInt(e),
					function(n, r) {
						r().team;
						Object(X.b)("/api/v2/teams/boost", {
							method: "post",
							params: {
								boostID: e,
								teamMotdID: t
							},
							apiScope: "addMotdBoost"
						}, n).then((function() {
							K.a.trackEvent("teams", "motd", "boost", {
								"team-motd-boost-id": e
							})
						}), (function() {
							return null
						}))
					}
			},
			Ee = W;
		n(82), t.a = V
	},
	132: function(e, t, n) {
		var r = {
			"./es-us": 99,
			"./es-us.js": 99
		};

		function o(e) {
			var t = a(e);
			return n(t)
		}

		function a(e) {
			if (!n.o(r, e)) {
				var t = new Error("Cannot find module '" + e + "'");
				throw t.code = "MODULE_NOT_FOUND", t
			}
			return r[e]
		}
		o.keys = function() {
			return Object.keys(r)
		}, o.resolve = a, e.exports = o, o.id = 132
	},
	133: function(e, t) {
		function n(e) {
			var t = new Error("Cannot find module '" + e + "'");
			throw t.code = "MODULE_NOT_FOUND", t
		}
		n.keys = function() {
			return []
		}, n.resolve = n, e.exports = n, n.id = 133
	},
	14: function(e, t, n) {
		"use strict";
		n.d(t, "a", (function() {
			return o
		})), n.d(t, "c", (function() {
			return r
		})), n.d(t, "b", (function() {
			return I
		}));
		var r = {};
		n.r(r), n.d(r, "CLAIM_ACHIEVEMENT", (function() {
			return a
		})), n.d(r, "SET_UNCLAIMED_ACHIEVEMENTS", (function() {
			return i
		})), n.d(r, "VERIFY_NEW_ACHIEVEMENTS", (function() {
			return s
		})), n.d(r, "NEW_UNCLAIMED_ACHIEVEMENTS", (function() {
			return c
		})), n.d(r, "CLEAR_UNCLAIMED_ACHIEVEMENTS", (function() {
			return l
		})), n.d(r, "CLEAR_SEASON_REWARDS", (function() {
			return u
		})), n.d(r, "NEW_INSTANT_CLAIMED_ACHIEVEMENT", (function() {
			return p
		}));
		var o = {};
		n.r(o), n.d(o, "claimAchievement", (function() {
			return _
		})), n.d(o, "verifyExtraTier", (function() {
			return T
		})), n.d(o, "verifyNewAchievements", (function() {
			return N
		})), n.d(o, "clearUnclaimedAchievements", (function() {
			return C
		})), n.d(o, "clearSeasonRewards", (function() {
			return A
		}));
		var a = "nitrotype/achievements/CLAIM_ACHIEVEMENT",
			i = "nitrotype/achievements/SET_UNCLAIMED_ACHIEVEMENTS",
			s = "nitrotype/achievements/VERIFY_NEW_ACHIEVEMENTS",
			c = "nitrotype/achievements/NEW_UNCLAIMED_ACHIEVEMENTS",
			l = "nitrotype/achievements/CLEAR_UNCLAIMED_ACHIEVEMENTS",
			u = "nitrotype/achievements/CLEAR_SEASON_REWARDS",
			p = "nitrotype/achievements/NEW_INSTANT_CLAIMED_ACHIEVEMENT";

		function f(e, t) {
			var n = Object.keys(e);
			if (Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(e);
				t && (r = r.filter((function(t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				}))), n.push.apply(n, r)
			}
			return n
		}

		function d(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = null != arguments[t] ? arguments[t] : {};
				t % 2 ? f(Object(n), !0).forEach((function(t) {
					m(e, t, n[t])
				})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach((function(t) {
					Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
				}))
			}
			return e
		}

		function m(e, t, n) {
			return t in e ? Object.defineProperty(e, t, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = n, e
		}
		var h = {
				unclaimedAchievements: [],
				instantAchieved: null
			},
			y = function(e, t) {
				return d(d({}, e), {}, {
					unclaimedAchievements: t.unclaimedAchievements
				})
			},
			g = function(e) {
				return d(d({}, e), {}, {
					unclaimedAchievements: []
				})
			},
			v = function(e) {
				return d(d({}, e), {}, {
					instantAchieved: null
				})
			},
			b = function(e, t) {
				var n = t.earnedAchievements;
				return d(d({}, e), {}, {
					instantAchieved: n
				})
			},
			w = function() {
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case c:
						return y(e, t.payload);
					case l:
						return g(e);
					case u:
						return v(e);
					case r.NEW_INSTANT_CLAIMED_ACHIEVEMENT:
						return b(e, t.payload)
				}
				return e
			},
			E = n(2),
			O = n(9),
			S = n(16),
			_ = function(e) {
				return function(t, n) {
					Object(E.b)("/api/v2/achievements/claim/".concat(e.achievementID), {
						method: "get",
						apiScope: "claimAchievement"
					}, t).then((function() {
						t(function(e, t) {
							return {
								type: a,
								payload: e,
								allLoot: t
							}
						}(e, n().globals.LOOT))
					})).catch((function(e) {
						console.error("Error claiming achievement", e)
					}))
				}
			},
			T = function(e) {
				return function(t, n) {
					Object(E.b)("/api/v2/achievements/extra", {
						method: "post",
						params: {
							id: e
						}
					}).then((function(r) {
						var o, a = I.parseAchievements(null === (o = n().globals.ACHIEVEMENTS) || void 0 === o ? void 0 : o.LIST).find((function(t) {
							return t.achievementID === parseInt(e)
						}));
						a && (t(O.b.claimExtraLevelReward(r)), t(S.b.addNotifications([{
							type: "seasonRewardsEarned",
							data: [a]
						}])))
					}), (function(e) {
						t(O.b.backOffAchievementsCheck()), console.warn("error verifying extra tier achievement", e)
					}))
				}
			},
			N = function(e) {
				return function(t, n) {
					Object(E.b)("/api/v2/achievements/check", {
						method: "post",
						params: {
							ids: e
						}
					}, (function() {
						return null
					})).then((function(e) {
						var r = e.user || {},
							o = [];
						Object.keys(e.unclaimed).forEach((function(t) {
							o.push([parseInt(t, 10), parseInt(e.unclaimed[t], 10)])
						}));
						var a = [];
						e.achieved && Object.keys(e.achieved).length > 0 && Object.keys(e.achieved).forEach((function(t) {
							a.push([parseInt(t), e.achieved[t][0], e.achieved[t][1]])
						}));
						var i, s = [];
						if (e.instantClaimed && Object.keys(e.instantClaimed).length > 0) {
							var l, u = I.parseAchievements(null === (l = n().globals.ACHIEVEMENTS) || void 0 === l ? void 0 : l.LIST);
							Object.keys(e.instantClaimed).forEach((function(e) {
								var t = parseInt(e);
								s.push(u.find((function(e) {
									return e.achievementID === t
								})))
							}))
						}
						if (null != o && o.length) {
							var f, d, m = (null === (f = n()) || void 0 === f || null === (d = f.user) || void 0 === d ? void 0 : d.achievementsUnclaimed.map((function(e) {
									return e[0]
								}))) || [],
								h = o.map((function(e) {
									return {
										type: "achievements",
										data: e
									}
								}));
							h = h.filter((function(e) {
								var t = e.data[0];
								return -1 === m.indexOf(t)
							})), t(S.b.addNotifications(h))
						}(t({
							type: c,
							payload: {
								user: r,
								unclaimedAchievements: o,
								alreadyAchieved: a
							}
						}), s.length) && (t(function(e) {
							return {
								type: p,
								payload: e
							}
						}({
							earnedAchievements: s,
							lootItems: null === (i = n().globals) || void 0 === i ? void 0 : i.LOOT
						})), t(S.b.addNotifications([{
							type: "seasonRewardsEarned",
							data: s
						}])))
					}), (function(e) {
						t(O.b.backOffAchievementsCheck()), console.warn("error verifying achievements", e)
					}))
				}
			},
			C = function() {
				return {
					type: l
				}
			},
			A = function() {
				return {
					type: u
				}
			},
			I = n(48);
		t.d = w
	},
	144: function(e, t, n) {
		"use strict";
		var r = n(0),
			o = n.n(r),
			a = (n(1), n(67));

		function i(e) {
			return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}

		function s(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function c(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
			}
		}

		function l(e, t) {
			return (l = Object.setPrototypeOf || function(e, t) {
				return e.__proto__ = t, e
			})(e, t)
		}

		function u(e) {
			var t = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
				} catch (e) {
					return !1
				}
			}();
			return function() {
				var n, r = f(e);
				if (t) {
					var o = f(this).constructor;
					n = Reflect.construct(r, arguments, o)
				} else n = r.apply(this, arguments);
				return p(this, n)
			}
		}

		function p(e, t) {
			return !t || "object" !== i(t) && "function" != typeof t ? function(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}(e) : t
		}

		function f(e) {
			return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
				return e.__proto__ || Object.getPrototypeOf(e)
			})(e)
		}
		var d = function(e) {
			! function(e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						writable: !0,
						configurable: !0
					}
				}), t && l(e, t)
			}(a, e);
			var t, n, r, o = u(a);

			function a() {
				return s(this, a), o.apply(this, arguments)
			}
			return t = a, (n = [{
				key: "render",
				value: function() {
					return null
				}
			}]) && c(t.prototype, n), r && c(t, r), a
		}(o.a.PureComponent);
		t.a = Object(a.a)(d)
	},
	15: function(e, t, n) {
		"use strict";
		n.d(t, "a", (function() {
			return o
		})), n.d(t, "b", (function() {
			return r
		}));
		var r = {};
		n.r(r), n.d(r, "LOG_IN_SUCCESSFUL", (function() {
			return s
		})), n.d(r, "LOG_IN_TO_CLASS", (function() {
			return c
		})), n.d(r, "LOG_OUT", (function() {
			return l
		}));
		var o = {};
		n.r(o), n.d(o, "logInWithPassword", (function() {
			return v
		})), n.d(o, "loginWithSSO", (function() {
			return b
		})), n.d(o, "logInToClass", (function() {
			return w
		})), n.d(o, "logOut", (function() {
			return E
		})), n.d(o, "register", (function() {
			return O
		})), n.d(o, "forgotPassword", (function() {
			return S
		})), n.d(o, "validateCaptcha", (function() {
			return _
		}));
		var a = n(88),
			i = n.n(a),
			s = (n(78), "nitrotype/authentication/LOG_IN_SUCCESSFUL"),
			c = "nitrotype/authentication/LOG_IN_TO_CLASS",
			l = "nitrotype/authentication/LOG_OUT",
			u = function(e) {
				return {
					type: s,
					payload: e
				}
			},
			p = function(e) {
				return {
					type: l,
					hash: e
				}
			},
			f = n(2),
			d = n(7),
			m = n(9);

		function h(e, t) {
			var n = Object.keys(e);
			if (Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(e);
				t && (r = r.filter((function(t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				}))), n.push.apply(n, r)
			}
			return n
		}

		function y(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = null != arguments[t] ? arguments[t] : {};
				t % 2 ? h(Object(n), !0).forEach((function(t) {
					g(e, t, n[t])
				})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : h(Object(n)).forEach((function(t) {
					Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
				}))
			}
			return e
		}

		function g(e, t, n) {
			return t in e ? Object.defineProperty(e, t, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = n, e
		}
		var v = function(e, t, n) {
				return function(r) {
					var o = Object(f.m)();
					Object(f.b)("/api/v2/auth/login/username", {
						method: "post",
						params: {
							username: e,
							password: t,
							captchaToken: n,
							tz: o
						},
						apiScope: "login"
					}, r).then((function(e) {
						r(u(e))
					}), (function() {
						return null
					}))
				}
			},
			b = function(e) {
				var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
				return function(n, r) {
					var o, a = r().user;
					a.qualifyingRaceComplete && (o = {
						qualifying: 1,
						avgSpeed: a.avgSpeed,
						avgAcc: a.avgAcc,
						carID: a.carID,
						raceSounds: a.raceSounds
					}), t.tz = Object(f.m)(), Object(f.b)("/api/v2/auth/login/".concat(e), {
						method: "post",
						params: y(y({}, t), o),
						apiScope: "login"
					}, n).then((function(e) {
						n(u(e))
					}), (function(e) {
						null != e && e.redirect && window.__navigateTo(e.redirect)
					}))
				}
			},
			w = function(e) {
				return function(t) {
					Object(f.b)("/api/v2/auth/class-login/" + e, {
						method: "post",
						params: {
							sectionID: e
						},
						apiScope: "logInToClass"
					}, t).then((function(e) {
						t({
							type: c,
							payload: e
						})
					}), (function() {
						return null
					}))
				}
			},
			E = function() {
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
				return function(t) {
					t(p(e))
				}
			},
			O = function(e, t, n, r, o) {
				return function(r, a) {
					var i, s = Object(f.m)(),
						c = a().user;
					c.qualifyingRaceComplete && (i = {
						qualifying: 1,
						avgSpeed: c.avgSpeed,
						avgAcc: c.avgAcc,
						carID: c.carID,
						raceSounds: c.raceSounds
					}), Object(f.b)("/api/v2/auth/register/username", {
						method: "post",
						params: y({
							username: e,
							password: t,
							email: n,
							acceptPolicy: "on",
							receiveContact: o ? "on" : "",
							tz: s
						}, i),
						apiScope: "signup"
					}, r).then((function(e) {
						r(u(e)), d.a.trackEvent("authentication", "signup", "username", null, !0)
					}), (function() {
						return null
					}))
				}
			},
			S = function(e) {
				return function(t) {
					Object(f.b)("/api/v2/auth/reset-password", {
						method: "post",
						params: {
							email: e
						},
						apiScope: "forgotPassword"
					}, t).then((function() {
						return null
					}), (function() {
						return null
					}))
				}
			},
			_ = function(e) {
				return function(t) {
					Object(f.b)("/api/v2/auth/validate-captcha", {
						method: "post",
						params: {
							token: e
						},
						apiScope: "validateCaptcha"
					}, t).then((function(e) {
						t(m.b.captchaSuccessful(e.captchaStatus))
					}), (function() {
						return null
					}))
				}
			};
		t.c = i.a
	},
	16: function(e, t, n) {
		"use strict";
		n.d(t, "b", (function() {
			return o
		})), n.d(t, "c", (function() {
			return r
		}));
		var r = {};
		n.r(r), n.d(r, "ADD_NOTIFICATIONS", (function() {
			return a
		})), n.d(r, "REMOVE_NOTIFICATIONS", (function() {
			return i
		})), n.d(r, "NEXT_NOTIFICATION", (function() {
			return s
		})), n.d(r, "MUTE_NOTIFICATION_GROUP", (function() {
			return c
		}));
		var o = {};
		n.r(o), n.d(o, "addNotifications", (function() {
			return b
		})), n.d(o, "removeNotifications", (function() {
			return w
		})), n.d(o, "muteNotificationGroup", (function() {
			return E
		}));
		var a = "nitrotype/notifications/ADD_NOTIFICATIONS",
			i = "nitrotype/notifications/REMOVE_NOTIFICATIONS",
			s = "nitrotype/notifications/NEXT_NOTIFICATION",
			c = "nitrotype/notifications/MUTE_NOTIFICATION_GROUP";
		n(9);

		function l(e) {
			return function(e) {
				if (Array.isArray(e)) return u(e)
			}(e) || function(e) {
				if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
			}(e) || function(e, t) {
				if (!e) return;
				if ("string" == typeof e) return u(e, t);
				var n = Object.prototype.toString.call(e).slice(8, -1);
				"Object" === n && e.constructor && (n = e.constructor.name);
				if ("Map" === n || "Set" === n) return Array.from(e);
				if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return u(e, t)
			}(e) || function() {
				throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
			}()
		}

		function u(e, t) {
			(null == t || t > e.length) && (t = e.length);
			for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
			return r
		}

		function p(e, t) {
			var n = Object.keys(e);
			if (Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(e);
				t && (r = r.filter((function(t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				}))), n.push.apply(n, r)
			}
			return n
		}

		function f(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = null != arguments[t] ? arguments[t] : {};
				t % 2 ? p(Object(n), !0).forEach((function(t) {
					d(e, t, n[t])
				})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach((function(t) {
					Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
				}))
			}
			return e
		}

		function d(e, t, n) {
			return t in e ? Object.defineProperty(e, t, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = n, e
		}
		var m = {
				mutedGroups: [],
				notifications: []
			},
			h = function(e, t, n) {
				return t = t.filter((function(t) {
					var r;
					if (e.mutedGroups.includes(t.type)) return !1;
					if ("friend-online" === (null === (r = t.data) || void 0 === r ? void 0 : r.type)) {
						var o;
						if (void 0 === n) return !0;
						var a = null == n || null === (o = n.friends) || void 0 === o ? void 0 : o.find((function(e) {
							return e.userID === t.data.from
						}));
						if (!a) return !1;
						if (!a.online) return !0;
						var i = Math.floor(Date.now() / 1e3) - 900;
						if (a.online > i) return !1
					}
					return !0
				})).map((function(e) {
					var t, r, o, a, i;
					"friend-online" === (null === (t = e.data) || void 0 === t ? void 0 : t.type) && (e.type = null === (i = e.data) || void 0 === i ? void 0 : i.type, e.data.friendType = (null == n ? void 0 : n.friends.find((function(t) {
						return t.userID === e.data.from
					})).friendType) || "friend");
					return e.id = e.type + "_" + ((null === (r = e.data) || void 0 === r ? void 0 : r.type) || "system") + "_" + ((null === (o = e.data) || void 0 === o ? void 0 : o.userID) || (null === (a = e.data) || void 0 === a ? void 0 : a.from) || Math.random().toString(36).substr(2, 9)), e
				})).filter((function(t) {
					return !e.notifications.some((function(e) {
						return e.id === t.id
					}))
				})), f(f({}, e), {}, {
					notifications: [].concat(l(e.notifications), l(t))
				})
			},
			y = function(e, t) {
				var n = l(e.notifications).filter((function(e) {
					return e.type !== t
				}));
				return f(f({}, e), {}, {
					notifications: l(n)
				})
			},
			g = function(e, t) {
				var n = l(e.mutedGroups || []);
				n.includes(t) || n.push(t);
				var r = e.notifications.filter((function(e) {
					return !n.includes(e.type)
				}));
				return f(f({}, e), {}, {
					notifications: l(r),
					mutedGroups: l(n)
				})
			},
			v = function() {
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case a:
						return h(e, t.notifications, t.user);
					case i:
						return y(e, t.payload);
					case c:
						return g(e, t.payload)
				}
				return e
			},
			b = function(e, t) {
				return {
					type: a,
					notifications: e,
					user: t
				}
			},
			w = function(e) {
				return {
					type: i,
					payload: e
				}
			},
			E = function(e) {
				return {
					type: c,
					payload: e
				}
			};
		t.a = v
	},
	19: function(e, t, n) {
		"use strict";
		n.d(t, "b", (function() {
			return o
		})), n.d(t, "c", (function() {
			return r
		}));
		var r = {};
		n.r(r), n.d(r, "SET_FRIENDS", (function() {
			return a
		})), n.d(r, "SET_REQUESTS", (function() {
			return i
		})), n.d(r, "REQUEST_FRIEND", (function() {
			return s
		})), n.d(r, "ACCEPT_REQUEST", (function() {
			return c
		})), n.d(r, "REMOVE_FRIEND", (function() {
			return l
		})), n.d(r, "IGNORE_REQUEST", (function() {
			return u
		})), n.d(r, "ACCEPT_ALL_REQUESTS", (function() {
			return p
		})), n.d(r, "IGNORE_ALL_REQUESTS", (function() {
			return f
		})), n.d(r, "SET_SEARCH_RESULTS", (function() {
			return d
		})), n.d(r, "INVITE_FRIENDS_TO_RACE", (function() {
			return m
		})), n.d(r, "ADD_RECENT_RACER", (function() {
			return h
		})), n.d(r, "CLEAR_RECENT_RACER_COUNT", (function() {
			return y
		}));
		var o = {};
		n.r(o), n.d(o, "getFriends", (function() {
			return F
		})), n.d(o, "getRequests", (function() {
			return B
		})), n.d(o, "acceptRequest", (function() {
			return q
		})), n.d(o, "ignoreRequest", (function() {
			return H
		})), n.d(o, "removeFriend", (function() {
			return G
		})), n.d(o, "acceptAllRequests", (function() {
			return V
		})), n.d(o, "ignoreAllRequests", (function() {
			return z
		})), n.d(o, "requestFriend", (function() {
			return W
		})), n.d(o, "searchUsers", (function() {
			return Y
		})), n.d(o, "inviteFriendsToRace", (function() {
			return X
		})), n.d(o, "addRecentRacer", (function() {
			return K
		})), n.d(o, "clearRecentRacerCount", (function() {
			return J
		}));
		var a = "nitrotype/friends/SET_FRIENDS",
			i = "nitrotype/friends/SET_REQUESTS",
			s = "nitrotype/friends/REQUEST_FRIEND",
			c = "nitrotype/friends/ACCEPT_REQUEST",
			l = "nitrotype/friends/REMOVE_FRIEND",
			u = "nitrotype/friends/IGNORE_REQUEST",
			p = "nitrotype/friends/ACCEPT_ALL_REQUESTS",
			f = "nitrotype/friends/IGNORE_ALL_REQUESTS",
			d = "nitrotype/friends/SET_SEARCH_RESULTS",
			m = "nitrotype/friends/INVITE_FRIENDS_TO_RACE",
			h = "nitrotype/friends/ADD_RECENT_RACER",
			y = "nitrotype/friends/CLEAR_RECENT_RACER_COUNT";

		function g(e) {
			return function(e) {
				if (Array.isArray(e)) return v(e)
			}(e) || function(e) {
				if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
			}(e) || function(e, t) {
				if (!e) return;
				if ("string" == typeof e) return v(e, t);
				var n = Object.prototype.toString.call(e).slice(8, -1);
				"Object" === n && e.constructor && (n = e.constructor.name);
				if ("Map" === n || "Set" === n) return Array.from(e);
				if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return v(e, t)
			}(e) || function() {
				throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
			}()
		}

		function v(e, t) {
			(null == t || t > e.length) && (t = e.length);
			for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
			return r
		}

		function b(e, t) {
			var n = Object.keys(e);
			if (Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(e);
				t && (r = r.filter((function(t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				}))), n.push.apply(n, r)
			}
			return n
		}

		function w(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = null != arguments[t] ? arguments[t] : {};
				t % 2 ? b(Object(n), !0).forEach((function(t) {
					E(e, t, n[t])
				})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : b(Object(n)).forEach((function(t) {
					Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
				}))
			}
			return e
		}

		function E(e, t, n) {
			return t in e ? Object.defineProperty(e, t, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = n, e
		}
		var O = {
				friends: [],
				requestedFriends: [],
				requests: [],
				searchResults: null,
				recentRacers: [],
				totalRecentRacers: 0
			},
			S = function(e, t) {
				return w(w({}, e), {}, {
					friends: t
				})
			},
			_ = function(e, t) {
				return w(w({}, e), {}, {
					requestedFriends: [].concat(g(e.requestedFriends), [t])
				})
			},
			T = function(e, t) {
				return w(w({}, e), {}, {
					requests: t
				})
			},
			N = function(e, t) {
				var n = g(e.requests);
				n = n.filter((function(e) {
					return parseInt(e.userID) !== parseInt(t.userID)
				}));
				var r = [].concat(g(e.friends), [w(w({}, t), {}, {
					friendType: "friend"
				})]);
				return w(w({}, e), {}, {
					requests: n,
					friends: r
				})
			},
			C = function(e, t) {
				var n = g(e.friends).filter((function(e) {
					return e.userID !== t
				}));
				return w(w({}, e), {}, {
					friends: n
				})
			},
			A = function(e, t) {
				var n = g(e.requests);
				return n = n.filter((function(e) {
					return parseInt(e.userID) !== parseInt(t)
				})), w(w({}, e), {}, {
					requests: n
				})
			},
			I = function(e, t) {
				var n = g(e.requests);
				return n = n.filter((function(e) {
					return !t.includes(e.userID)
				})), w(w({}, e), {}, {
					requests: n
				})
			},
			k = function(e) {
				return w(w({}, e), {}, {
					requests: []
				})
			},
			R = function(e, t) {
				return w(w({}, e), {}, {
					searchResults: t
				})
			},
			P = function(e, t) {
				var n = e.recentRacers.filter((function(e) {
					return e.userID !== t.userID
				}));
				return n.push(t), w(w({}, e), {}, {
					totalRecentRacers: e.totalRecentRacers ? e.totalRecentRacers + 1 : 1,
					recentRacers: n
				})
			},
			j = function(e) {
				return w(w({}, e), {}, {
					totalRecentRacers: 0
				})
			},
			D = function() {
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : O,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case a:
						return S(e, t.payload);
					case s:
						return _(e, t.payload);
					case i:
						return T(e, t.payload);
					case c:
						return N(e, t.payload);
					case l:
						return C(e, t.payload);
					case u:
						return A(e, t.payload);
					case p:
						return I(e, t.payload);
					case f:
						return k(e, t.payload);
					case d:
						return R(e, t.payload);
					case h:
						return P(e, t.payload);
					case y:
						return j(e)
				}
				return e
			},
			x = function(e) {
				return {
					type: a,
					payload: e
				}
			},
			L = n(2),
			M = n(7),
			U = n(4),
			F = function(e) {
				return function(t) {
					var n = "/api/v2/friends";
					e && (n += "?online=1"), Object(L.b)(n, {
						method: "get",
						apiScope: "getFriends"
					}, t).then((function(e) {
						if (e.values) {
							var n = e.values.map((function(t) {
								return Object(U.x)(e.fields, t)
							}));
							t(x(n))
						} else t(x([]))
					}), (function(e) {}))
				}
			},
			B = function() {
				return function(e) {
					Object(L.b)("/api/v2/friend-requests", {
						method: "get",
						apiScope: "getRequests"
					}, e).then((function(t) {
						var n;
						e((n = (null == t ? void 0 : t.requests) || [], {
							type: i,
							payload: n
						}))
					}), (function() {
						return null
					}))
				}
			},
			q = function(e) {
				return function(t) {
					Object(L.b)("/api/v2/friend-requests/".concat(e.userID, "/accept"), {
						method: "post",
						apiScope: "acceptRequest"
					}, t).then((function(n) {
						t({
							type: c,
							payload: e
						}), M.a.trackEvent("friends", "management", "accept", {
							"friends-last-login": e.lastLogin ? Math.round(Date.now() / 1e3) - e.lastLogin : "unknown",
							"friends-last-activity": e.lastActivity ? Math.round(Date.now() / 1e3) - e.lastActivity : "unknown",
							"friends-races-played": e.racesPlayed,
							"friends-membership": e.membership
						})
					}), (function() {
						return null
					}))
				}
			},
			H = function(e) {
				return function(t) {
					Object(L.b)("/api/v2/friend-requests/".concat(e.userID, "/deny"), {
						method: "post",
						apiScope: "ignoreRequest"
					}, t).then((function() {
						var n;
						t((n = e.userID, {
							type: u,
							payload: n
						})), M.a.trackEvent("friends", "management", "ignore", {
							"friends-last-login": e.lastLogin ? Math.round(Date.now() / 1e3) - e.lastLogin : "unknown",
							"friends-last-activity": e.lastActivity ? Math.round(Date.now() / 1e3) - e.lastActivity : "unknown",
							"friends-races-played": e.racesPlayed,
							"friends-membership": e.membership
						})
					}), (function() {
						return null
					}))
				}
			},
			G = function(e) {
				return function(t, n) {
					Object(L.b)("/api/v2/friends/".concat(e.userID), {
						method: "delete",
						apiScope: "removeFriend"
					}, t).then((function(n) {
						var r;
						t((r = e.userID, {
							type: l,
							payload: r
						})), M.a.trackEvent("friends", "management", "remove", {
							"friends-last-login": e.lastLogin ? Math.round(Date.now() / 1e3) - e.lastLogin : "unknown",
							"friends-last-activity": e.lastActivity ? Math.round(Date.now() / 1e3) - e.lastActivity : "unknown",
							"friends-races-played": e.racesPlayed,
							"friends-membership": e.membership,
							"friends-time-as-friends": Math.round(Date.now() / 1e3) - e.createdStamp,
							"friends-account-banned": e.status
						})
					}), (function() {
						return null
					}))
				}
			},
			V = function() {
				return function(e) {
					Object(L.b)("/api/v2/friend-requests/accept-all", {
						method: "post",
						apiScope: "acceptAllRequests"
					}, e).then((function(t) {
						var n;
						e((n = t.ids || [], {
							type: p,
							payload: n
						})), M.a.trackEvent("friends", "management", "accept all", {
							"friends-last-login": "(page:undefined)",
							"friends-last-activity": "(page:undefined)",
							"friends-races-played": "(page:undefined)",
							"friends-membership": "(page:undefined)",
							"friends-time-as-friends": "(page:undefined)",
							"friends-account-banned": "(page:undefined)",
							"friends-accepted-count": t.ids.length,
							"friends-ignored-count": "(page:undefined)"
						})
					}), (function() {
						return null
					}))
				}
			},
			z = function(e) {
				return function(t) {
					Object(L.b)("/api/v2/friend-requests/deny-all", {
						method: "post",
						apiScope: "ignoreAllRequests"
					}, t).then((function() {
						t({
							type: f,
							payload: e
						}), M.a.trackEvent("accept all", "management", "ignore all", {
							"friends-ignored-count": e
						})
					}), (function() {
						return null
					}))
				}
			},
			W = function(e) {
				return function(t) {
					Object(L.b)("/api/v2/friend-requests/".concat(e.userID, "/request"), {
						method: "post"
					}).then((function() {
						var n;
						t((n = e.userID, {
							type: s,
							payload: n
						})), M.a.trackEvent("friends", "management", "add friend", {
							"friends-last-login": e.lastLogin ? Math.round(Date.now() / 1e3) - e.lastLogin : "unknown",
							"friends-last-activity": e.lastActivity ? Math.round(Date.now() / 1e3) - e.lastActivity : "unknown",
							"friends-races-played": e.racesPlayed,
							"friends-membership": e.membership
						}, t)
					}), (function(e) {
						console.error(e)
					}))
				}
			},
			Y = function(e) {
				return function(t) {
					Object(L.b)("/api/v2/players/search", {
						method: "post",
						params: {
							term: e
						},
						apiScope: "searchUsers"
					}, t).then((function(n) {
						t({
							type: d,
							payload: n
						}), M.a.trackEvent("friends", "search", e)
					}), (function() {
						return null
					}))
				}
			},
			X = function(e) {
				return {
					type: m,
					payload: e
				}
			},
			K = function(e) {
				return {
					type: h,
					payload: e
				}
			},
			J = function() {
				return {
					type: y
				}
			};
		n(83), t.a = D
	},
	2: function(e, t, n) {
		"use strict";
		n.d(t, "v", (function() {
			return T
		})), n.d(t, "w", (function() {
			return C
		})), n.d(t, "i", (function() {
			return I
		})), n.d(t, "l", (function() {
			return k
		})), n.d(t, "r", (function() {
			return j
		})), n.d(t, "b", (function() {
			return D
		})), n.d(t, "m", (function() {
			return x
		})), n.d(t, "e", (function() {
			return L
		})), n.d(t, "C", (function() {
			return M
		})), n.d(t, "y", (function() {
			return U
		})), n.d(t, "d", (function() {
			return F
		})), n.d(t, "c", (function() {
			return B
		})), n.d(t, "q", (function() {
			return q
		})), n.d(t, "t", (function() {
			return H
		})), n.d(t, "z", (function() {
			return G
		})), n.d(t, "u", (function() {
			return V
		})), n.d(t, "A", (function() {
			return z
		})), n.d(t, "B", (function() {
			return W
		})), n.d(t, "o", (function() {
			return Y
		})), n.d(t, "n", (function() {
			return X
		})), n.d(t, "p", (function() {
			return K
		})), n.d(t, "x", (function() {
			return J
		})), n.d(t, "j", (function() {
			return Q
		})), n.d(t, "k", (function() {
			return $
		})), n.d(t, "f", (function() {
			return te
		})), n.d(t, "g", (function() {
			return ne
		})), n.d(t, "s", (function() {
			return oe
		})), n.d(t, "h", (function() {
			return ae
		})), n.d(t, "a", (function() {
			return ie
		}));
		var r = n(17),
			o = n.n(r),
			a = n(97),
			i = n.n(a),
			s = n(60),
			c = n.n(s),
			l = n(8),
			u = n.n(l),
			p = n(54),
			f = n.n(p),
			d = n(20),
			m = n(4),
			h = n(16),
			y = n(15);

		function g(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
			}
		}

		function v(e) {
			return (v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}

		function b(e) {
			return function(e) {
				if (Array.isArray(e)) return w(e)
			}(e) || function(e) {
				if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
			}(e) || function(e, t) {
				if (!e) return;
				if ("string" == typeof e) return w(e, t);
				var n = Object.prototype.toString.call(e).slice(8, -1);
				"Object" === n && e.constructor && (n = e.constructor.name);
				if ("Map" === n || "Set" === n) return Array.from(e);
				if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return w(e, t)
			}(e) || function() {
				throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
			}()
		}

		function w(e, t) {
			(null == t || t > e.length) && (t = e.length);
			for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
			return r
		}

		function E(e, t) {
			var n = Object.keys(e);
			if (Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(e);
				t && (r = r.filter((function(t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				}))), n.push.apply(n, r)
			}
			return n
		}

		function O(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = null != arguments[t] ? arguments[t] : {};
				t % 2 ? E(Object(n), !0).forEach((function(t) {
					S(e, t, n[t])
				})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : E(Object(n)).forEach((function(t) {
					Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
				}))
			}
			return e
		}

		function S(e, t, n) {
			return t in e ? Object.defineProperty(e, t, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = n, e
		}
		var _ = {},
			T = function(e) {
				N(), window.__navigateTo("/api/v2/auth/redirect/" + e)
			},
			N = function() {
				o.a.set("state", "", I({
					expires: 0
				}));
				var e = o.a.get("state");
				return e || (e = Object(m.m)(1e4, 99999), o.a.set("state", e, I())), e
			};

		function C(e) {
			try {
				return function(e, t) {
					var n, r, o, a = String(),
						i = t.length;
					for (n = 0; n < e.length; n++) o = e.charAt(n), (r = t.indexOf(o)) >= 0 && (o = t.charAt((r + i / 2) % i)), a += o;
					return a
				}(e = e || "", "!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~")
			} catch (e) {
				return ""
			}
		}

		function A() {
			var e = location.hostname.split(".");
			return location.hostname.match(/\.nitro/) ? "." + e[e.length - 2] + "." + e[e.length - 1] : location.hostname
		}

		function I() {
			var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
			return O({
				expires: 1 / 24 * 2,
				path: "/",
				domain: A(),
				secure: !0,
				sameSite: "none"
			}, e)
		}

		function k(e) {
			for (var t = window.location.search.substring(1).split("&"), n = 0; n < t.length; n++) {
				var r = t[n].split("=");
				if (decodeURIComponent(r[0]) === e) return decodeURIComponent(r[1])
			}
			return null
		}
		var R, P, j = function(e) {
			try {
				var t = e.split(".")[1].replace(/-/g, "+").replace(/_/g, "/"),
					n = decodeURIComponent(atob(t).split("").map((function(e) {
						return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2)
					})).join(""));
				return JSON.parse(n)
			} catch (e) {
				throw e
			}
		};

		function D(e) {
			var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
				n = arguments.length > 2 ? arguments[2] : void 0;
			if (e) {
				void 0 === n && (console.trace("apiCall called to ".concat(e, " without sending dispatch function")), n = function() {
					return null
				}), t.apiScope && "function" != typeof n && (n = function() {
					return null
				}, console.error("apiCall called with apiScope without dispatch function", {
					apiScope: t.apiScope
				})), t.apiScope && n(d.b.setApiPending(t.apiScope));
				var r = t.params || {},
					o = (t.method || "get").toLowerCase(),
					a = localStorage.getItem("player_token");
				return a && (c.a.defaults.headers.common.Authorization = "Bearer ".concat(a)), new Promise((function(a, s) {
					("post" === o ? c.a.post(e, i.a.stringify(r)) : c()({
						url: e,
						method: o,
						params: r
					})).then((function(e) {
						var r, o = null === (r = e.headers.authorization) || void 0 === r ? void 0 : r.slice(7);
						o && M(n, o, "api");
						var i = e.data.success || "OK" === e.data.status,
							c = e.data.data || e.data.results;
						i ? (a(c), t.apiScope && n(d.b.setApiSuccessful(t.apiScope))) : (s(c), t.apiScope && n(d.b.setApiError(t.apiScope, c || "Unknown Error. Please try again.")))
					})).catch((function(e) {
						var r, o, a = e.response;
						o = null !== (r = e.response) && void 0 !== r && r.data ? e.response.data.status ? a.data.results || "Unknown Error. Please try again." : void 0 !== e.response.data.success ? a.data.data.message || a.data.data || "Unknown Error. Please try again!" : a.statusText : "Unknown Error.  Nothing returned.", t.apiScope && n(d.b.setApiError(t.apiScope, o)), s(o)
					}))
				}))
			}
			console.error("Must provide valid url to apiCall()")
		}

		function x() {
			var e, t, n;
			return null === (e = Intl) || void 0 === e || null === (t = e.DateTimeFormat()) || void 0 === t || null === (n = t.resolvedOptions()) || void 0 === n ? void 0 : n.timeZone
		}

		function L(e) {
			var t = Math.floor(Date.now() / 1e3);
			return Math.abs(e - t) <= 600
		}

		function M(e, t, n) {
			if (t) {
				var r = localStorage.getItem("player_token");
				if (r !== t) {
					var o, a, i, s;
					try {
						i = j(t), s = j(r)
					} catch (e) {}
					if (null !== (o = i) && void 0 !== o && o.sub && "userID" === (null === (a = i) || void 0 === a ? void 0 : a.identifier)) {
						if ("rt" === n && s && Math.abs(i.iat - s.iat) <= 2) return void("local" === NTGLOBALS.ENV && console.log("Ignoring RT JWT"));
						"local" === NTGLOBALS.ENV && console.log("New JWT bearer token set: " + t), localStorage.setItem("player_token", t), U(e, i)
					} else console.error("Invalid bearer token received: ", {
						token: t,
						oldToken: r,
						session: i
					}), e(y.a.logOut("invalid-update-token"))
				}
			} else localStorage.removeItem("player_token")
		}

		function U(e, t) {
			clearTimeout(R), clearTimeout(P);
			var n = Math.floor(Date.now() / 1e3),
				r = t.exp - n,
				o = Math.max(0, r - 300);
			o > 0 && (R = setTimeout((function() {
				e(h.b.addNotifications([{
					type: "autologout"
				}]))
			}), 1e3 * o)), P = setTimeout((function() {
				e(y.a.logOut("timeout-" + r + "-" + t.exp + "-" + n))
			}), 1e3 * r)
		}

		function F(e, t) {
			var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "wpm";
			return e = e || 0, 0 === (t = t || 0) ? 0 : "wpm" === n ? Math.round(e / 5 / (t / 60)) : "ppm" === n ? Math.round(e / (t / 60)) : void 0
		}

		function B() {
			var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
				t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
				n = arguments.length > 2 ? arguments[2] : void 0;
			if (n = parseInt(n, 10) || 0, 0 === e) return 0;
			var r = parseFloat((100 - t / e * 100).toFixed(n));
			return r >= 100 ? 100 : isNaN(r) ? 0 : r
		}

		function q(e, t) {
			if (!e || !t || !Array.isArray(e)) return e;
			var n = [];
			return "racelog" === t ? n = e.map((function(e, t) {
				var n = u()(1e3 * e.stamp).format("MMM Do `YY"),
					r = F(e.typed, e.secs),
					o = e.place,
					a = B(e.typed, e.errs);
				return {
					x: t + 1,
					y: r,
					tooltip: {
						date: n,
						speed: r,
						place: f.a.toOrdinal(o),
						accuracy: a
					}
				}
			})) : "lastdays" === t ? n = e.map((function(e, t) {
				var n = u()(1e3 * e.stamp).format("MMM Do `YY"),
					r = F(e.typed, e.secs);
				return {
					x: t + 1,
					y: r,
					tooltip: {
						date: n,
						races: e.races,
						speed: r
					}
				}
			})) : "bymonth" === t ? n = e.map((function(e, t) {
				var n = u()(e.month, "M").format("MMM") + ", " + e.year,
					r = F(e.typed, e.secs);
				return {
					x: t + 1,
					y: r,
					tooltip: {
						date: n,
						races: e.races,
						speed: r
					}
				}
			})) : "topspeeds" === t && (n = e.map((function(e, t) {
				var n = {
					date: u()(1e3 * e.stamp).format("MMM Do `YY"),
					place: e.place,
					speed: e.value
				};
				return {
					x: t + 1,
					y: e.value,
					tooltip: n
				}
			}))), n
		}

		function H(e) {
			var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "/dist/site/misc/sounds/global/ogg",
				r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ogg",
				o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .5;
			_[e] ? t = _[e] : ((t = document.createElement("audio")).src = "".concat(n, "/").concat(e, ".").concat(r), t.volume = o, _[e] = t);
			try {
				var a = t.play();
				void 0 !== a && a.then((function() {
					return null
				}), (function() {
					return null
				}))
			} catch (e) {}
		}

		function G() {
			return !! function() {
				try {
					var e = document.createElement("canvas");
					return !!window.WebGLRenderingContext && (e.getContext("webgl") || e.getContext("experimental-webgl"))
				} catch (e) {
					return !1
				}
			}()
		}

		function V(e, t) {
			return "s" === e[e.length - 1] || "ch" === e.substr(-2) || "sh" === e.substr(-2) ? 1 === t ? e : e + "es" : 1 === t ? e : e + "s"
		}

		function z(e) {
			return Object(m.v)(e)
		}

		function W(e) {
			return e.split(" ").map((function(e) {
				return Object(m.v)(e)
			})).join(" ")
		}

		function Y() {
			var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
			return e = e || navigator.userAgent, !!(/iPad|iPhone|iPod/.test(e) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1)
		}

		function X() {
			var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
			return e = e || navigator.userAgent, /Android/.test(e)
		}

		function K() {
			var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
			return X(e) || Y(e)
		}

		function J(e) {
			return e.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")
		}

		function Q(e) {
			var t = Math.floor(Date.now() / 1e3);
			return b(e).sort((function(e, t) {
				return e.startStamp > t.startStamp ? 1 : -1
			})).filter((function(e) {
				return e.endStamp >= t
			})).shift()
		}

		function Z() {
			var e;
			if (Z.cached) return Z.cached;
			for (var t = NTGLOBALS.SEASON_LEVELS, n = null === (e = Q(NTGLOBALS.ACTIVE_SEASONS)) || void 0 === e ? void 0 : e.totalRewards, r = 0, o = [0], a = 1; a < 1e4; a++) a <= t.startingLevels ? r += t.experiencePerStartingLevel : r += a <= n ? t.experiencePerAchievementLevel : t.experiencePerExtraLevels, o.push(r);
			return Z.cached = o, o
		}

		function $(e) {
			return e < 0 ? 0 : Z()[e - 1]
		}
		D.mock = function(e) {
			var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
				n = arguments.length > 2 ? arguments[2] : void 0,
				r = t.apiScope,
				o = t.delay,
				a = void 0 === o ? 1e3 + 2e3 * Math.random() : o,
				i = t.response,
				s = void 0 === i ? {} : i,
				c = t.success;
			return n(d.b.setApiPending(r)), new Promise((function(e, t) {
				setTimeout((function() {
					!1 === c ? (t(s), n(d.b.setApiError(r, s))) : (e(s), n(d.b.setApiSuccessful(r, s)))
				}), a)
			}))
		};
		var ee = document.createElement("textarea");

		function te(e) {
			ee.value = e, document.body.appendChild(ee), ee.select(), document.execCommand("copy"), document.body.removeChild(ee)
		}
		var ne = function(e) {
				var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
				return re(e, t)
			},
			re = function(e) {
				var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
				e = e || 0;
				var n = parseFloat(e).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,").replace(".00", "");
				return t ? n.split(".")[0] : n
			},
			oe = function(e) {
				if ("1PING" === e || "1PONG" === e) return e;
				if (e) {
					var t = parseInt(e.substr(0, 1)),
						n = e.substring(1);
					switch (t) {
						case 1:
							return n;
						case 2:
							return parseInt(n);
						case 3:
							return parseFloat(n);
						case 4:
						case 5:
							return JSON.parse(n);
						case 6:
							return "true" === n;
						case 7:
							return BigInt(n);
						default:
							return n
					}
				}
			},
			ae = function(e) {
				switch (v(e)) {
					case "string":
						return "1" + e;
					case "number":
						return Object(m.h)(e) ? "2" + e.toString() : "3" + e.toString();
					case "object":
						return Array.isArray(e) ? "4" + JSON.stringify(e) : "5" + JSON.stringify(e);
					case "boolean":
						return "6" + e.toString();
					case "bigint":
						return "7" + e.toString();
					default:
						return "8" + e
				}
			},
			ie = function() {
				function e() {
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, e), this.listeners = void 0, this.listeners = {}
				}
				var t, n, r;
				return t = e, (n = [{
					key: "on",
					value: function(e, t) {
						this.addEventListener(e, t)
					}
				}, {
					key: "addEventListener",
					value: function(e, t) {
						e in this.listeners || (this.listeners[e] = []), this.listeners[e].push(t)
					}
				}, {
					key: "removeAllEventListeners",
					value: function() {
						this.listeners = {}
					}
				}, {
					key: "removeEventListener",
					value: function(e, t) {
						if (e in this.listeners)
							for (var n = this.listeners[e], r = 0, o = n.length; r < o; r++)
								if (n[r] === t) return void n.splice(r, 1)
					}
				}, {
					key: "emit",
					value: function(e, t) {
						this.dispatchEvent(e, t)
					}
				}, {
					key: "dispatchEvent",
					value: function(e, t) {
						if (!(e in this.listeners)) return !0;
						for (var n = b(this.listeners[e]), r = 0, o = n.length; r < o; r++) n[r].call(this, t)
					}
				}]) && g(t.prototype, n), r && g(t, r), e
			}()
	},
	20: function(e, t, n) {
		"use strict";
		n.d(t, "b", (function() {
			return o
		})), n.d(t, "c", (function() {
			return r
		}));
		var r = {};
		n.r(r), n.d(r, "SET_API_PENDING", (function() {
			return a
		})), n.d(r, "SET_API_SUCCESSFUL", (function() {
			return i
		})), n.d(r, "SET_API_ERROR", (function() {
			return s
		})), n.d(r, "CLEAR_API_STATE", (function() {
			return c
		})), n.d(r, "SHOWING_MODAL", (function() {
			return l
		}));
		var o = {};
		n.r(o), n.d(o, "setApiPending", (function() {
			return E
		})), n.d(o, "setApiSuccessful", (function() {
			return O
		})), n.d(o, "setApiError", (function() {
			return S
		})), n.d(o, "clearApiState", (function() {
			return _
		})), n.d(o, "showingModal", (function() {
			return T
		}));
		var a = "nitrotype/ui/SET_API_PENDING",
			i = "nitrotype/ui/SET_API_SUCCESSFUL",
			s = "nitrotype/ui/SET_API_ERROR",
			c = "nitrotype/ui/CLEAR_API_STATE",
			l = "nitrotype/ui/SHOWING_MODAL";

		function u(e) {
			return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}

		function p(e, t) {
			var n = Object.keys(e);
			if (Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(e);
				t && (r = r.filter((function(t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				}))), n.push.apply(n, r)
			}
			return n
		}

		function f(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = null != arguments[t] ? arguments[t] : {};
				t % 2 ? p(Object(n), !0).forEach((function(t) {
					d(e, t, n[t])
				})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach((function(t) {
					Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
				}))
			}
			return e
		}

		function d(e, t, n) {
			return t in e ? Object.defineProperty(e, t, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = n, e
		}
		var m = {
				showingModal: !1
			},
			h = function(e, t) {
				var n;
				return f(f({}, e), {}, (d(n = {}, "".concat(t.scope, "Pending"), !0), d(n, "".concat(t.scope, "Successful"), !1), d(n, "".concat(t.scope, "Error"), null), n))
			},
			y = function(e, t) {
				var n;
				return f(f({}, e), {}, (d(n = {}, "".concat(t.scope, "Pending"), !1), d(n, "".concat(t.scope, "Successful"), !0), d(n, "".concat(t.scope, "Error"), null), n))
			},
			g = function(e, t) {
				var n, r = "object" === u(t.error) ? t.error : {
					message: t.error
				};
				return f(f({}, e), {}, (d(n = {}, "".concat(t.scope, "Pending"), !1), d(n, "".concat(t.scope, "Successful"), !1), d(n, "".concat(t.scope, "Error"), r), n))
			},
			v = function(e, t) {
				var n;
				return f(f({}, e), {}, (d(n = {}, "".concat(t.scope, "Pending"), !1), d(n, "".concat(t.scope, "Successful"), !1), d(n, "".concat(t.scope, "Error"), null), n))
			},
			b = function(e, t) {
				return f(f({}, e), {}, {
					showingModal: t
				})
			},
			w = function() {
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case a:
						return h(e, t.payload);
					case i:
						return y(e, t.payload);
					case s:
						return g(e, t.payload);
					case c:
						return v(e, t.payload);
					case l:
						return b(e, t.payload)
				}
				return e
			},
			E = function(e) {
				return {
					type: a,
					payload: {
						scope: e
					}
				}
			},
			O = function(e) {
				return {
					type: i,
					payload: {
						scope: e
					}
				}
			},
			S = function(e, t) {
				return {
					type: s,
					payload: {
						scope: e,
						error: t
					}
				}
			},
			_ = function(e) {
				return {
					type: c,
					payload: {
						scope: e
					}
				}
			},
			T = function(e) {
				return {
					type: l,
					payload: e
				}
			};
		n(79), t.a = w
	},
	21: function(e, t, n) {
		"use strict";
		n.d(t, "b", (function() {
			return h
		})), n.d(t, "a", (function() {
			return y
		}));
		var r = n(0),
			o = n.n(r),
			a = n(6),
			i = n(4);

		function s(e) {
			return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}

		function c(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function l(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
			}
		}

		function u(e, t) {
			return (u = Object.setPrototypeOf || function(e, t) {
				return e.__proto__ = t, e
			})(e, t)
		}

		function p(e) {
			var t = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
				} catch (e) {
					return !1
				}
			}();
			return function() {
				var n, r = d(e);
				if (t) {
					var o = d(this).constructor;
					n = Reflect.construct(r, arguments, o)
				} else n = r.apply(this, arguments);
				return f(this, n)
			}
		}

		function f(e, t) {
			return !t || "object" !== s(t) && "function" != typeof t ? function(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}(e) : t
		}

		function d(e) {
			return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
				return e.__proto__ || Object.getPrototypeOf(e)
			})(e)
		}

		function m(e) {
			var t = function(t) {
				! function(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							writable: !0,
							configurable: !0
						}
					}), t && u(e, t)
				}(f, t);
				var n, r, a, s = p(f);

				function f() {
					return c(this, f), s.apply(this, arguments)
				}
				return n = f, (r = [{
					key: "render",
					value: function() {
						var t = this.props,
							n = t.site,
							r = t.props,
							a = void 0 === r ? {} : r,
							s = t.render,
							c = t.component,
							l = t.children;
						return n !== e.site ? null : c ? o.a.createElement(c, a) : Object(i.g)(s) ? s(a) : l
					}
				}]) && l(n.prototype, r), a && l(n, a), f
			}(o.a.PureComponent);
			return Object(a.b)((function(e) {
				return {
					site: e.globals.SITE
				}
			}), (function() {
				return {}
			}))(t)
		}
		var h = m({
				site: "nitrotype"
			}),
			y = m({
				site: "nitromath"
			})
	},
	22: function(e, t, n) {
		"use strict";
		var r, o = n(49),
			a = n(44),
			i = n.n(a),
			s = n(50);

		function c(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
			}
		}
		var l = new(function() {
			function e() {
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this._socket = void 0, this.on = function(e, t) {
					r.on(e, t)
				}, this.end = function() {
					r.end()
				}, this.checkin = function(e, t) {
					var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
						o = arguments.length > 3 ? arguments[3] : void 0,
						a = {
							offline: !!e,
							friends: (t || []).map((function(e) {
								return parseInt(e)
							})),
							other: n
						};
					location.pathname.match(/^\/racer\//) && (a.userID = null == o ? void 0 : o.userID), r.write({
						stream: "checkin",
						path: location.pathname,
						extra: a
					})
				}, this.teamCheckin = function(e) {
					r.write({
						stream: "team-view",
						teamID: e
					})
				}, this.requestFriend = function(e) {
					r.write({
						stream: "notifications",
						type: "request-friend",
						userID: e
					})
				}, this.sendCash = function(e, t) {
					r.write({
						stream: "notifications",
						type: "send-cash",
						userID: e,
						amount: t
					})
				}, this.applyToTeam = function(e) {
					r.write({
						stream: "notifications",
						type: "apply-to-team",
						teamID: e
					})
				}, this.joinedTeam = function(e) {
					r.write({
						stream: "notifications",
						type: "joined-team",
						teamID: e
					})
				}, this.acceptFriends = function(e) {
					r.write({
						stream: "notifications",
						type: "accept-friends",
						ids: e
					})
				}, this.raceInvites = function(e) {
					r.write({
						stream: "notifications",
						type: "race-invites",
						ids: e
					})
				}, this.acceptToTeam = function(e, t) {
					r.write({
						stream: "notifications",
						type: "accept-to-team",
						ids: t,
						teamID: e
					})
				}, this.teamMotd = function(e) {
					r.write({
						stream: "notifications",
						type: "team-motd",
						teamID: e
					})
				}, this.inviteToTeam = function(e, t) {
					r.write({
						stream: "notifications",
						type: "invite-to-team",
						userID: e,
						teamID: t
					})
				}, this.joinRace = function() {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
					r.write({
						stream: "race",
						msg: "join",
						payload: e
					})
				}, this.getLessonHelp = function(e) {
					var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
					e = parseInt(e), t = parseInt(t), r.write({
						stream: "race",
						msg: "lesson-help",
						lessonID: e,
						total: t
					})
				}, this.beginFriendRace = function() {
					r.write({
						stream: "race",
						msg: "begin-friend-race"
					})
				}, this.sendRaceChat = function(e, t) {
					r.write({
						stream: "race",
						msg: "chat",
						chatID: e,
						chatType: t
					})
				}, this.sendRaceUpdate = function(e) {
					r.write({
						stream: "race",
						msg: "update",
						payload: e
					})
				}
			}
			var t, n, a;
			return t = e, (n = [{
				key: "socket",
				get: function() {
					return r
				},
				set: function(e) {
					r || (r = e)
				}
			}, {
				key: "isConnected",
				get: function() {
					return r instanceof o.a && r.readyState === WebSocket.OPEN || r instanceof i.a && r.readyState === i.a.OPEN || r instanceof s.a && r.isConnected
				}
			}]) && c(t.prototype, n), a && c(t, a), e
		}());
		t.a = l
	},
	23: function(e, t, n) {
		"use strict";
		n.d(t, "a", (function() {
			return c
		}));
		var r = n(0),
			o = n.n(r),
			a = n(3),
			i = n.n(a);

		function s(e, t, n) {
			return t in e ? Object.defineProperty(e, t, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = n, e
		}

		function c(e) {
			var t, n = function(e) {
					if (e.rarity) return e.rarity;
					return "common"
				}(e),
				r = e.type,
				a = void 0 === r ? "badge" : r,
				c = e.size,
				l = e.label,
				u = e.content,
				p = e.children,
				f = e.suffix,
				d = "mini" in e ? "--mini" : "",
				m = l || u || p || function(e) {
					return "".concat(e[0].toUpperCase()).concat(e.substr(1))
				}(n);
			f && "string" == typeof m && (m += " ".concat(f));
			var h = i()("rarity-".concat(a), e.className, "rarity-".concat(a, "--").concat(n), (s(t = {}, "rarity-".concat(a).concat(d), d), s(t, "rarity-".concat(a).concat(d, "--").concat(c), c), t));
			return o.a.createElement("div", {
				className: h
			}, o.a.createElement("div", {
				className: "rarity-".concat(a, "--extra")
			}), o.a.createElement("div", {
				className: "rarity-".concat(a, "--content")
			}, m))
		}
	},
	24: function(e, t, n) {
		"use strict";
		n.d(t, "a", (function() {
			return g
		}));
		var r = n(0),
			o = n.n(r),
			a = n(28),
			i = n.n(a),
			s = (n(1), n(3)),
			c = n.n(s);

		function l(e) {
			return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}

		function u() {
			return (u = Object.assign || function(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = arguments[t];
					for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
				}
				return e
			}).apply(this, arguments)
		}

		function p(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
			}
		}

		function f(e, t) {
			return (f = Object.setPrototypeOf || function(e, t) {
				return e.__proto__ = t, e
			})(e, t)
		}

		function d(e) {
			var t = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
				} catch (e) {
					return !1
				}
			}();
			return function() {
				var n, r = y(e);
				if (t) {
					var o = y(this).constructor;
					n = Reflect.construct(r, arguments, o)
				} else n = r.apply(this, arguments);
				return m(this, n)
			}
		}

		function m(e, t) {
			return !t || "object" !== l(t) && "function" != typeof t ? h(e) : t
		}

		function h(e) {
			if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return e
		}

		function y(e) {
			return (y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
				return e.__proto__ || Object.getPrototypeOf(e)
			})(e)
		}

		function g(e) {
			var t, n;
			return n = t = function(t) {
				! function(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							writable: !0,
							configurable: !0
						}
					}), t && f(e, t)
				}(l, t);
				var n, r, a, s = d(l);

				function l(t) {
					var n;
					return function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, l), (n = s.call(this, t)).state = {
						isExiting: !1,
						hideDelayComplete: !1
					}, n.handleShowModal = function() {
						n.props.disableBackgroundClickHide || document.addEventListener("keydown", n.handleEscapeKeyPress.bind(h(n)), {
							once: !0
						}), document.body.classList.add("has-modals")
					}, n.handleHideComplete = function() {
						n.setState({
							hideDelayComplete: !0,
							isExiting: !1
						}), document.body.classList.remove("has-modals")
					}, n.shouldComponentUpdate = function(e, t, r) {
						return !n.props.visible && e.visible ? (n.setState({
							hideDelayComplete: !1
						}), n.handleShowModal(), !0) : n.props.visible && !e.visible ? (n.setState({
							isExiting: !0
						}), n.props.disableHideDelay ? n.handleHideComplete() : setTimeout(n.handleHideComplete.bind(h(n)), n.props.hideDelay), !1) : (!n.state.hideDelayComplete && t.hideDelayComplete || t.isExiting, !0)
					}, n.closeModal = function(e) {
						document.removeEventListener("keydown", n.handleEscapeKeyPress.bind(h(n))), n.props.teardown && n.props.teardown(e)
					}, n.handleClickClose = function(e) {
						n.closeModal(!0)
					}, n.handleClickBackground = function(e) {
						n.props.disableBackgroundClickHide || (e && e.preventDefault(), n.closeModal(!0))
					}, n.onCloseModal = function() {
						n.closeModal(!1)
					}, n.render = function() {
						return n.props.visible || n.state.isExiting ? i.a.createPortal(o.a.createElement("div", {
							className: c()("modal is-active", {
								"is-exiting": n.state.isExiting
							}, {
								"modal--a": !n.props.transparent && !n.props.theme
							}, (t = {}, r = "modal--".concat(n.props.theme), a = n.props.theme, r in t ? Object.defineProperty(t, r, {
								value: a,
								enumerable: !0,
								configurable: !0,
								writable: !0
							}) : t[r] = a, t), "modal--".concat(n.props.size))
						}, o.a.createElement("div", {
							className: "modal-container"
						}, !n.props.hideClose && o.a.createElement("button", {
							className: "modal-close",
							onClick: n.handleClickClose
						}, o.a.createElement("svg", {
							className: "icon icon-x--s"
						}, o.a.createElement("use", {
							xmlnsXlink: "http://www.w3.org/1999/xlink",
							xlinkHref: "/dist/site/images/icons/icons.css.svg#icon-x"
						}))), n.props.title && o.a.createElement("div", {
							className: "modal-header well--p well--pt row row--m tac"
						}, o.a.createElement("h2", {
							className: "tc-i mbf"
						}, n.props.title)), o.a.createElement(e, u({}, n.props, {
							teardown: void 0,
							isExiting: n.state.isExiting,
							closeModal: n.onCloseModal
						}))), o.a.createElement("div", {
							className: "modal-overlay",
							onClick: n.handleClickBackground
						})), document.body) : o.a.createElement(o.a.Fragment, null);
						var t, r, a
					}, t.visible && n.handleShowModal(), n
				}
				return n = l, (r = [{
					key: "handleEscapeKeyPress",
					value: function(e) {
						this.props.visible && 27 === e.keyCode && this.closeModal()
					}
				}, {
					key: "componentWillUnmount",
					value: function() {
						this.props.visible && !this.props.disableHideDelay && console.error("Possible incorrect usage of Modal HOC.  Hide modal with props.visible"), this.handleHideComplete()
					}
				}]) && p(n.prototype, r), a && p(n, a), l
			}(o.a.Component), t.defaultProps = {
				visible: !0,
				hideDelay: 200,
				disableHideDelay: !1,
				disableBackgroundClickHide: !1,
				size: "s"
			}, n
		}
	},
	25: function(e, t, n) {
		"use strict";
		var r = n(64);
		n.d(t, "a", (function() {
			return r
		}))
	},
	26: function(e, t, n) {
		"use strict";
		var r = n(0),
			o = n.n(r);
		n(1);

		function a(e) {
			return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}

		function i(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function s(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
			}
		}

		function c(e, t) {
			return (c = Object.setPrototypeOf || function(e, t) {
				return e.__proto__ = t, e
			})(e, t)
		}

		function l(e) {
			var t = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
				} catch (e) {
					return !1
				}
			}();
			return function() {
				var n, r = p(e);
				if (t) {
					var o = p(this).constructor;
					n = Reflect.construct(r, arguments, o)
				} else n = r.apply(this, arguments);
				return u(this, n)
			}
		}

		function u(e, t) {
			return !t || "object" !== a(t) && "function" != typeof t ? function(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}(e) : t
		}

		function p(e) {
			return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
				return e.__proto__ || Object.getPrototypeOf(e)
			})(e)
		}
		var f = function(e) {
			! function(e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						writable: !0,
						configurable: !0
					}
				}), t && c(e, t)
			}(u, e);
			var t, n, r, a = l(u);

			function u() {
				return i(this, u), a.apply(this, arguments)
			}
			return t = u, (n = [{
				key: "render",
				value: function() {
					return o.a.createElement("div", {
						className: "loader loader--default"
					}, o.a.createElement("div", {
						className: "loader-anim"
					}, o.a.createElement("span", {
						className: "loader-animBall"
					}), o.a.createElement("span", {
						className: "loader-animBall"
					}), o.a.createElement("span", {
						className: "loader-animBall"
					}), o.a.createElement("span", {
						className: "loader-animBall"
					}), o.a.createElement("span", {
						className: "loader-animBall"
					}), o.a.createElement("span", {
						className: "loader-animBall"
					}), o.a.createElement("span", {
						className: "loader-animBall"
					}), o.a.createElement("span", {
						className: "loader-animBall"
					})), o.a.createElement("div", {
						className: "loader-text"
					}, this.props.text))
				}
			}]) && s(t.prototype, n), r && s(t, r), u
		}(o.a.PureComponent);
		t.a = f
	},
	27: function(e, t, n) {
		"use strict";
		var r = n(6),
			o = n(0),
			a = n.n(o),
			i = n(33),
			s = (n(1), n(3)),
			c = n.n(s),
			l = n(15),
			u = n(7),
			p = n(56),
			f = n(8),
			d = n.n(f),
			m = n(108),
			h = n(40),
			y = n(21);

		function g(e) {
			return (g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}

		function v(e, t, n) {
			return t in e ? Object.defineProperty(e, t, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = n, e
		}

		function b(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function w(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
			}
		}

		function E(e, t) {
			return (E = Object.setPrototypeOf || function(e, t) {
				return e.__proto__ = t, e
			})(e, t)
		}

		function O(e) {
			var t = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
				} catch (e) {
					return !1
				}
			}();
			return function() {
				var n, r = _(e);
				if (t) {
					var o = _(this).constructor;
					n = Reflect.construct(r, arguments, o)
				} else n = r.apply(this, arguments);
				return S(this, n)
			}
		}

		function S(e, t) {
			return !t || "object" !== g(t) && "function" != typeof t ? function(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}(e) : t
		}

		function _(e) {
			return (_ = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
				return e.__proto__ || Object.getPrototypeOf(e)
			})(e)
		}
		var T = function(e) {
			! function(e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						writable: !0,
						configurable: !0
					}
				}), t && E(e, t)
			}(i, e);
			var t, n, r, o = O(i);

			function i() {
				var e;
				b(this, i);
				for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
				return (e = o.call.apply(o, [this].concat(n))).state = {
					isNavigationVisible: !1
				}, e.pendingLogout = !1, e.logOut = function(t) {
					t.preventDefault(), e.pendingLogout || (e.pendingLogout = !0, e.props.logOut())
				}, e.onToggleNavigation = function() {
					e.setState({
						isNavigationVisible: !e.state.isNavigationVisible
					})
				}, e.onRaceNowClick = function(t) {
					t.preventDefault(), u.a.trackEvent("cta click", "race", "navigation"), e.props.loggedIn && e.props.event && e.props.event.cars && !e.props.event.cars.includes(e.props.carID) && void 0 === e.props.eventModalVisible ? e.props.setEventModalVisibility(!0) : window.__navigateTo("/race")
				}, e.renderAccountDropdown = function() {
					return a.a.createElement("div", {
						className: "dropdown dropdown--account dropdown--r"
					}, a.a.createElement("a", {
						href: "/profile",
						className: "dropdown-trigger"
					}, a.a.createElement("div", {
						className: "split split--flag split--s"
					}, a.a.createElement("div", {
						className: "split-cell"
					}, a.a.createElement("div", {
						className: "bucket bucket--c bucket--flag bucket--xs"
					}, a.a.createElement("div", {
						className: "bucket-media"
					}, a.a.createElement("svg", {
						className: "icon icon-user-s dropdown-accountIcon"
					}, a.a.createElement("use", {
						xmlnsXlink: "http://www.w3.org/1999/xlink",
						xlinkHref: "/dist/site/images/icons/icons.css.svg#icon-user"
					}))), a.a.createElement("div", {
						className: "bucket-content"
					}, a.a.createElement("span", {
						className: "db type-ellip type-ellip--account"
					}, e.props.displayName || e.props.username)))), a.a.createElement("div", {
						className: "split-cell tar"
					}, a.a.createElement("svg", {
						className: "icon icon-arrow-down dropdown-accountArrow"
					}, a.a.createElement("use", {
						xmlnsXlink: "http://www.w3.org/1999/xlink",
						xlinkHref: "/dist/site/images/icons/icons.css.svg#icon-arrow-down"
					}))))), a.a.createElement("ul", {
						className: "list list--f dropdown-items"
					}, a.a.createElement("li", {
						className: "list-item dropdown-item"
					}, a.a.createElement("a", {
						className: "dropdown-link",
						href: "/profile"
					}, a.a.createElement("svg", {
						className: "icon icon-gear mrxs"
					}, a.a.createElement("use", {
						xmlnsXlink: "http://www.w3.org/1999/xlink",
						xlinkHref: "/dist/site/images/icons/icons.css.svg#icon-gear"
					})), "My Settings")), a.a.createElement("li", {
						className: "list-item dropdown-item"
					}, a.a.createElement("a", {
						className: "dropdown-link",
						href: "/stats"
					}, a.a.createElement("svg", {
						className: "icon icon-chart mrxs"
					}, a.a.createElement("use", {
						xmlnsXlink: "http://www.w3.org/1999/xlink",
						xlinkHref: "/dist/site/images/icons/icons.css.svg#icon-chart"
					})), "My Stats")), a.a.createElement("li", {
						className: "list-item dropdown-item"
					}, a.a.createElement("a", {
						className: "dropdown-link",
						href: "/leaderboards"
					}, a.a.createElement("svg", {
						className: "icon icon-team mrxs"
					}, a.a.createElement("use", {
						xmlnsXlink: "http://www.w3.org/1999/xlink",
						xlinkHref: "/dist/site/images/icons/icons.css.svg#icon-rank-team"
					})), "Top Teams")), a.a.createElement("li", {
						className: "list-item dropdown-item"
					}, a.a.createElement("a", {
						className: "dropdown-link",
						href: "/racer/".concat(e.props.username)
					}, a.a.createElement("svg", {
						className: "icon icon-eye mrxs"
					}, a.a.createElement("use", {
						xmlnsXlink: "http://www.w3.org/1999/xlink",
						xlinkHref: "/dist/site/images/icons/icons.css.svg#icon-eye"
					})), "My Public Profile")), a.a.createElement("li", {
						className: "list-item dropdown-item"
					}, a.a.createElement("a", {
						className: "dropdown-link",
						href: "/support"
					}, a.a.createElement("svg", {
						className: "icon icon-help mrxs"
					}, a.a.createElement("use", {
						xmlnsXlink: "http://www.w3.org/1999/xlink",
						xlinkHref: "/dist/site/images/icons/icons.css.svg#icon-help"
					})), "Support")), a.a.createElement("li", {
						className: "list-item dropdown-item"
					}, a.a.createElement("a", {
						onClick: e.logOut,
						className: "dropdown-link animate--iconSlam",
						href: "/"
					}, a.a.createElement("svg", {
						className: "icon icon-logout mrxs"
					}, a.a.createElement("use", {
						xmlnsXlink: "http://www.w3.org/1999/xlink",
						xlinkHref: "/dist/site/images/icons/icons.css.svg#icon-logout"
					})), "Logout"))))
				}, e.onLoginClick = function() {
					u.a.trackEvent("cta click", "login", "navigation")
				}, e.onSignupClick = function() {
					u.a.trackEvent("cta click", "signup", "navigation")
				}, e.renderAuthenticationCallout = function() {
					var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
						n = t.showLogin,
						r = void 0 === n || n;
					return r ? a.a.createElement("div", {
						className: "split split--s"
					}, r && a.a.createElement("div", {
						className: "split-cell tar"
					}, a.a.createElement("a", {
						onClick: e.onLoginClick,
						href: "/login",
						className: "btn btn--light btn--outline header-login"
					}, "Log In"))) : null
				}, e.renderLogo = function() {
					var t = e.props.loggedIn ? "/garage" : "/";
					return a.a.createElement("a", {
						className: "logo-SVGcontainer",
						href: t
					}, a.a.createElement(p.a, {
						site: e.props.site
					}))
				}, e.renderSeasonHype = function() {
					var t;
					if (!e.props.loggedIn) return !1;
					var n = Date.now() / 1e3,
						r = null === (t = e.props.activeSeasons) || void 0 === t ? void 0 : t.find((function(e) {
							return e.startStamp <= n && e.endStamp > n
						}));
					if (r) {
						var o, i = d()(1e3 * r.startStamp).format("MMM D"),
							s = d()(1e3 * r.endStamp).format("MMM D"),
							l = c()("seasonTeaser", r.className, (v(o = {}, "season--with-theme season--".concat(r.className), r.className), v(o, "btn", !r.className), o));
						return a.a.createElement("a", {
							href: "/season",
							className: l
						}, a.a.createElement("div", {
							className: "seasonTeaser-text"
						}, a.a.createElement("div", {
							className: "seasonTeaser-title"
						}, r.name), a.a.createElement("div", {
							className: "seasonTeaser-range"
						}, i, " - ", s)))
					}
					return !1
				}, e
			}
			return t = i, (n = [{
				key: "render",
				value: function() {
					var e, t, n, r = this,
						o = 0;
					this.props.teamApplications && (o += this.props.teamApplications), this.props.motdNotification && (o += 1), this.props.newTeamMembers && (o += this.props.newTeamMembers);
					var i = "nitromath" !== this.props.site && o > 0,
						s = "nitromath" !== this.props.site && this.props.unclaimedAchievements.length > 0,
						l = "race" === this.props.tab,
						u = "/race" === this.props.path && !this.props.loggedIn,
						p = !(!this.props.inClass || !this.props.sectionID || null !== (e = this.props.disabledClassSettings) && void 0 !== e && e.includes("allow_class_page")),
						f = this.props.friendRequests > 0,
						d = !!(this.props.loggedIn && !this.props.visitedNews && this.props.lastLogin < this.props.lastNews),
						g = 0,
						v = null === (t = this.props.shopReleases) || void 0 === t || null === (n = t.filter((function(e) {
							return e.startStamp > r.props.lastLogin
						})).map((function(e) {
							return e.startStamp
						}))) || void 0 === n ? void 0 : n.sort().pop();
					this.props.loggedIn && !this.props.visitedShop && this.props.lastLogin < v && (g = this.props.shopReleases.filter((function(e) {
						return e.startStamp > r.props.lastLogin
					})).length);
					var b = "/team";
					return this.props.tag && (b = "/team/".concat(this.props.tag)), a.a.createElement("div", {
						className: c()("header", {
							"header--flashed": !1,
							"navigation-visible": this.state.isNavigationVisible
						})
					}, !1, a.a.createElement("div", {
						className: "pre-header-bar"
					}, !l && this.renderSeasonHype()), a.a.createElement("div", {
						className: "header-bar split split--start"
					}, a.a.createElement("div", {
						className: "split-cell"
					}, a.a.createElement(y.b, null, !this.props.loggedIn && !u && a.a.createElement("a", {
						href: "/teachers",
						target: "_blank",
						className: "btn btn--secondary btn--thin btn--s btn--top"
					}, "Teacher Portal")), this.props.loggedIn && l && a.a.createElement("a", {
						href: "/garage",
						className: "btn btn--secondary btn--thin btn--s btn--top"
					}, "Return to Garage")), a.a.createElement("div", {
						className: "split-cell"
					}, this.props.loggedIn && this.renderAccountDropdown())), a.a.createElement("div", {
						className: "header-core g g--flag g--f"
					}, a.a.createElement("div", {
						className: "g-b g-b--3of12"
					}), a.a.createElement("div", {
						className: "g-b g-b--6of12"
					}, a.a.createElement("div", {
						className: "logo"
					}, this.renderLogo())), a.a.createElement("div", {
						className: "g-b g-b--3of12"
					}, !this.props.loggedIn && this.renderAuthenticationCallout({
						showLogin: !0
					}))), a.a.createElement("div", {
						className: "header-nav-toggle",
						onClick: this.onToggleNavigation
					}, a.a.createElement(m.a, null)), this.props.canAccessFullSite && a.a.createElement("div", {
						className: "header-nav g g--f well well--t"
					}, a.a.createElement("div", {
						className: "g-b g-b--2of12"
					}, a.a.createElement(h.a, {
						icon: !0,
						className: "btn btn--primary btn--fw animate--iconSlam"
					})), a.a.createElement("div", {
						className: "g-b g-b--10of12"
					}, a.a.createElement("nav", {
						className: "nav"
					}, a.a.createElement("ul", {
						className: "nav-list"
					}, a.a.createElement("li", {
						className: c()("nav-list-item", {
							"is-current": "garage" === this.props.tab
						})
					}, a.a.createElement("a", {
						href: "/garage",
						className: "nav-link"
					}, "Garage")), a.a.createElement("li", {
						className: c()("nav-list-item", {
							"is-current": "season" === this.props.tab
						})
					}, a.a.createElement("a", {
						href: "/season",
						className: "nav-link"
					}, "Season")), a.a.createElement("li", {
						className: c()("nav-list-item", {
							"is-current": "shop" === this.props.tab
						})
					}, a.a.createElement("a", {
						href: "/shop",
						className: "nav-link"
					}, a.a.createElement("span", {
						className: "has-notify"
					}, "Shop ", g > 0 && a.a.createElement("div", {
						className: "notify",
						"data-count": g
					})))), a.a.createElement("li", {
						className: c()("nav-list-item", {
							"is-current": "friends" === this.props.tab
						})
					}, a.a.createElement("a", {
						href: "/friends",
						className: "nav-link"
					}, a.a.createElement("span", {
						className: "has-notify"
					}, "Friends", f && a.a.createElement("div", {
						className: "notify",
						"data-count": this.props.friendRequests
					})))), !!p && a.a.createElement("li", {
						className: c()("nav-list-item", {
							"is-current": "class" === this.props.tab
						})
					}, a.a.createElement("a", {
						href: "/class",
						className: "nav-link"
					}, "Class")), a.a.createElement("li", {
						className: c()("nav-list-item", {
							"is-current": "team" === this.props.tab
						})
					}, a.a.createElement("a", {
						href: b,
						className: "nav-link"
					}, a.a.createElement("span", {
						className: "has-notify"
					}, "Team", i && a.a.createElement("div", {
						className: "notify",
						"data-count": o
					})))), a.a.createElement("li", {
						className: c()("nav-list-item", {
							"is-current": "achievements" === this.props.tab
						})
					}, a.a.createElement("a", {
						href: "/achievements",
						className: "nav-link"
					}, a.a.createElement("span", {
						className: "has-notify"
					}, "Achievements", s && a.a.createElement("div", {
						className: "notify",
						"data-count": this.props.unclaimedAchievements.length
					})))), a.a.createElement("li", {
						className: c()("nav-list-item", {
							"is-current": "news" === this.props.tab
						})
					}, a.a.createElement("a", {
						href: "/news",
						className: "nav-link"
					}, a.a.createElement("span", {
						className: "has-notify"
					}, "News ", d && a.a.createElement("div", {
						className: "notify",
						"data-count": "1"
					})))))))))
				}
			}]) && w(t.prototype, n), r && w(t, r), i
		}(a.a.PureComponent);
		T.defaultProps = {
			unclaimedAchievements: [],
			teamApplications: 0,
			friendRequests: 0,
			lastNews: 0,
			lastLogin: 0
		};
		var N = T,
			C = n(9),
			A = n(14),
			I = n(47),
			k = Object(r.b)((function(e) {
				var t, n = A.b.sortAchievements(null === (t = e.globals.ACHIEVEMENTS) || void 0 === t ? void 0 : t.LIST);
				return {
					site: e.globals.SITE,
					loggedIn: e.user.loggedIn,
					username: e.user.username,
					displayName: e.user.displayName,
					inClass: e.user.inClass,
					sectionID: e.user.sectionID,
					disabledClassSettings: e.user.disabledClassSettings,
					unclaimedAchievements: A.b.removeSeasonRewardsFromUnclaimedAchievements(e.user.achievementsUnclaimed, n),
					tag: e.user.tag,
					teamApplications: e.user.teamApplications,
					newTeamMembers: e.user.newTeamMembers,
					friendRequests: e.user.requests,
					motdNotification: e.user.motdNotification,
					accountType: e.user.accountType,
					shouldShowEventModal: C.c.shouldEventCarModalShow(e),
					event: e.globals.SPECIAL_EVENT,
					carID: e.user.carID,
					eventModalVisible: e.user.event_modal_visible,
					visitedNews: e.user.visitedNews,
					lastNews: Math.max(parseInt(e.globals.RECENT_NEWS), e.user.lastNews),
					visitedShop: e.user.visitedShop,
					shopReleases: I.b.getShopProducts(e.globals.SHOP, e.globals.CARS, e.globals.LOOT),
					lastLogin: e.user.lastLogin,
					teachersUrl: e.globals.TEACHERS_URL,
					activeSeasons: e.globals.ACTIVE_SEASONS
				}
			}), (function(e) {
				return {
					logOut: function() {
						e(l.a.logOut())
					},
					setEventModalVisibility: function(t) {
						return e(C.b.setEventModalVisibility(t))
					}
				}
			}))(N);

		function R(e) {
			return (R = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}

		function P(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function j(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
			}
		}

		function D(e, t) {
			return (D = Object.setPrototypeOf || function(e, t) {
				return e.__proto__ = t, e
			})(e, t)
		}

		function x(e) {
			var t = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
				} catch (e) {
					return !1
				}
			}();
			return function() {
				var n, r = M(e);
				if (t) {
					var o = M(this).constructor;
					n = Reflect.construct(r, arguments, o)
				} else n = r.apply(this, arguments);
				return L(this, n)
			}
		}

		function L(e, t) {
			return !t || "object" !== R(t) && "function" != typeof t ? function(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}(e) : t
		}

		function M(e) {
			return (M = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
				return e.__proto__ || Object.getPrototypeOf(e)
			})(e)
		}
		var U = [{
				text: "Race",
				site: "nitrotype",
				Component: h.a,
				limitedAccess: !1
			}, {
				text: "Play",
				site: "nitromath",
				Component: h.a,
				limitedAccess: !0
			}, {
				text: "Garage",
				url: "/garage",
				limitedAccess: !0
			}, {
				text: "Stats",
				url: "/stats",
				limitedAccess: !0
			}, {
				text: "Shop",
				url: "/shop",
				limitedAccess: !0
			}, {
				text: "Season Rewards",
				url: "/season",
				limitedAccess: !0
			}, {
				text: "Friends",
				url: "/friends",
				limitedAccess: !0
			}, {
				text: "Teams",
				url: "/team",
				limitedAccess: !0
			}, {
				text: "Achievements",
				url: "/achievements",
				limitedAccess: !0
			}, {
				text: "Top Teams",
				url: "/leaderboards",
				limitedAccess: !1
			}, {
				text: "Updates",
				url: "/updates",
				limitedAccess: !1
			}, {
				text: "News",
				url: "/news",
				limitedAccess: !1
			}, {
				text: "Account",
				url: "/profile",
				limitedAccess: !0
			}, {
				text: "Support",
				url: "/support",
				limitedAccess: !1
			}, {
				text: "Site Map",
				url: "/support/sitemap",
				limitedAccess: !0
			}],
			F = function(e) {
				! function(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							writable: !0,
							configurable: !0
						}
					}), t && D(e, t)
				}(i, e);
				var t, n, r, o = x(i);

				function i() {
					return P(this, i), o.apply(this, arguments)
				}
				return t = i, (n = [{
					key: "render",
					value: function() {
						var e = this,
							t = (new Date).getFullYear(),
							n = this.props.canAccessFullSite,
							r = U;
						n || (r = r.filter((function(e) {
							return !e.limitedAccess
						}))), r = r.filter((function(t) {
							return !t.site || t.site === e.props.site
						}));
						var o, i = [],
							s = Math.ceil(r.length / 3),
							c = "list-item link link--s link--nav footer-menuLink";
						return r.forEach((function(e, t) {
							t % s == 0 && (o = [], i.push(o));
							var n = "Component" in e ? a.a.createElement(e.Component, {
								key: e.text,
								className: c
							}, e.text) : a.a.createElement("a", {
								className: c,
								href: e.url,
								key: e.url
							}, e.text);
							o.push(n)
						})), a.a.createElement("div", {
							className: "footer cell cell--s"
						}, a.a.createElement("div", {
							className: "footer-nav"
						}, a.a.createElement("div", {
							className: "g"
						}, i.map((function(e, t) {
							return a.a.createElement("div", {
								key: "col_".concat(t),
								className: "g-b g-b--2of12"
							}, a.a.createElement("div", {
								className: "list"
							}, e))
						})), a.a.createElement("div", {
							className: "g-b g-b--6of12"
						}, a.a.createElement("div", {
							className: "footer-card-wrapper"
						}, a.a.createElement("div", {
							className: "footer-card card card--c card-shadow tac mbf"
						}, a.a.createElement("div", {
							className: "h5 tc-ts ttu"
						}, "Powered By"), a.a.createElement("a", {
							href: "https://www.teaching.com",
							target: "_blank",
							className: "db well well--s"
						}, a.a.createElement("img", {
							src: "/dist/site/images/logos/teaching-nl-logo.svg",
							alt: "Teaching.com Logo"
						})), a.a.createElement("ul", {
							className: "list list--xs"
						}, a.a.createElement("li", {
							className: "list-item"
						}, a.a.createElement(y.b, null, a.a.createElement("a", {
							className: "link link--s link--i",
							href: "https://www.nitromath.com",
							target: "_blank"
						}, "Nitro Math")), a.a.createElement(y.a, null, a.a.createElement("a", {
							className: "link link--s link--i",
							href: "https://www.nitrotype.com",
							target: "_blank"
						}, "Nitro Type"))), a.a.createElement("li", {
							className: "list-item"
						}, a.a.createElement("a", {
							className: "link link--s link--i",
							href: "https://www.typing.com/student/lessons",
							target: "_blank"
						}, "Typing Lessons")), a.a.createElement("li", {
							className: "list-item"
						}, a.a.createElement("a", {
							className: "link link--s link--i",
							href: "https://www.typing.com/student/games",
							target: "_blank"
						}, "Typing Games")), a.a.createElement("li", {
							className: "list-item"
						}, a.a.createElement("a", {
							className: "link link--s link--i",
							href: "https://www.typing.com/student/tests",
							target: "_blank"
						}, "Typing Test")))))))), a.a.createElement("div", {
							className: "footer-copyright"
						}, a.a.createElement("div", {
							className: "list list--inline"
						}, a.a.createElement("a", {
							className: "list-item link link--ts ttu tsxs",
							href: "/support/tos"
						}, "Terms of Service"), a.a.createElement("a", {
							className: "list-item link link--ts ttu tsxs",
							href: "/support/privacy"
						}, "Privacy Policy"), a.a.createElement("a", {
							className: "list-item link link--ts ttu tsxs",
							href: "/"
						}, t, " © Nitro Teaching, LLC"), a.a.createElement("span", {
							className: "tc-ts ttu tsxs"
						}, "PO Box 9241, San Juan, PR 00908"))))
					}
				}]) && j(t.prototype, n), r && j(t, r), i
			}(a.a.PureComponent),
			B = n(31),
			q = n(72);

		function H() {
			return a.a.createElement("a", {
				href: "/store/gold",
				className: "goldTeaser link link--bare"
			}, a.a.createElement("div", {
				className: "well well--xxs well--b"
			}, a.a.createElement("div", {
				className: "split-cell"
			}, a.a.createElement("div", {
				className: "goldTeaser-title type-gold tsl"
			}, a.a.createElement("span", {
				className: "tsxs ttu db tlh-1"
			}, "Upgrade to"), " Gold Membership"))), a.a.createElement("ul", {
				className: "list list--xxs tsxs well well--s well--b dwf"
			}, a.a.createElement("li", {
				className: "list-item tc-lemon"
			}, "■ Instant Nitro Cash"), a.a.createElement("li", {
				className: "list-item tc-lemon"
			}, "■ The XCelsior Car"), a.a.createElement("li", {
				className: "list-item tc-lemon"
			}, "■ No Ads")), a.a.createElement("img", {
				src: "/dist/site/images/notifications/gold-teaser-car.png",
				className: "goldTeaser-car"
			}), a.a.createElement("div", {
				className: "btn btn--gold btn--xs btn--thinner"
			}, "Upgrade Now!"))
		}
		var G = n(32);

		function V(e) {
			return (V = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}

		function z(e, t) {
			return function(e) {
				if (Array.isArray(e)) return e
			}(e) || function(e, t) {
				if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
				var n = [],
					r = !0,
					o = !1,
					a = void 0;
				try {
					for (var i, s = e[Symbol.iterator](); !(r = (i = s.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
				} catch (e) {
					o = !0, a = e
				} finally {
					try {
						r || null == s.return || s.return()
					} finally {
						if (o) throw a
					}
				}
				return n
			}(e, t) || function(e, t) {
				if (!e) return;
				if ("string" == typeof e) return W(e, t);
				var n = Object.prototype.toString.call(e).slice(8, -1);
				"Object" === n && e.constructor && (n = e.constructor.name);
				if ("Map" === n || "Set" === n) return Array.from(e);
				if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return W(e, t)
			}(e, t) || function() {
				throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
			}()
		}

		function W(e, t) {
			(null == t || t > e.length) && (t = e.length);
			for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
			return r
		}

		function Y(e, t) {
			if (null == e) return {};
			var n, r, o = function(e, t) {
				if (null == e) return {};
				var n, r, o = {},
					a = Object.keys(e);
				for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
				return o
			}(e, t);
			if (Object.getOwnPropertySymbols) {
				var a = Object.getOwnPropertySymbols(e);
				for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
			}
			return o
		}

		function X() {
			return (X = Object.assign || function(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = arguments[t];
					for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
				}
				return e
			}).apply(this, arguments)
		}

		function K(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function J(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
			}
		}

		function Q(e, t) {
			return (Q = Object.setPrototypeOf || function(e, t) {
				return e.__proto__ = t, e
			})(e, t)
		}

		function Z(e) {
			var t = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
				} catch (e) {
					return !1
				}
			}();
			return function() {
				var n, r = ee(e);
				if (t) {
					var o = ee(this).constructor;
					n = Reflect.construct(r, arguments, o)
				} else n = r.apply(this, arguments);
				return $(this, n)
			}
		}

		function $(e, t) {
			return !t || "object" !== V(t) && "function" != typeof t ? function(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}(e) : t
		}

		function ee(e) {
			return (ee = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
				return e.__proto__ || Object.getPrototypeOf(e)
			})(e)
		}
		var te = function(e) {
				! function(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							writable: !0,
							configurable: !0
						}
					}), t && Q(e, t)
				}(i, e);
				var t, n, r, o = Z(i);

				function i() {
					return K(this, i), o.apply(this, arguments)
				}
				return t = i, (n = [{
					key: "componentDidMount",
					value: function() {
						G.c(this.props.cars, this.props.loot)
					}
				}, {
					key: "render",
					value: function() {
						return a.a.createElement(q.a, this.props, a.a.createElement(ne, X({
							component: this.props.component
						}, this.props)))
					}
				}]) && J(t.prototype, n), r && J(t, r), i
			}(a.a.PureComponent),
			ne = function(e) {
				var t, n = e.component,
					r = Y(e, ["component"]),
					s = z(Object(o.useState)((function() {
						var e = r.noAds;
						return "function" == typeof e && (e = e(r)), !!e
					})), 1)[0],
					l = Date.now() / 1e3,
					u = c()("structure", {
						"structure--noAds": s,
						"structure--collapsed-nav": r.useCollapsedNavigation,
						"is-responsive": r.responsive
					}),
					p = null === (t = r.activeSeasons) || void 0 === t ? void 0 : t.find((function(e) {
						return e.startStamp <= l && e.endStamp > l
					}));
				return null != p && p.className && document.body.classList.add(p.className), a.a.createElement(i.b, X({}, r, {
					render: function(e) {
						return a.a.createElement("div", {
							className: u
						}, a.a.createElement("div", {
							className: c()("structure-spacer-left")
						}), a.a.createElement("header", {
							className: c()("structure-header")
						}, a.a.createElement(k, r)), a.a.createElement("div", {
							className: c()("structure-leaderboard por")
						}, !s && a.a.createElement(a.a.Fragment, null, a.a.createElement(B.a, {
							unit: "layoutTop",
							adStyle: "ldrbrd_l",
							page: r.adPage
						}), a.a.createElement(B.a, {
							unit: "layoutLeft",
							adStyle: "side",
							page: r.adPage
						}), a.a.createElement("div", {
							className: "ad ad--side-extra"
						}, a.a.createElement(H, null)))), a.a.createElement("main", {
							className: c()("structure-content")
						}, a.a.createElement(n, e)), a.a.createElement("footer", {
							className: c()("structure-footer")
						}, a.a.createElement(F, r)))
					}
				}))
			},
			re = te,
			oe = n(35);
		t.a = Object(r.b)((function(e, t) {
			return {
				site: e.globals.SITE,
				sites: e.globals.SITES,
				loggedIn: e.user.loggedIn,
				avgSpeed: e.user.avgSpeed,
				showModal: e.ui.showingModal,
				membership: e.user.membership,
				noAds: e.globals.NO_ADS || t.noAds,
				activeSeasons: e.globals.ACTIVE_SEASONS,
				cars: e.globals.CARS,
				loot: e.globals.LOOT,
				canAccessFullSite: oe.canAccessFullSite(e)
			}
		}), (function(e) {
			return {}
		}))(re)
	},
	29: function(e, t, n) {
		"use strict";
		n.r(t), n.d(t, "getPlayerSelectedCar", (function() {
			return y
		})), n.d(t, "getLootMetaData", (function() {
			return h
		})), n.d(t, "getCarsGroupedByLevel", (function() {
			return p
		})), n.d(t, "getCarById", (function() {
			return g
		})), n.d(t, "getCarPrice", (function() {
			return v
		})), n.d(t, "getCarUrl", (function() {
			return _
		})), n.d(t, "getCarName", (function() {
			return S
		})), n.d(t, "getCarBranding", (function() {
			return b
		})), n.d(t, "getSelectedHueForCarId", (function() {
			return w
		})), n.d(t, "getCarMetaData", (function() {
			return O
		})), n.d(t, "getOwnedCarIDs", (function() {
			return m
		})), n.d(t, "getSoldCarIDS", (function() {
			return f
		})), n.d(t, "getLootNames", (function() {
			return T
		})), n.d(t, "getEquippedLoot", (function() {
			return d
		})), n.d(t, "getItemRarity", (function() {
			return E
		})), n.d(t, "getMathProblemTypes", (function() {
			return N
		})), n.d(t, "getSelectedMathProblemType", (function() {
			return C
		}));
		var r = n(4);

		function o(e, t) {
			return function(e) {
				if (Array.isArray(e)) return e
			}(e) || function(e, t) {
				if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
				var n = [],
					r = !0,
					o = !1,
					a = void 0;
				try {
					for (var i, s = e[Symbol.iterator](); !(r = (i = s.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
				} catch (e) {
					o = !0, a = e
				} finally {
					try {
						r || null == s.return || s.return()
					} finally {
						if (o) throw a
					}
				}
				return n
			}(e, t) || l(e, t) || function() {
				throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
			}()
		}

		function a(e, t) {
			var n = Object.keys(e);
			if (Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(e);
				t && (r = r.filter((function(t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				}))), n.push.apply(n, r)
			}
			return n
		}

		function i(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = null != arguments[t] ? arguments[t] : {};
				t % 2 ? a(Object(n), !0).forEach((function(t) {
					s(e, t, n[t])
				})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function(t) {
					Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
				}))
			}
			return e
		}

		function s(e, t, n) {
			return t in e ? Object.defineProperty(e, t, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = n, e
		}

		function c(e) {
			return function(e) {
				if (Array.isArray(e)) return u(e)
			}(e) || function(e) {
				if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
			}(e) || l(e) || function() {
				throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
			}()
		}

		function l(e, t) {
			if (e) {
				if ("string" == typeof e) return u(e, t);
				var n = Object.prototype.toString.call(e).slice(8, -1);
				return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? u(e, t) : void 0
			}
		}

		function u(e, t) {
			(null == t || t > e.length) && (t = e.length);
			for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
			return r
		}
		var p = function(e) {
				var t = c(e.globals.CARS);
				if (e.user && e.user.loggedIn) {
					var n = f(e);
					m(e);
					t = t.filter((function(e) {
						return -1 !== n.indexOf(e.carID) || e.purchasable
					}))
				} else t = t.filter((function(e) {
					return e.purchasable
				}));
				var r = {},
					o = e.globals.SPECIAL_EVENT;
				return t.forEach((function(e) {
					o && o.cars && o.cars.includes(e.carID) ? (r.event = r.event ? r.event : [], r.event.push(e)) : (r[e.unlockLevel] = r[e.unlockLevel] ? r[e.unlockLevel] : [], r[e.unlockLevel].push(e))
				})), r
			},
			f = function(e) {
				if (e.user && e.user.loggedIn && e.user.cars && e.user.cars.length) {
					var t = [];
					return e.user.cars.forEach((function(e) {
						"sold" === e[1] && t.push(e[0])
					})), Object(r.t)(t)
				}
				return []
			},
			d = function(e) {
				var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
					n = t.source,
					r = void 0 === n ? e.user.loot : n,
					o = t.type,
					a = function(e) {
						return 0 !== e.equipped
					},
					s = o ? function(e) {
						return e.type === o && a(e)
					} : a,
					c = r.filter(s) || [];
				return c.map((function(t) {
					return i(i({}, e.globals.LOOT.find((function(e) {
						return t.lootID === e.lootID
					}))), t)
				}))
			},
			m = function(e) {
				if (e.user && e.user.loggedIn && e.user.cars && e.user.cars.length) {
					var t = [];
					return e.user.cars.forEach((function(e) {
						"owned" === e[1] && t.push(e[0])
					})), Object(r.t)(t)
				}
				return []
			},
			h = function(e, t) {
				var n, r = e.globals.LOOT.find((function(e) {
					return e.lootID === t
				})) || {};
				return r && i(i({}, r.options), {}, {
					loot: r,
					assetKey: r.assetKey || (null === (n = r.options) || void 0 === n ? void 0 : n.assetKey)
				})
			},
			y = function(e) {
				var t = e.user.carID;
				return i({
					id: t,
					hue: w(e, t)
				}, O(e, t) || {})
			},
			g = function(e, t) {
				var n = e.globals.CARS.filter((function(e) {
					return e.carID === parseInt(t)
				}));
				return n && n.length ? n[0] : null
			},
			v = function(e, t) {
				var n = e.globals.CARS.find((function(e) {
					return e.carID === parseInt(t)
				}));
				if (n) return n.price
			},
			b = function(e, t) {
				var n = g(e, t);
				if (n) {
					var r = n.options || {},
						o = r.brandID,
						a = r.brandUrl,
						i = r.brandName;
					if (o) return {
						id: o,
						url: a,
						name: i,
						hasUrl: !!a
					}
				}
			},
			w = function(e, t) {
				var n, r, a = function(e, t) {
					var n;
					if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
						if (Array.isArray(e) || (n = l(e)) || t && e && "number" == typeof e.length) {
							n && (e = n);
							var r = 0,
								o = function() {};
							return {
								s: o,
								n: function() {
									return r >= e.length ? {
										done: !0
									} : {
										done: !1,
										value: e[r++]
									}
								},
								e: function(e) {
									throw e
								},
								f: o
							}
						}
						throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
					}
					var a, i = !0,
						s = !1;
					return {
						s: function() {
							n = e[Symbol.iterator]()
						},
						n: function() {
							var e = n.next();
							return i = e.done, e
						},
						e: function(e) {
							s = !0, a = e
						},
						f: function() {
							try {
								i || null == n.return || n.return()
							} finally {
								if (s) throw a
							}
						}
					}
				}((null === (n = e.user) || void 0 === n ? void 0 : n.cars) || []);
				try {
					for (a.s(); !(r = a.n()).done;) {
						var i = o(r.value, 3),
							s = i[0],
							c = (i[1], i[2]);
						if (s === t) return c || 0
					}
				} catch (e) {
					a.e(e)
				} finally {
					a.f()
				}
				return 0
			},
			E = function(e) {
				var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
					n = t.type,
					r = t.id || t.value || t.lootID,
					o = "common";
				if ("cash" === n || "money" === n) return "legendary";
				if ("car" === n || "vehicle" === n) {
					var a, i = e.globals.CARS.find((function(e) {
						return parseInt(e.carID) === parseInt(r)
					}));
					return (null == i || null === (a = i.options) || void 0 === a ? void 0 : a.rarity) || o
				}
				if ("loot" === n || "sticker" === n || "trail" === n || "title" === n) {
					var s = h(e, r);
					return (null == s ? void 0 : s.rarity) || o
				}
				return console.log("failed to find", n, r), "common"
			},
			O = function(e, t) {
				var n = e.globals.CARS.find((function(e) {
						return parseInt(e.carID) === parseInt(t)
					})),
					r = (null == n ? void 0 : n.options) || {};
				return r.assetKey = (null == n ? void 0 : n.assetKey) || (null == n ? void 0 : n.carID) || parseInt(t), r
			},
			S = function(e, t) {
				var n;
				return null === (n = e.globals.CARS.find((function(e) {
					return parseInt(e.carID) === parseInt(t)
				}))) || void 0 === n ? void 0 : n.name
			},
			_ = function(e, t, n) {
				var r, o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
				t = parseInt(t);
				var a = e.globals.CARS.find((function(e) {
					return parseInt(e.carID) === t
				}));
				if (!a) return console.error("Missing carID", t), "/error.png";
				var i = e.globals.CAR_URL;
				return o && (i = e.globals.CAR_PAINTED_URL), a.options ? i += n ? a.options.largeSrc : a.options.smallSrc : (console.warn("Car missing options object in getCarUrl", {
					carId: t
				}), i += t + "_", i += n ? "large_1" : "small_1"), o && (i = i.replace(/(\.[a-z]+$)/, "_" + o + "$1")), null !== (r = a.options) && void 0 !== r && r.cache && (i += "?c=" + a.options.cache), i
			},
			T = function(e) {
				var t = {
					car: "Car",
					cash: "Cash"
				};
				return Object.keys(e.globals.LOOT_CONFIG).forEach((function(n) {
					t[n] = e.globals.LOOT_CONFIG[n].name
				})), t
			},
			N = function() {
				return [{
					id: "addition_1",
					title: "Image Addition",
					tags: ["visual"],
					desc: "Addition problems using images of shapes and objects"
				}, {
					id: "subtraction_1",
					title: "Simple Subtraction",
					tags: [],
					desc: "Simple subtraction problems using numbers"
				}, {
					id: "money_1",
					title: "How Much Money",
					tags: ["visual"],
					desc: "Determine the total value of bills and coins"
				}, {
					id: "multiplication_1",
					title: "Multiplication",
					subtitle: "Missing Factor",
					tags: [],
					desc: "Identify the missing value to complete the multiplication problem"
				}, {
					id: "counting_1",
					title: "Skip Counting",
					subtitle: "Objects",
					tags: ["visual"],
					desc: "Identify the missing value to finish counting the objects"
				}, {
					id: "multiplication_2",
					title: "Simple Multiplication",
					tags: [],
					desc: "Simple division problems using numbers"
				}, {
					id: "division_1",
					title: "Division",
					subtitle: "1 - 100",
					tags: [],
					desc: "Division problems that fall within the 1 to 100 range"
				}, {
					id: "division_2",
					title: "Division",
					subtitle: "Estimation",
					tags: [],
					desc: "Estimate the nearest whole number for a division problem"
				}]
			},
			C = function() {
				return localStorage.getItem("selected-math-problem-type") || N()[0].id
			}
	},
	30: function(e, t, n) {
		"use strict";
		n.d(t, "b", (function() {
			return o
		})), n.d(t, "c", (function() {
			return r
		}));
		var r = {};
		n.r(r), n.d(r, "FETCH_USER_SETTINGS", (function() {
			return a
		})), n.d(r, "UPDATE_USER_PROFILE", (function() {
			return i
		})), n.d(r, "UPDATE_ACCOUNT_SETTINGS", (function() {
			return s
		})), n.d(r, "UPDATE_SOCIAL_SETTINGS", (function() {
			return c
		})), n.d(r, "UPDATE_WORLD", (function() {
			return l
		})), n.d(r, "REMOVE_SSO", (function() {
			return u
		}));
		var o = {};
		n.r(o), n.d(o, "fetchUserSettings", (function() {
			return v
		})), n.d(o, "updateProfile", (function() {
			return b
		})), n.d(o, "updateAccount", (function() {
			return w
		})), n.d(o, "updateWorld", (function() {
			return E
		})), n.d(o, "updateSocialSettings", (function() {
			return O
		})), n.d(o, "updatePassword", (function() {
			return S
		})), n.d(o, "resendEmailValidation", (function() {
			return _
		})), n.d(o, "sendRemoveSSOCode", (function() {
			return T
		})), n.d(o, "removeSSO", (function() {
			return N
		}));
		var a = "nitrotype/profile/FETCH_USER_SETTINGS",
			i = "nitrotype/profile/UPDATE_USER_PROFILE",
			s = "nitrotype/profile/UPDATE_ACCOUNT_SETTINGS",
			c = "nitrotype/profile/UPDATE_SOCIAL_SETTINGS",
			l = "nitrotype/profile/UPDATE_WORLD",
			u = "nitrotype/profile/REMOVE_SSO";

		function p(e, t) {
			var n = Object.keys(e);
			if (Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(e);
				t && (r = r.filter((function(t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				}))), n.push.apply(n, r)
			}
			return n
		}

		function f(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = null != arguments[t] ? arguments[t] : {};
				t % 2 ? p(Object(n), !0).forEach((function(t) {
					d(e, t, n[t])
				})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach((function(t) {
					Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
				}))
			}
			return e
		}

		function d(e, t, n) {
			return t in e ? Object.defineProperty(e, t, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = n, e
		}
		var m = {},
			h = function(e, t) {
				return f(f({}, e), t)
			},
			y = function() {
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case a:
						return h(e, t.payload)
				}
				return e
			},
			g = n(2),
			v = function() {
				return function(e) {
					Object(g.b)("/api/v2/settings", {
						method: "get",
						apiScope: "fetchUserSettings"
					}, e).then((function(t) {
						e(function(e) {
							return {
								type: a,
								payload: e
							}
						}(t))
					}), (function() {
						return null
					}))
				}
			},
			b = function(e, t) {
				return function(n) {
					var r = {
						displayName: e,
						username: t
					};
					void 0 === r.displayName && delete r.displayName, Object(g.b)("/api/v2/settings/profile", {
						method: "post",
						params: r,
						apiScope: "profileUpdate"
					}, n).then((function(e) {
						n(function(e) {
							return {
								type: i,
								payload: e
							}
						}(e))
					}), (function() {
						return null
					}))
				}
			},
			w = function(e, t, n, r, o) {
				return function(a) {
					var i = {
						firstname: e,
						lastname: t,
						email: n,
						contact: r,
						password: o
					};
					Object(g.b)("/api/v2/settings/account", {
						method: "post",
						params: i,
						apiScope: "accountUpdate"
					}, a).then((function(e) {
						a(function(e) {
							return {
								type: s,
								payload: e
							}
						}(e))
					}), (function() {
						return null
					}))
				}
			},
			E = function(e) {
				return function(t) {
					Object(g.b)("/api/v2/settings/world", {
						method: "post",
						params: {
							worldID: e
						},
						apiScope: "updateWorld"
					}, t).then((function(e) {
						t(function(e) {
							return {
								type: l,
								payload: e
							}
						}(e))
					}), (function() {
						return null
					}))
				}
			},
			O = function(e, t, n) {
				return function(r) {
					var o = {
						offline: e,
						allowFriendRequests: t,
						lookingForTeam: n
					};
					Object(g.b)("/api/v2/settings/social", {
						method: "post",
						params: o,
						apiScope: "socialSettingsUpdate"
					}, r).then((function(e) {
						r(function(e) {
							return {
								type: c,
								payload: e
							}
						}(o))
					}), (function() {
						return null
					}))
				}
			},
			S = function(e, t, n) {
				return function(r) {
					var o = {
						password: e,
						newPassword: t,
						newPassword2: n
					};
					Object(g.b)("/api/v2/settings/password", {
						method: "post",
						params: o,
						apiScope: "passwordUpdate"
					}, r).then((function() {
						return null
					}), (function() {
						return null
					}))
				}
			},
			_ = function() {
				return function(e) {
					Object(g.b)("/api/v2/settings/send-verification-email", {
						method: "post",
						apiScope: "resendEmailValidation"
					}, e).then((function() {
						return null
					}), (function() {
						return null
					}))
				}
			},
			T = function() {
				return function(e) {
					Object(g.b)("/api/v2/settings/remove-sso-code", {
						method: "post",
						apiScope: "sendRemoveSSOCode"
					}, e).then((function() {
						return null
					}), (function() {
						return null
					}))
				}
			},
			N = function(e, t, n, r) {
				return function(o) {
					Object(g.b)("/api/v2/settings/remove-sso", {
						method: "post",
						params: {
							code: e,
							username: t,
							password: n,
							password2: r
						},
						apiScope: "removeSSO"
					}, o).then((function(e) {
						o(function(e) {
							return {
								type: u,
								payload: e
							}
						}(e))
					}), (function() {
						return null
					}))
				}
			};
		n(80), t.a = y
	},
	31: function(e, t, n) {
		"use strict";
		var r, o, a = n(6),
			i = n(71),
			s = {
				layoutLeft: [{
					minWidth: 1365,
					id: "nitromath_300x600_336x280_300x250_Right_1",
					width: 300,
					height: 600
				}, {
					minWidth: 1234,
					id: "nitromath_160x600_Left",
					width: 160,
					height: 600
				}],
				layoutTop: [{
					id: "nitromath_970x90_728x90_ATF",
					width: 970,
					height: 90
				}],
				contentSquare: [{
					id: "nitromath_336x280_300x250_Right_2",
					width: 336,
					height: 280
				}],
				contentLargeBanner: [{
					id: "nitromath_300x600_336x280_300x250_Right_1",
					width: 300,
					height: 600
				}],
				midLeaderboard: [{
					id: "nitromath_970x90_728x90_mid",
					width: 970,
					height: 90
				}],
				btfLeaderboard: [{
					id: "nitromath_970x90_728x90_BTF",
					width: 970,
					height: 90
				}]
			},
			c = {
				race: {
					layoutLeft: s.layoutLeft,
					layoutTop: s.layoutTop
				},
				garage: {
					layoutLeft: s.layoutLeft,
					layoutTop: s.layoutTop,
					contentSquare: s.contentSquare
				},
				season: {
					layoutLeft: s.layoutLeft,
					layoutTop: s.layoutTop,
					btfLeaderboard: s.btfLeaderboard
				},
				stats: {
					layoutLeft: s.layoutLeft,
					layoutTop: s.layoutTop,
					midLeaderboard: s.midLeaderboard
				},
				shop: {
					layoutLeft: s.layoutLeft,
					layoutTop: s.layoutTop,
					contentSquare: s.contentSquare
				},
				friends: {
					layoutLeft: s.layoutLeft,
					layoutTop: s.layoutTop,
					btfLeaderboard: s.btfLeaderboard
				},
				team: {
					layoutLeft: s.layoutLeft,
					layoutTop: s.layoutTop,
					btfLeaderboard: s.btfLeaderboard
				},
				teamDetail: {
					layoutLeft: s.layoutLeft,
					layoutTop: s.layoutTop,
					contentSquare: s.contentSquare
				},
				leaderboards: {
					layoutLeft: s.layoutLeft,
					layoutTop: s.layoutTop,
					btfLeaderboard: s.btfLeaderboard
				},
				achievements: {
					layoutLeft: s.layoutLeft,
					layoutTop: s.layoutTop,
					btfLeaderboard: s.btfLeaderboard
				},
				news: {
					layoutLeft: s.layoutLeft,
					layoutTop: s.layoutTop,
					contentLargeBanner: s.contentLargeBanner
				},
				profile: {
					layoutLeft: s.layoutLeft,
					layoutTop: s.layoutTop
				}
			},
			l = {
				race: {
					layoutLeft: (r = 0 === Math.floor(20 * Math.random()) ? {
						layoutLeft: [{
							minWidth: 1360,
							id: "div-gpt-ad-3467507401950-0",
							slot: "/35254017/NM_Other_Left_300x600_Control",
							width: 300,
							height: 600
						}, {
							minWidth: 1220,
							id: "div-gpt-ad-6303731662896-0",
							slot: "/35254017/NM_Other_160x600_Control",
							width: 160,
							height: 600
						}],
						layoutTop: [{
							id: "div-gpt-ad-8084067915125-0",
							slot: "/35254017/NM_Other_ATF_970x90_Control",
							width: 970,
							height: 90
						}],
						layoutLeftRace: [{
							minWidth: 1360,
							id: "div-gpt-ad-3467507401950-0",
							slot: "/35254017/NM_Other_Left_300x600_Control",
							width: 300,
							height: 600
						}, {
							minWidth: 1220,
							id: "div-gpt-ad-4327264499616-0",
							slot: "/35254017/NM_Race_160x600_Control",
							width: 160,
							height: 600
						}],
						layoutTopRace: [{
							id: "div-gpt-ad-5201361537479-0",
							slot: "/35254017/NM_Race_ATF_970x90_Control",
							width: 970,
							height: 90
						}],
						layoutLeftGarage: [{
							minWidth: 1360,
							id: "div-gpt-ad-3467507401950-0",
							slot: "/35254017/NM_Other_Left_300x600_Control",
							width: 300,
							height: 600
						}, {
							minWidth: 1234,
							id: "div-gpt-ad-1064783041879-0",
							slot: "/35254017/NM_Garage_160x600_Control",
							width: 160,
							height: 600
						}],
						layoutTopGarage: [{
							id: "div-gpt-ad-6708373902656-0",
							slot: "/35254017/NM_Garage_ATF_970x90_Control",
							width: 970,
							height: 90
						}],
						contentSquareGarage: [{
							id: "div-gpt-ad-1403041492559-1",
							slot: "/35254017/NM_Garage_Right_336x280_Control",
							width: 336,
							height: 280
						}],
						contentSquare: [{
							id: "div-gpt-ad-1403041492559-2",
							slot: "/35254017/NM_Other_Right_336x280_Control",
							width: 336,
							height: 280
						}],
						contentLargeBanner: [{
							id: "div-gpt-ad-9820112307252-0",
							slot: "/35254017/NM_News_300x600_Control",
							width: 300,
							height: 600
						}],
						midLeaderboard: [{
							id: "div-gpt-ad-5409291749396-0",
							slot: "/35254017/NM_Other_Mid_970x90_Control",
							width: 970,
							height: 90
						}],
						btfLeaderboard: [{
							id: "div-gpt-ad-9613224975081-0",
							slot: "/35254017/NM_Other_BTF_970x90_Control",
							width: 970,
							height: 90
						}]
					} : {
						layoutLeft: [{
							minWidth: 1360,
							id: "div-gpt-ad-3994735991460-0",
							slot: "/35254017/NM_Other_Left_300x600_Floor1",
							width: 300,
							height: 600
						}, {
							minWidth: 1220,
							id: "div-gpt-ad-3467507401950-0",
							slot: "/35254017/NM_Other_160x600_Floor1",
							width: 160,
							height: 600
						}],
						layoutTop: [{
							id: "div-gpt-ad-7319386149562-0",
							slot: "/35254017/NM_Other_ATF_970x90_Floor1",
							width: 970,
							height: 90
						}],
						layoutLeftRace: [{
							minWidth: 1360,
							id: "div-gpt-ad-3994735991460-0",
							slot: "/35254017/NM_Other_Left_300x600_Floor1",
							width: 300,
							height: 600
						}, {
							minWidth: 1220,
							id: "div-gpt-ad-6458090172065-0",
							slot: "/35254017/NM_Race_160x600_Floor1",
							width: 160,
							height: 600
						}],
						layoutTopRace: [{
							id: "div-gpt-ad-9851534803411-0",
							slot: "/35254017/NM_Race_ATF_970x90_Floor1",
							width: 970,
							height: 90
						}],
						layoutLeftGarage: [{
							minWidth: 1360,
							id: "div-gpt-ad-3994735991460-0",
							slot: "/35254017/NM_Other_Left_300x600_Floor1",
							width: 300,
							height: 600
						}, {
							minWidth: 1234,
							id: "div-gpt-ad-6279637736194-0",
							slot: "/35254017/NM_Garage_160x600_Floor1",
							width: 160,
							height: 600
						}],
						layoutTopGarage: [{
							id: "div-gpt-ad-3055720144885-0",
							slot: "/35254017/NM_Garage_ATF_970x90_Floor1",
							width: 970,
							height: 90
						}],
						contentSquareGarage: [{
							id: "div-gpt-ad-1406939054395-0",
							slot: "/35254017/NM_Garage_Right_336x280_Floor1",
							width: 336,
							height: 280
						}],
						contentSquare: [{
							id: "div-gpt-ad-1406939177101-0",
							slot: "/35254017/NM_Other_Right_336x280_Floor1",
							width: 336,
							height: 280
						}],
						contentLargeBanner: [{
							id: "div-gpt-ad-5453937472224-0",
							slot: "/35254017/NM_News_300x600_Floor1",
							width: 300,
							height: 600
						}],
						midLeaderboard: [{
							id: "div-gpt-ad-4515417542965-0",
							slot: "/35254017/NM_Other_Mid_970x90_Floor1",
							width: 970,
							height: 90
						}],
						btfLeaderboard: [{
							id: "div-gpt-ad-8638828100773-0",
							slot: "/35254017/NM_Other_BTF_970x90_Floor1",
							width: 970,
							height: 90
						}]
					}).layoutLeftRace,
					layoutTop: r.layoutTopRace
				},
				garage: {
					layoutLeft: r.layoutLeftGarage,
					layoutTop: r.layoutTopGarage,
					contentSquare: r.contentSquareGarage
				},
				season: {
					layoutLeft: r.layoutLeft,
					layoutTop: r.layoutTop,
					btfLeaderboard: r.btfLeaderboard
				},
				stats: {
					layoutLeft: r.layoutLeft,
					layoutTop: r.layoutTop,
					midLeaderboard: r.midLeaderboard
				},
				shop: {
					layoutLeft: r.layoutLeft,
					layoutTop: r.layoutTop,
					contentSquare: r.contentSquare
				},
				friends: {
					layoutLeft: r.layoutLeft,
					layoutTop: r.layoutTop,
					btfLeaderboard: r.btfLeaderboard
				},
				team: {
					layoutLeft: r.layoutLeft,
					layoutTop: r.layoutTop,
					btfLeaderboard: r.btfLeaderboard
				},
				teamDetail: {
					layoutLeft: r.layoutLeft,
					layoutTop: r.layoutTop,
					contentSquare: r.contentSquare
				},
				leaderboards: {
					layoutLeft: r.layoutLeft,
					layoutTop: r.layoutTop,
					btfLeaderboard: r.btfLeaderboard
				},
				achievements: {
					layoutLeft: r.layoutLeft,
					layoutTop: r.layoutTop,
					btfLeaderboard: r.btfLeaderboard
				},
				news: {
					layoutLeft: r.layoutLeft,
					layoutTop: r.layoutTop,
					contentLargeBanner: r.contentLargeBanner
				},
				profile: {
					layoutLeft: r.layoutLeft,
					layoutTop: r.layoutTop
				}
			},
			u = {
				layoutLeft: [{
					minWidth: 1365,
					id: "nitrotype_300x600_336x280_300x250_Right_1",
					width: 300,
					height: 600
				}, {
					minWidth: 1234,
					id: "nitrotype_160x600_Left",
					width: 160,
					height: 600
				}],
				layoutTop: [{
					id: "nitrotype_970x90_728x90_ATF",
					width: 970,
					height: 90
				}],
				contentSquare: [{
					id: "nitrotype_336x280_300x250_Right_2",
					width: 336,
					height: 280
				}],
				contentLargeBanner: [{
					id: "nitrotype_300x600_336x280_300x250_Right_1",
					width: 300,
					height: 600
				}],
				midLeaderboard: [{
					id: "nitrotype_970x90_728x90_Mid",
					width: 970,
					height: 90
				}],
				btfLeaderboard: [{
					id: "nitrotype_970x90_728x90_BTF",
					width: 970,
					height: 90
				}]
			},
			p = {
				race: {
					layoutLeft: u.layoutLeft,
					layoutTop: u.layoutTop
				},
				garage: {
					layoutLeft: u.layoutLeft,
					layoutTop: u.layoutTop,
					contentSquare: u.contentSquare
				},
				season: {
					layoutLeft: u.layoutLeft,
					layoutTop: u.layoutTop,
					btfLeaderboard: u.btfLeaderboard
				},
				stats: {
					layoutLeft: u.layoutLeft,
					layoutTop: u.layoutTop,
					midLeaderboard: u.midLeaderboard
				},
				shop: {
					layoutLeft: u.layoutLeft,
					layoutTop: u.layoutTop
				},
				customizer: {
					layoutLeft: u.layoutLeft,
					layoutTop: u.layoutTop
				},
				friends: {
					layoutLeft: u.layoutLeft,
					layoutTop: u.layoutTop,
					btfLeaderboard: u.btfLeaderboard
				},
				team: {
					layoutLeft: u.layoutLeft,
					layoutTop: u.layoutTop,
					btfLeaderboard: u.btfLeaderboard
				},
				teamDetail: {
					layoutLeft: u.layoutLeft,
					layoutTop: u.layoutTop,
					contentSquare: u.contentSquare
				},
				leaderboards: {
					layoutLeft: u.layoutLeft,
					layoutTop: u.layoutTop,
					btfLeaderboard: u.btfLeaderboard
				},
				achievements: {
					layoutLeft: u.layoutLeft,
					layoutTop: u.layoutTop,
					btfLeaderboard: u.btfLeaderboard
				},
				news: {
					layoutLeft: u.layoutLeft,
					layoutTop: u.layoutTop,
					contentLargeBanner: u.contentLargeBanner
				},
				profile: {
					layoutLeft: u.layoutLeft,
					layoutTop: u.layoutTop
				}
			},
			f = {
				race: {
					layoutLeft: (o = 0 === Math.floor(20 * Math.random()) ? {
						layoutLeft: [{
							minWidth: 1360,
							id: "div-gpt-ad-3467507401950-0",
							slot: "/35254017/NT_Other_Left_2_300x600_Control",
							width: 300,
							height: 600
						}, {
							minWidth: 1220,
							id: "div-gpt-ad-6303731662896-0",
							slot: "/35254017/NT_Other_160x600_Control",
							width: 160,
							height: 600
						}],
						layoutTop: [{
							id: "div-gpt-ad-8084067915125-0",
							slot: "/35254017/NT_Other_ATF_2_970x90_Control",
							width: 970,
							height: 90
						}],
						layoutLeftRace: [{
							minWidth: 1360,
							id: "div-gpt-ad-3467507401950-0",
							slot: "/35254017/NT_Other_Left_2_300x600_Control",
							width: 300,
							height: 600
						}, {
							minWidth: 1220,
							id: "div-gpt-ad-4327264499616-0",
							slot: "/35254017/NT_Race_160x600_Control",
							width: 160,
							height: 600
						}],
						layoutTopRace: [{
							id: "div-gpt-ad-5201361537479-0",
							slot: "/35254017/NT_Race_ATF_2_970x90_Control",
							width: 970,
							height: 90
						}],
						layoutLeftGarage: [{
							minWidth: 1360,
							id: "div-gpt-ad-3467507401950-0",
							slot: "/35254017/NT_Other_Left_2_300x600_Control",
							width: 300,
							height: 600
						}, {
							minWidth: 1234,
							id: "div-gpt-ad-8125488033128-0",
							slot: "/35254017/NT_Garage_160x600_Control",
							width: 160,
							height: 600
						}],
						layoutTopGarage: [{
							id: "div-gpt-ad-6708373902656-0",
							slot: "?refresh=test" === location.search ? "/35254017/NT_refresh_test_970x90_Control" : "/35254017/NT_Garage_ATF_2_970x90_Control",
							width: 970,
							height: 90
						}],
						contentSquareGarage: [{
							id: "div-gpt-ad-1403041492559-1",
							slot: "/35254017/NT_336x280_Garage_Right",
							width: 336,
							height: 280
						}],
						contentSquare: [{
							id: "div-gpt-ad-1403041492559-2",
							slot: "/35254017/NT_336x280_Other_Right",
							width: 336,
							height: 280
						}],
						contentLargeBanner: [{
							id: "div-gpt-ad-9820112307252-0",
							slot: "/35254017/NT_News_2_300x600_Control",
							width: 300,
							height: 600
						}],
						midLeaderboard: [{
							id: "div-gpt-ad-5409291749396-0",
							slot: "/35254017/NT_Other_Mid_2_970x90_Control",
							width: 970,
							height: 90
						}],
						btfLeaderboard: [{
							id: "div-gpt-ad-9613224975081-0",
							slot: "/35254017/NT_Other_BTF_2_970x90_Control",
							width: 970,
							height: 90
						}]
					} : {
						layoutLeft: [{
							minWidth: 1360,
							id: "div-gpt-ad-3994735991460-0",
							slot: "/35254017/NT_Other_Left_2_300x600_Floor1",
							width: 300,
							height: 600
						}, {
							minWidth: 1220,
							id: "div-gpt-ad-3467507401950-0",
							slot: "/35254017/NT_Other_160x600_Floor1",
							width: 160,
							height: 600
						}],
						layoutTop: [{
							id: "div-gpt-ad-7319386149562-0",
							slot: "/35254017/NT_Other_ATF_2_970x90_Floor1",
							width: 970,
							height: 90
						}],
						layoutLeftRace: [{
							minWidth: 1360,
							id: "div-gpt-ad-3994735991460-0",
							slot: "/35254017/NT_Other_Left_2_300x600_Floor1",
							width: 300,
							height: 600
						}, {
							minWidth: 1220,
							id: "div-gpt-ad-6458090172065-0",
							slot: "/35254017/NT_Race_160x600_Floor1",
							width: 160,
							height: 600
						}],
						layoutTopRace: [{
							id: "div-gpt-ad-9851534803411-0",
							slot: "/35254017/NT_Race_ATF_2_970x90_Floor1",
							width: 970,
							height: 90
						}],
						layoutLeftGarage: [{
							minWidth: 1360,
							id: "div-gpt-ad-3994735991460-0",
							slot: "/35254017/NT_Other_Left_2_300x600_Floor1",
							width: 300,
							height: 600
						}, {
							minWidth: 1234,
							id: "div-gpt-ad-6279637736194-0",
							slot: "/35254017/NT_Garage_160x600_Floor1",
							width: 160,
							height: 600
						}],
						layoutTopGarage: [{
							id: "div-gpt-ad-3055720144885-0",
							slot: "?refresh=test" === location.search ? "/35254017/NT_refresh_test_970x90_Control" : "/35254017/NT_Garage_ATF_2_970x90_Floor1",
							width: 970,
							height: 90
						}],
						contentSquareGarage: [{
							id: "div-gpt-ad-1406939054395-0",
							slot: "/35254017/NT_336x280_Garage_Right_Floor1",
							width: 336,
							height: 280
						}],
						contentSquare: [{
							id: "div-gpt-ad-1406939177101-0",
							slot: "/35254017/NT_336x280_Other_Right_Floor1",
							width: 336,
							height: 280
						}],
						contentLargeBanner: [{
							id: "div-gpt-ad-5453937472224-0",
							slot: "/35254017/NT_News_2_300x600_Floor1",
							width: 300,
							height: 600
						}],
						midLeaderboard: [{
							id: "div-gpt-ad-4515417542965-0",
							slot: "/35254017/NT_Other_Mid_2_970x90_Floor1",
							width: 970,
							height: 90
						}],
						btfLeaderboard: [{
							id: "div-gpt-ad-8638828100773-0",
							slot: "/35254017/NT_Other_BTF_2_970x90_Floor1",
							width: 970,
							height: 90
						}]
					}).layoutLeftRace,
					layoutTop: o.layoutTopRace
				},
				garage: {
					layoutLeft: o.layoutLeftGarage,
					layoutTop: o.layoutTopGarage,
					contentSquare: o.contentSquareGarage
				},
				season: {
					layoutLeft: o.layoutLeft,
					layoutTop: o.layoutTop
				},
				stats: {
					layoutLeft: o.layoutLeft,
					layoutTop: o.layoutTop,
					midLeaderboard: o.midLeaderboard
				},
				shop: {
					layoutLeft: o.layoutLeft,
					layoutTop: o.layoutTop,
					contentSquare: o.contentSquare
				},
				customizer: {
					layoutLeft: o.layoutLeft,
					layoutTop: o.layoutTop
				},
				friends: {
					layoutLeft: o.layoutLeft,
					layoutTop: o.layoutTop,
					btfLeaderboard: o.btfLeaderboard
				},
				team: {
					layoutLeft: o.layoutLeft,
					layoutTop: o.layoutTop,
					btfLeaderboard: o.btfLeaderboard
				},
				teamDetail: {
					layoutLeft: o.layoutLeft,
					layoutTop: o.layoutTop,
					contentSquare: o.contentSquare
				},
				leaderboards: {
					layoutLeft: o.layoutLeft,
					layoutTop: o.layoutTop,
					btfLeaderboard: o.btfLeaderboard
				},
				achievements: {
					layoutLeft: o.layoutLeft,
					layoutTop: o.layoutTop,
					btfLeaderboard: o.btfLeaderboard
				},
				news: {
					layoutLeft: o.layoutLeft,
					layoutTop: o.layoutTop,
					contentLargeBanner: o.contentLargeBanner
				},
				profile: {
					layoutLeft: o.layoutLeft,
					layoutTop: o.layoutTop
				}
			},
			d = {
				layoutLeft: [{
					minWidth: 1365,
					id: "layoutLeft",
					unit: "sky_atf",
					width: 300,
					height: 600
				}, {
					minWidth: 1234,
					id: "layoutLeft",
					unit: "sky_btf",
					width: 160,
					height: 600
				}],
				layoutTop: [{
					id: "layoutTop",
					unit: "leaderboard_atf",
					width: 970,
					height: 90
				}],
				contentSquare: [{
					id: "contentSquare",
					unit: "med_rect_btf",
					width: 336,
					height: 280
				}],
				contentLargeBanner: [{
					id: "contentLargeBanner",
					unit: "med_rect_atf",
					width: 300,
					height: 600
				}],
				midLeaderboard: [{
					id: "midLeaderboard",
					unit: "leaderboard_btf",
					width: 970,
					height: 90
				}],
				btfLeaderboard: [{
					id: "btfLeaderboard",
					unit: "leaderboard_btf",
					width: 970,
					height: 90
				}]
			},
			m = {
				race: {
					layoutLeft: d.layoutLeft,
					layoutTop: d.layoutTop
				},
				garage: {
					layoutLeft: d.layoutLeft,
					layoutTop: d.layoutTop,
					contentSquare: d.contentSquare
				},
				season: {
					layoutLeft: d.layoutLeft,
					layoutTop: d.layoutTop,
					btfLeaderboard: d.btfLeaderboard
				},
				stats: {
					layoutLeft: d.layoutLeft,
					layoutTop: d.layoutTop,
					midLeaderboard: d.midLeaderboard
				},
				shop: {
					layoutLeft: d.layoutLeft,
					layoutTop: d.layoutTop
				},
				customizer: {
					layoutLeft: d.layoutLeft,
					layoutTop: d.layoutTop
				},
				friends: {
					layoutLeft: d.layoutLeft,
					layoutTop: d.layoutTop,
					btfLeaderboard: d.btfLeaderboard
				},
				team: {
					layoutLeft: d.layoutLeft,
					layoutTop: d.layoutTop,
					btfLeaderboard: d.btfLeaderboard
				},
				teamDetail: {
					layoutLeft: d.layoutLeft,
					layoutTop: d.layoutTop,
					contentSquare: d.contentSquare
				},
				leaderboards: {
					layoutLeft: d.layoutLeft,
					layoutTop: d.layoutTop,
					btfLeaderboard: d.btfLeaderboard
				},
				achievements: {
					layoutLeft: d.layoutLeft,
					layoutTop: d.layoutTop,
					btfLeaderboard: d.btfLeaderboard
				},
				news: {
					layoutLeft: d.layoutLeft,
					layoutTop: d.layoutTop,
					contentLargeBanner: d.contentLargeBanner
				},
				profile: {
					layoutLeft: d.layoutLeft,
					layoutTop: d.layoutTop
				}
			},
			h = {
				layoutLeft: [{
					minWidth: 1365,
					id: "proper-ad-nitrotype_side_1",
					unit: "nitrotype_side_1",
					width: 300,
					height: 600
				}, {
					minWidth: 1234,
					id: "proper-ad-nitrotype_side_2",
					unit: "nitrotype_side_2",
					width: 160,
					height: 600
				}],
				layoutTop: [{
					id: "proper-ad-nitrotype_leaderboard_1",
					unit: "nitrotype_leaderboard_1",
					width: 970,
					height: 90
				}],
				raceLayoutTop: [{
					id: "proper-ad-nitrotype_race_leaderboard_1",
					unit: "nitrotype_race_leaderboard_1",
					width: 970,
					height: 90
				}],
				raceLayoutLeft: [{
					minWidth: 1365,
					id: "proper-ad-nitrotype_race_side_1",
					unit: "nitrotype_race_side_1",
					width: 300,
					height: 600
				}, {
					minWidth: 1234,
					id: "proper-ad-nitrotype_race_side_2",
					unit: "nitrotype_race_side_2",
					width: 160,
					height: 600
				}],
				contentSquare: [{
					id: "proper-ad-nitrotype_square",
					unit: "nitrotype_square",
					width: 336,
					height: 280
				}],
				contentLargeBanner: [{
					id: "proper-ad-nitrotype_news",
					unit: "nitrotype_news",
					width: 300,
					height: 600
				}],
				midLeaderboard: [{
					id: "proper-ad-nitrotype_leaderboard_2",
					unit: "nitrotype_leaderboard_2",
					width: 970,
					height: 90
				}],
				btfLeaderboard: [{
					id: "proper-ad-nitrotype_leaderboard_2",
					unit: "nitrotype_leaderboard_2",
					width: 970,
					height: 90
				}]
			},
			y = {
				race: {
					layoutLeft: h.raceLayoutLeft,
					layoutTop: h.raceLayoutTop
				},
				garage: {
					layoutLeft: h.layoutLeft,
					layoutTop: h.layoutTop,
					contentSquare: h.contentSquare
				},
				season: {
					layoutLeft: h.layoutLeft,
					layoutTop: h.layoutTop,
					btfLeaderboard: h.btfLeaderboard
				},
				stats: {
					layoutLeft: h.layoutLeft,
					layoutTop: h.layoutTop,
					midLeaderboard: h.midLeaderboard
				},
				shop: {
					layoutLeft: h.layoutLeft,
					layoutTop: h.layoutTop
				},
				customizer: {
					layoutLeft: h.layoutLeft,
					layoutTop: h.layoutTop
				},
				friends: {
					layoutLeft: h.layoutLeft,
					layoutTop: h.layoutTop,
					btfLeaderboard: h.btfLeaderboard
				},
				team: {
					layoutLeft: h.layoutLeft,
					layoutTop: h.layoutTop,
					btfLeaderboard: h.btfLeaderboard
				},
				teamDetail: {
					layoutLeft: h.layoutLeft,
					layoutTop: h.layoutTop,
					contentSquare: h.contentSquare
				},
				leaderboards: {
					layoutLeft: h.layoutLeft,
					layoutTop: h.layoutTop,
					btfLeaderboard: h.btfLeaderboard
				},
				achievements: {
					layoutLeft: h.layoutLeft,
					layoutTop: h.layoutTop,
					btfLeaderboard: h.btfLeaderboard
				},
				news: {
					layoutLeft: h.layoutLeft,
					layoutTop: h.layoutTop,
					contentLargeBanner: h.contentLargeBanner
				},
				profile: {
					layoutLeft: h.layoutLeft,
					layoutTop: h.layoutTop
				}
			},
			g = {
				layoutLeft: [{
					minWidth: 1365,
					id: "div-gpt-ad-nitrotypecom38348",
					width: 300,
					height: 600
				}, {
					minWidth: 1234,
					id: "div-gpt-ad-nitrotypecom38340",
					width: 160,
					height: 600
				}],
				layoutTop: [{
					id: "div-gpt-ad-nitrotypecom38338",
					width: 970,
					height: 90
				}],
				contentSquare: [{
					id: "div-gpt-ad-nitrotypecom38342",
					width: 336,
					height: 280
				}],
				contentLargeBanner: [{
					id: "div-gpt-ad-nitrotypecom38341",
					width: 300,
					height: 600
				}],
				btfLeaderboard: [{
					id: "div-gpt-ad-nitrotypecom38339",
					width: 970,
					height: 90
				}]
			},
			v = {
				layoutLeft: [{
					minWidth: 1365,
					id: "div-gpt-ad-side_300x600",
					width: 300,
					height: 600
				}, {
					minWidth: 1234,
					id: "div-gpt-ad-side_160x600",
					width: 160,
					height: 600
				}],
				layoutTop: [{
					id: "div-gpt-ad-top_970x90",
					width: 970,
					height: 90
				}],
				contentSquare: [{
					id: "div-gpt-ad-square_300x250",
					width: 336,
					height: 280
				}],
				contentLargeBanner: [{
					id: "div-gpt-ad-square_300x600-1",
					width: 300,
					height: 600
				}],
				midLeaderboard: [{
					id: "div-gpt-ad-top_970x90-1",
					width: 970,
					height: 90
				}],
				btfLeaderboard: [{
					id: "div-gpt-ad-top_970x90-2",
					width: 970,
					height: 90
				}]
			},
			b = {
				nitrotype: {
					freestar: p,
					google: f,
					playwire: m,
					proper: y,
					pubgalaxy: {
						race: {
							layoutLeft: g.layoutLeft,
							layoutTop: g.layoutTop
						},
						garage: {
							layoutLeft: g.layoutLeft,
							layoutTop: g.layoutTop,
							contentSquare: g.contentSquare
						},
						season: {
							layoutLeft: g.layoutLeft,
							layoutTop: g.layoutTop,
							btfLeaderboard: g.btfLeaderboard
						},
						stats: {
							layoutLeft: g.layoutLeft,
							layoutTop: g.layoutTop
						},
						shop: {
							layoutLeft: g.layoutLeft,
							layoutTop: g.layoutTop
						},
						customizer: {
							layoutLeft: g.layoutLeft,
							layoutTop: g.layoutTop
						},
						friends: {
							layoutLeft: g.layoutLeft,
							layoutTop: g.layoutTop,
							btfLeaderboard: g.btfLeaderboard
						},
						team: {
							layoutLeft: g.layoutLeft,
							layoutTop: g.layoutTop,
							btfLeaderboard: g.btfLeaderboard
						},
						teamDetail: {
							layoutLeft: g.layoutLeft,
							layoutTop: g.layoutTop,
							contentSquare: g.contentSquare
						},
						leaderboards: {
							layoutLeft: g.layoutLeft,
							layoutTop: g.layoutTop,
							btfLeaderboard: g.btfLeaderboard
						},
						achievements: {
							layoutLeft: g.layoutLeft,
							layoutTop: g.layoutTop,
							btfLeaderboard: g.btfLeaderboard
						},
						news: {
							layoutLeft: g.layoutLeft,
							layoutTop: g.layoutTop,
							contentLargeBanner: g.contentLargeBanner
						},
						profile: {
							layoutLeft: g.layoutLeft,
							layoutTop: g.layoutTop
						}
					},
					vuukle: {
						race: {
							layoutLeft: v.layoutLeft,
							layoutTop: v.layoutTop
						},
						garage: {
							layoutLeft: v.layoutLeft,
							layoutTop: v.layoutTop,
							contentSquare: v.contentSquare
						},
						season: {
							layoutLeft: v.layoutLeft,
							layoutTop: v.layoutTop,
							btfLeaderboard: v.btfLeaderboard
						},
						stats: {
							layoutLeft: v.layoutLeft,
							layoutTop: v.layoutTop
						},
						shop: {
							layoutLeft: v.layoutLeft,
							layoutTop: v.layoutTop
						},
						customizer: {
							layoutLeft: v.layoutLeft,
							layoutTop: v.layoutTop
						},
						friends: {
							layoutLeft: v.layoutLeft,
							layoutTop: v.layoutTop,
							btfLeaderboard: v.btfLeaderboard
						},
						team: {
							layoutLeft: v.layoutLeft,
							layoutTop: v.layoutTop,
							btfLeaderboard: v.btfLeaderboard
						},
						teamDetail: {
							layoutLeft: v.layoutLeft,
							layoutTop: v.layoutTop,
							contentSquare: v.contentSquare
						},
						leaderboards: {
							layoutLeft: v.layoutLeft,
							layoutTop: v.layoutTop,
							btfLeaderboard: v.btfLeaderboard
						},
						achievements: {
							layoutLeft: v.layoutLeft,
							layoutTop: v.layoutTop,
							btfLeaderboard: v.btfLeaderboard
						},
						news: {
							layoutLeft: v.layoutLeft,
							layoutTop: v.layoutTop,
							contentLargeBanner: v.contentLargeBanner
						},
						profile: {
							layoutLeft: v.layoutLeft,
							layoutTop: v.layoutTop
						}
					}
				},
				nitromath: {
					freestar: c,
					google: l,
					playwire: m,
					proper: y
				}
			};
		t.a = Object(a.b)((function(e) {
			return {
				adUnits: b[e.globals.SITE][window.__adNetwork],
				env: e.globals.ENV
			}
		}), (function(e) {
			return {}
		}))(i.a)
	},
	32: function(e, t, n) {
		"use strict";
		n.d(t, "a", (function() {
			return i
		})), n.d(t, "b", (function() {
			return s
		})), n.d(t, "c", (function() {
			return c
		}));
		var r = n(34);

		function o(e, t) {
			var n;
			if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
				if (Array.isArray(e) || (n = function(e, t) {
						if (!e) return;
						if ("string" == typeof e) return a(e, t);
						var n = Object.prototype.toString.call(e).slice(8, -1);
						"Object" === n && e.constructor && (n = e.constructor.name);
						if ("Map" === n || "Set" === n) return Array.from(e);
						if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(e, t)
					}(e)) || t && e && "number" == typeof e.length) {
					n && (e = n);
					var r = 0,
						o = function() {};
					return {
						s: o,
						n: function() {
							return r >= e.length ? {
								done: !0
							} : {
								done: !1,
								value: e[r++]
							}
						},
						e: function(e) {
							throw e
						},
						f: o
					}
				}
				throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
			}
			var i, s = !0,
				c = !1;
			return {
				s: function() {
					n = e[Symbol.iterator]()
				},
				n: function() {
					var e = n.next();
					return s = e.done, e
				},
				e: function(e) {
					c = !0, i = e
				},
				f: function() {
					try {
						s || null == n.return || n.return()
					} finally {
						if (c) throw i
					}
				}
			}
		}

		function a(e, t) {
			(null == t || t > e.length) && (t = e.length);
			for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
			return r
		}
		var i = "/assets/",
			s = r;

		function c(e, t) {
			if (!c.done) {
				c.done = !0;
				var n, a = {
						trail: "trails",
						nitro: "nitros"
					},
					i = o(e);
				try {
					for (i.s(); !(n = i.n()).done;) {
						var s = n.value,
							l = r.spritesheets[s.publicKey];
						l && s.assetKey && (delete r.spritesheets[s.publicKey], r.spritesheets["cars/".concat(s.assetKey)] = l)
					}
				} catch (e) {
					i.e(e)
				} finally {
					i.f()
				}
				var u, p = o(t);
				try {
					for (p.s(); !(u = p.n()).done;) {
						var f = u.value,
							d = a[f.type],
							m = r.spritesheets[f.publicKey];
						d && m && f.assetKey && (delete r.spritesheets[f.publicKey], r.spritesheets["".concat(d, "/").concat(f.assetKey)] = m)
					}
				} catch (e) {
					p.e(e)
				} finally {
					p.f()
				}
			}
		}
	},
	325: function(e, t, n) {
		"use strict";
		n.r(t);
		var r = n(0),
			o = n.n(r),
			a = n(28),
			i = n.n(a),
			s = n(27),
			c = n(39),
			l = n(6),
			u = n(8),
			p = n.n(u),
			f = n(3),
			d = n.n(f),
			m = n(7),
			h = (n(1), n(100)),
			y = n(24),
			g = n(2),
			v = n(37),
			b = n(42);

		function w(e) {
			return (w = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}

		function E() {
			return (E = Object.assign || function(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = arguments[t];
					for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
				}
				return e
			}).apply(this, arguments)
		}

		function O(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
			}
		}

		function S(e, t) {
			return (S = Object.setPrototypeOf || function(e, t) {
				return e.__proto__ = t, e
			})(e, t)
		}

		function _(e) {
			var t = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
				} catch (e) {
					return !1
				}
			}();
			return function() {
				var n, r = N(e);
				if (t) {
					var o = N(this).constructor;
					n = Reflect.construct(r, arguments, o)
				} else n = r.apply(this, arguments);
				return T(this, n)
			}
		}

		function T(e, t) {
			return !t || "object" !== w(t) && "function" != typeof t ? function(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}(e) : t
		}

		function N(e) {
			return (N = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
				return e.__proto__ || Object.getPrototypeOf(e)
			})(e)
		}
		var C = function(e) {
				! function(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							writable: !0,
							configurable: !0
						}
					}), t && S(e, t)
				}(i, e);
				var t, n, r, a = _(i);

				function i(e) {
					var t;
					return function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, i), (t = a.call(this, e)).state = {
						amount: "100000",
						password: "",
						passwordError: !1,
						amountError: !1
					}, t.updateAmount = function(e) {
						var n, r = e.target.value;
						!r || isNaN(r) || r % 1 != 0 || r.includes(".") ? n = "Please enter a valid number." : parseFloat(r) < t.props.sendCashDefaults.minimum ? n = "You can not send less than $".concat("100000".toLocaleString()) : parseFloat(r) > t.props.user.money && (n = "You do not have enough money!"), t.setState({
							amount: r,
							amountError: n
						})
					}, t.updatePassword = function(e) {
						var n = e.target.value;
						t.setState({
							password: n,
							passwordError: !n && "Password is required."
						})
					}, t.sendCash = function(e) {
						e && e.preventDefault(), t.state.amountError || (t.state.password || "standard" !== t.props.user.accountType ? t.props.sendCash(t.props.racer.userID, t.state.amount, t.state.password) : t.setState({
							passwordError: "Password is required."
						}))
					}, t.state.amountError = e.sendCashDefaults.minimum > e.user.money && "You do not have enough money!", t
				}
				return t = i, (n = [{
					key: "componentDidUpdate",
					value: function(e, t, n) {
						!e.sendCashError && this.props.sendCashError ? this.props.sendCashError.password ? this.setState({
							passwordError: this.props.sendCashError.password
						}) : this.props.sendCashError.amount && this.setState({
							amountError: this.props.sendCashError.amount
						}) : e.sendCashPending && this.props.sendCashSuccessful && Object(g.t)("purchase")
					}
				}, {
					key: "render",
					value: function() {
						return this.props.sendCashSuccessful ? this.renderConfirmation() : o.a.createElement("div", {
							className: "modal-body row row--m well--m_p well--pb tac modal--mysterybox",
							id: "modal-sendcash"
						}, o.a.createElement("p", {
							className: "tc-ts tac"
						}, "You have ", o.a.createElement("span", {
							className: "tc-emerald as-nitro-cash--prefix"
						}, o.a.createElement(b.a, {
							amount: this.props.user.money
						})), " available"), o.a.createElement("div", {
							className: "well well--s tac"
						}, o.a.createElement("img", {
							src: "/dist/site/images/modals/sendcash/sendcash-send.2.png"
						})), o.a.createElement("form", {
							onSubmit: this.sendCash
						}, o.a.createElement("div", {
							className: "split split--flag well well--b well--s"
						}, o.a.createElement("div", {
							className: "split-cell tal"
						}, o.a.createElement("div", {
							className: "tsxs tc-ts ttu"
						}, "Send Gift To")), o.a.createElement("div", {
							className: "split-cell tar"
						}, o.a.createElement("span", {
							className: "tc-i tsm twb"
						}, this.props.racer.tag && "[".concat(this.props.racer.tag, "]"), this.props.racer.displayName || this.props.racer.username))), o.a.createElement("div", {
							className: "split split--flag split--eq well well--b well--s"
						}, o.a.createElement("div", {
							className: "split-cell tal"
						}, o.a.createElement("div", {
							className: "tsxs tc-ts ttu"
						}, "Amount You Want To Send")), o.a.createElement("div", {
							className: "split-cell"
						}, o.a.createElement("div", {
							className: d()("input as-nitro-cash", {
								"is-error": this.state.amountError
							})
						}, o.a.createElement("div", {
							className: "has-action has-action--left"
						}, o.a.createElement("input", {
							className: "input-field",
							value: this.state.amount,
							onChange: this.updateAmount
						}), o.a.createElement("div", {
							className: "input-action input-action--left pls tc-ts"
						}, "$")), o.a.createElement("div", {
							className: "input-alert"
						}, o.a.createElement("div", {
							className: "bucket bucket--xs bucket--c"
						}, o.a.createElement("div", {
							className: "bucket-media"
						}, o.a.createElement("svg", {
							className: "icon icon-warning animate animate--fadeInOut animate--infinite animate--d-15"
						}, o.a.createElement("use", {
							xmlnsXlink: "http://www.w3.org/1999/xlink",
							xlinkHref: "/dist/site/images/icons/icons.css.svg#icon-warning"
						}))), o.a.createElement("div", {
							className: "bucket-content"
						}, this.state.amountError)))))), "standard" === this.props.user.accountType && o.a.createElement("div", {
							className: "split split--flag split--eq well well--b well--s"
						}, o.a.createElement("div", {
							className: "split-cell tal"
						}, o.a.createElement("div", {
							className: "tsxs tc-ts ttu"
						}, "Re-enter Your Password")), o.a.createElement("div", {
							className: "split-cell"
						}, o.a.createElement("div", {
							className: d()("input input--fw", {
								"is-error": !!this.state.passwordError
							})
						}, o.a.createElement("input", {
							className: "input-field",
							type: "password",
							id: "pass",
							value: this.state.password,
							onChange: this.updatePassword
						}), o.a.createElement("div", {
							className: "input-alert"
						}, o.a.createElement("div", {
							className: "bucket bucket--xs bucket--c"
						}, o.a.createElement("div", {
							className: "bucket-media"
						}, o.a.createElement("svg", {
							className: "icon icon-warning animate animate--fadeInOut animate--infinite animate--d-15"
						}, o.a.createElement("use", {
							xmlnsXlink: "http://www.w3.org/1999/xlink",
							xlinkHref: "/dist/site/images/icons/icons.css.svg#icon-warning"
						}))), o.a.createElement("div", {
							className: "bucket-content"
						}, this.state.passwordError)))))), o.a.createElement("div", {
							className: "g well well--t"
						}, o.a.createElement("div", {
							className: "g-b g-b--6of12"
						}, o.a.createElement("button", {
							type: "button",
							className: d()("btn btn--negative btn--fw", {
								"is-disabled": this.props.isExiting || this.props.sendCashPending
							}),
							onClick: this.props.closeModal
						}, "Cancel")), o.a.createElement("div", {
							className: "g-b g-b--6of12"
						}, o.a.createElement("button", {
							type: "submit",
							className: d()("btn btn--positive btn--fw", {
								"is-loading": this.props.sendCashPending
							}, {
								"is-disabled": this.props.isExiting
							}),
							onClick: this.sendCash
						}, "Send", this.props.sendCashPending ? "ing" : "", " Cash Gift")))))
					}
				}, {
					key: "renderConfirmation",
					value: function() {
						var e = this,
							t = (this.props.racer.tag ? "[".concat(this.props.racer.tag, "]") : "") + (this.props.racer.displayName || this.props.racer.username);
						return o.a.createElement(v.a, {
							animations: [{
								position: "top-center",
								cornerOffset: 125,
								count: 100,
								speed: 30,
								spread: 360,
								particle: {
									type: "image",
									assets: ["/dist/site/images/inventory/inv-cash.2.png"]
								}
							}, {
								position: "top-left",
								cornerOffset: 20,
								delay: 200,
								count: 600,
								speed: 20,
								spread: 360,
								particle: {
									type: "confetti"
								}
							}, {
								position: "top-right",
								delay: 400,
								count: 140,
								speed: 25,
								spread: 360,
								particle: {
									type: "confetti"
								}
							}],
							animate: 500,
							render: function(n) {
								return o.a.createElement("div", E({}, n, {
									className: "row row--m well--p well--m_p tac tc-i"
								}), o.a.createElement("div", {
									className: "well well--b well--l tc-emerald"
								}, o.a.createElement("svg", {
									className: "icon icon-circle-check-mega mhc animate animate--d-075 animate--1 animate--bounceForward"
								}, o.a.createElement("use", {
									xmlnsXlink: "http://www.w3.org/1999/xlink",
									xlinkHref: "/dist/site/images/icons/icons.css.svg#icon-circlecheck"
								}))), o.a.createElement("p", {
									className: "tc-ts"
								}, o.a.createElement("strong", {
									className: "tc-emerald"
								}, "Success!"), " You have sent ", o.a.createElement("strong", {
									className: "tc-emerald as-nitro-cash--prefix"
								}, o.a.createElement(b.a, {
									amount: e.state.amount
								})), " to ", o.a.createElement("strong", {
									className: "tc-i"
								}, t), ". They will receive your gift next time they log in."), o.a.createElement("button", {
									type: "button",
									className: d()("btn btn--negative"),
									onClick: e.props.closeModal
								}, "Close"))
							}
						})
					}
				}]) && O(t.prototype, n), r && O(t, r), i
			}(o.a.PureComponent),
			A = Object(y.a)(C);

		function I(e) {
			return (I = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}

		function k(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function R(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
			}
		}

		function P(e, t) {
			return (P = Object.setPrototypeOf || function(e, t) {
				return e.__proto__ = t, e
			})(e, t)
		}

		function j(e) {
			var t = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
				} catch (e) {
					return !1
				}
			}();
			return function() {
				var n, r = x(e);
				if (t) {
					var o = x(this).constructor;
					n = Reflect.construct(r, arguments, o)
				} else n = r.apply(this, arguments);
				return D(this, n)
			}
		}

		function D(e, t) {
			return !t || "object" !== I(t) && "function" != typeof t ? function(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}(e) : t
		}

		function x(e) {
			return (x = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
				return e.__proto__ || Object.getPrototypeOf(e)
			})(e)
		}
		var L = function(e) {
			! function(e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						writable: !0,
						configurable: !0
					}
				}), t && P(e, t)
			}(i, e);
			var t, n, r, a = j(i);

			function i() {
				var e;
				k(this, i);
				for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
				return (e = a.call.apply(a, [this].concat(n))).claim = function(t) {
					t && t.preventDefault(), e.props.closeModal()
				}, e
			}
			return t = i, (n = [{
				key: "render",
				value: function() {
					var e = this.props.oneWayFriendIDs.includes(this.props.gift.userID);
					return o.a.createElement("div", {
						className: d()("modal-body row row--m well--m_p well--pb tac", {
							"modal--founderGift": e
						}),
						id: "modal-sendcash"
					}, !e && o.a.createElement("div", {
						className: "well well--s tac"
					}, o.a.createElement("img", {
						src: "/dist/site/images/modals/sendcash/sendcash-receive.2.png"
					})), o.a.createElement("div", {
						className: "well well--b well--s"
					}, o.a.createElement("div", {
						className: "split split--flag"
					}, o.a.createElement("div", {
						className: "split-cell tal"
					}, o.a.createElement("span", {
						className: "tc-ts tsxs ttu"
					}, "From:")), o.a.createElement("div", {
						className: "split-cell"
					}, o.a.createElement("span", {
						className: "tc-i tsm twb"
					}, this.props.gift.tag && o.a.createElement("span", {
						style: {
							color: "#".concat(this.props.gift.tagColor)
						}
					}, "[", this.props.gift.tag, "]"), this.props.gift.displayName || this.props.gift.username, !!e && " (Nitro Type Founder)"))), o.a.createElement("div", {
						className: "split split--flag"
					}, o.a.createElement("div", {
						className: "split-cell tal"
					}, o.a.createElement("span", {
						className: "tc-ts tsxs ttu"
					}, "A gift of:")), o.a.createElement("div", {
						className: "split-cell"
					}, o.a.createElement("span", {
						className: "tc-emerald tsxxl as-nitro-cash--prefix"
					}, o.a.createElement(b.a, {
						amount: this.props.gift.amount
					}))))), o.a.createElement("form", {
						className: "well well--t"
					}, o.a.createElement("button", {
						className: "btn btn--positive",
						type: "submit",
						onClick: this.claim
					}, "Claim Your Gift")))
				}
			}]) && R(t.prototype, n), r && R(t, r), i
		}(o.a.PureComponent);
		L.defaultProps = {
			oneWayFriendIDs: []
		};
		var M = Object(y.a)(L);

		function U(e) {
			return (U = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}

		function F(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function B(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
			}
		}

		function q(e, t) {
			return (q = Object.setPrototypeOf || function(e, t) {
				return e.__proto__ = t, e
			})(e, t)
		}

		function H(e) {
			var t = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
				} catch (e) {
					return !1
				}
			}();
			return function() {
				var n, r = V(e);
				if (t) {
					var o = V(this).constructor;
					n = Reflect.construct(r, arguments, o)
				} else n = r.apply(this, arguments);
				return G(this, n)
			}
		}

		function G(e, t) {
			return !t || "object" !== U(t) && "function" != typeof t ? function(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}(e) : t
		}

		function V(e) {
			return (V = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
				return e.__proto__ || Object.getPrototypeOf(e)
			})(e)
		}
		var z = function(e) {
				! function(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							writable: !0,
							configurable: !0
						}
					}), t && q(e, t)
				}(i, e);
				var t, n, r, a = H(i);

				function i() {
					var e;
					F(this, i);
					for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
					return (e = a.call.apply(a, [this].concat(n))).onSignupClick = function() {
						m.a.trackEvent("cta click", "signup", "garage-page-callout")
					}, e.onLoginClick = function() {
						m.a.trackEvent("cta click", "login", "garage-page-callout")
					}, e
				}
				return t = i, (n = [{
					key: "render",
					value: function() {
						return o.a.createElement("div", {
							className: "split split--stack dhf"
						}, o.a.createElement("div", {
							className: "split-cell"
						}, o.a.createElement("div", {
							className: "profile-signup"
						}, o.a.createElement("div", {
							className: "profile-signupTitle"
						}, "Sign Up!"), o.a.createElement("p", null, o.a.createElement("span", {
							className: "tc-lemon"
						}, "Don't lose your progress!"), " Create an account to save your winnings!"), o.a.createElement("a", {
							onClick: this.onSignupClick,
							className: "btn btn--tertiary  btn--fw",
							href: "/race"
						}, "Sign Up Now"), o.a.createElement("img", {
							className: "profile-signupCar",
							src: "/dist/site/images/pages/garage/signup-car.png"
						}))), o.a.createElement("div", {
							className: "split-cell tac"
						}, o.a.createElement("div", {
							className: "h5 mbxs"
						}, "Already a member?"), o.a.createElement("a", {
							onClick: this.onLoginClick,
							className: "btn btn--outline btn--thin btn--dark",
							href: "/login"
						}, "Log In Now!")))
					}
				}]) && B(t.prototype, n), r && B(t, r), i
			}(o.a.PureComponent),
			W = n(26);

		function Y(e) {
			return (Y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}

		function X(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
			}
		}

		function K(e, t) {
			return (K = Object.setPrototypeOf || function(e, t) {
				return e.__proto__ = t, e
			})(e, t)
		}

		function J(e) {
			var t = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
				} catch (e) {
					return !1
				}
			}();
			return function() {
				var n, r = Z(e);
				if (t) {
					var o = Z(this).constructor;
					n = Reflect.construct(r, arguments, o)
				} else n = r.apply(this, arguments);
				return Q(this, n)
			}
		}

		function Q(e, t) {
			return !t || "object" !== Y(t) && "function" != typeof t ? function(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}(e) : t
		}

		function Z(e) {
			return (Z = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
				return e.__proto__ || Object.getPrototypeOf(e)
			})(e)
		}
		var $ = function(e) {
				! function(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							writable: !0,
							configurable: !0
						}
					}), t && K(e, t)
				}(i, e);
				var t, n, r, a = J(i);

				function i(e) {
					var t;
					return function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, i), (t = a.call(this, e)).state = {
						showLoading: !1
					}, t.adShowing = !1, t.adEnded = !1, t.libraryAlreadyFailed = !1, t.adShowingTimeout = null, t.adWidth = 734, t.adHeight = 410, t.videoElementId = "mystery-box-ad", t.videoElement = void 0, t.adRef = o.a.createRef(), t.componentDidUpdate = function(e, n, r) {
						!e.isExiting && t.props.isExiting && t.removeVideo()
					}, t.componentDidMount = function() {
						t.props.showAd ? t.showEnthusiastVideoAd() : t.props.claimReward()
					}, t.showEnthusiastVideoAd = function() {
						var e;
						console.log("Enthusiast - add event listeners"), null === (e = window.dataLayer) || void 0 === e || e.push({
							event: "nitroTest"
						});
						var n, r = 0;
						n = setTimeout((function e() {
							var o;
							if (null === (o = window) || void 0 === o || !o.$bos) return r >= 10 ? (console.log("Enthusiast - $bos API variable does not exist. Maximum tries reached. Giving up."), void t.adLibraryFailure()) : (r++, console.log("Enthusiast - $bos API variable does not exist. Trying again. Count: " + r), void(n = setTimeout(e, 50)));
							clearTimeout(n);
							try {
								var a, i, s, c, l, u, p, f;
								null === (a = window.$bos()) || void 0 === a || a.once("requestAd", (function() {
									console.log('Enthusiast - "requestAd" callback fired')
								})), null === (i = window.$bos()) || void 0 === i || i.once("adStart", (function() {
									t.adShowing = !0, console.log('Enthusiast - "adStart" callback fired')
								})), null === (s = window) || void 0 === s || null === (c = s.$bos()) || void 0 === c || c.once("adEnd", (function() {
									t.onAdEnded(), console.log('Enthusiast - "adEnd" callback fired')
								})), null === (l = window) || void 0 === l || null === (u = l.$bos()) || void 0 === u || u.once("playbackerror", (function() {
									t.onAdEnded(), console.log('Enthusiast - "playbackerror" callback fired')
								})), null === (p = window) || void 0 === p || null === (f = p.$bos()) || void 0 === f || f.once("adError", (function() {
									t.onAdEnded(), console.log('Enthusiast - "adError" callback fired')
								}))
							} catch (e) {
								console.log("Enthusiast - exception caught", e)
							}
						}), 0), t.adShowingTimeout = setTimeout(t.checkForAdShowing, 6e3)
					}, t.showFreestarVideoAd = function() {
						var e, n;
						if (null !== (e = window.freestar) && void 0 !== e && null !== (n = e.queue) && void 0 !== n && n.push) {
							var r = t.freestarVideoCallback;
							freestar.queue.push((function() {
								freestar.newStandAlonePlayer({
									placementName: "nitrotype_standalone_video_player",
									callback: r
								})
							})), t.adShowingTimeout = setTimeout(t.checkForAdShowing, 6e3)
						} else t.adLibraryFailure()
					}, t.freestarVideoCallback = function(e, n) {
						console.log("Freestar Debug - callback called!", {
							result: n,
							error: e
						}), e ? (console.log("Freestar Debug - Error!"), t.adLibraryFailure()) : n && (!0 === n.videoAdStarted ? (t.adShowing = !0, console.log("Freestar Debug - video ad is playing")) : !1 === n.videoAdStarted ? (console.log("Freestar Debug - video did not fetch or play attempt at a banner ad will occur"), t.onAdEnded()) : n.displayAdServed ? (console.log("Freestar Debug - banner ad has rendered process is terminated"), t.onAdEnded()) : n.videoAdSkipped ? (console.log("Freestar Debug - video ad was skipped process is terminated"), t.onAdEnded()) : n.completed && (console.log("Freestar Debug - stand alone video process has been completed, and the process is terminated."), t.onAdEnded()))
					}, t.showPlaywireVideoAd = function() {
						return window.Bolt && window.boltEventHandlers.inited ? (t.videoElement = document.getElementById(t.videoElementId), t.videoElement ? (t.videoElement.style.position = "absolute", t.videoElement.style.zIndex = "1000", t.videoElement.style.display = "block", t.videoElement.style.top = (window.innerHeight - 80) / 2 - t.adHeight / 2 + window.scrollY + "px", t.videoElement.style.left = window.innerWidth / 2 - t.adWidth / 2 + "px", t.adShowingTimeout = setTimeout(t.checkForAdShowing, 6e3), void Bolt.requestAd(t.videoElementId, (function(e, n) {
							console.log('[Bolt API] Success: Request Ad: "' + e + '" msg:', n), t.playwireAdCallbacks(), setTimeout((function() {
								Bolt.loadAd(t.videoElementId, !0, (function(e, t) {
									console.log('[Bolt API] Success: Load Ad: "' + e + '" msg: ', t)
								}), (function(e, t) {
									console.log('[Bolt API] Failure: Load Ad: "' + e + '" msg: ', t), m.a.trackEvent("garage", "mystery box", "load ad failed", null, !0)
								}))
							}), 100)
						}), (function(e, n) {
							console.log('[Bolt API] Failure: Request Ad: "' + e + '" msg:', n), m.a.trackEvent("garage", "mystery box", "request failed", null, !0), t.onAdEnded()
						}))) : (t.onAdEnded(), !1)) : t.libraryAlreadyFailed ? void t.adLibraryFailure() : (t.libraryAlreadyFailed = !0, console.log("Giving Bolt extra time to load"), m.a.trackEvent("garage", "mystery box", "bolt extra time", null, !0), void setTimeout((function() {
							return t.showPlaywireVideoAd()
						}), 2e3))
					}, t.adLibraryFailure = function() {
						console.log("Failed to load video library"), m.a.trackEvent("garage", "mystery box", "slow library fail", null, !0), t.onAdEnded()
					}, t.checkForAdShowing = function() {
						t.adShowing || (console.log("Failed to load a video ad"), m.a.trackEvent("garage", "mystery box", "slow ad fail", null, !0), t.onAdEnded())
					}, t.playwireAdCallbacks = function() {
						console.log("boltEventHandlers called", t.videoElementId);
						var e = window.Bolt;
						e.on(t.videoElementId, e.BOLT_AD_REQUEST_START, (function() {
							console.log("BOLT_AD_REQUEST_START called")
						})), e.on(t.videoElementId, e.BOLT_AD_STARTED, (function() {
							t.adShowing = !0, m.a.trackEvent("garage", "mystery box", "ad started success", null, !0), console.log("BOLT_AD_STARTED called")
						})), e.on(t.videoElementId, e.BOLT_AD_ERROR, (function() {
							console.log("BOLT_AD_ERROR called"), m.a.trackEvent("garage", "mystery box", "bolt error fail", null, !0), t.onAdEnded()
						})), e.on(t.videoElementId, e.BOLT_MIDPOINT, (function() {
							console.log("BOLT_MIDPOINT called")
						})), e.on(t.videoElementId, e.BOLT_AD_COMPLETE, (function() {
							console.log("BOLT_AD_COMPLETE called"), t.onAdEnded()
						}))
					}, t.onAdEnded = function() {
						t.adEnded || (t.adEnded = !0, t.removeVideo(), t.setState({
							showLoading: !0
						}), t.props.claimReward())
					}, t.removeVideo = function() {
						if (t.props.showAd) {
							clearTimeout(t.adShowingTimeout), t.videoElement && (t.videoElement.style.display = "none");
							try {
								var e;
								null === (e = document.querySelector("#video_player_1_container")) || void 0 === e || e.remove()
							} catch (e) {
								console.log("Exception removing video", e)
							}
						}
					}, t.close = function() {
						Object(g.t)("purchase"), t.props.closeModal()
					}, t.renderLoading = function() {
						return o.a.createElement("div", {
							className: "modal-body row row--m well--m_p well--pb tac"
						}, o.a.createElement("div", {
							className: "well well--t"
						}, o.a.createElement(W.a, {
							text: "Your reward is being delivered"
						})))
					}, t.renderAd = function() {
						return o.a.createElement("div", {
							className: "modal-body row row--m well--m_p well--pb tac"
						}, o.a.createElement("div", {
							className: "ad well"
						}, o.a.createElement("div", {
							className: "mhc",
							ref: t.adRef,
							style: {
								width: t.adWidth + "px",
								height: t.adHeight + "px"
							},
							id: "mystery-box-ad"
						})), o.a.createElement("p", {
							className: "tc-i twb"
						}, "Your daily reward will be ready in a moment!", o.a.createElement("br", null), "Remove all ads with ", o.a.createElement("a", {
							href: "/store/gold",
							className: "link link--gold "
						}, "Nitro Gold!")))
					}, t.renderReward = function() {
						var e, n, r, a = t.props.reward,
							i = a.value;
						switch (a.type) {
							case "money":
								e = "/dist/site/images/mystery-box/mystery-box-cash.2.png", n = "You Earned $ ".concat(Object(g.g)(i), "!"), r = "is-money";
								break;
							case "experience":
								e = "/dist/site/images/mystery-box/mystery-box-xp.png", n = "You Earned ".concat(Number(i).toLocaleString(), " XP!"), r = "is-xp";
								break;
							case "car":
								e = t.props.getCarUrl(i, !0), n = "You Earned ".concat(t.props.getCarName(i)), r = "is-car";
								break;
							case "nitros":
								e = "/dist/site/images/mystery-box/mystery-box-nitro.png", n = "You Earned ".concat(Number(i).toLocaleString(), " Nitros!"), r = "is-nitros";
								break;
							default:
								return o.a.createElement("div", {
									className: "tc-i"
								}, "There was a problem claiming your mystery box! Please try logging out and back in.")
						}
						var s = d()("lootbox-desc", {
							"as-nitro-cash": "is-money" === r
						});
						return o.a.createElement("div", {
							className: "modal-body row row--m well--m_p well--pb tac"
						}, o.a.createElement("div", {
							className: "well well--b"
						}, o.a.createElement("div", {
							className: d()("lootbox", r)
						}, o.a.createElement("div", {
							className: "lootbox-container"
						}, o.a.createElement("img", {
							className: "lootbox-loot",
							src: e
						}), o.a.createElement("div", {
							className: "lootbox-platform"
						}), o.a.createElement("div", {
							className: "lootbox-glow"
						}), o.a.createElement("div", {
							className: "lootbox-loader"
						})), o.a.createElement("div", {
							className: "well well--b"
						}, o.a.createElement("h3", {
							className: s
						}, n), o.a.createElement("p", {
							className: "tc-i"
						}, "Check back tomorrow for your next Mystery Reward!")), o.a.createElement("button", {
							className: d()("btn btn--primary", {
								"is-disabled": t.isExiting
							}),
							onClick: t.props.closeModal
						}, "Close"))))
					}, t.state.showLoading = !e.showAd, t
				}
				return t = i, (n = [{
					key: "render",
					value: function() {
						return this.props.reward ? this.renderReward() : this.state.showLoading || !this.props.showAd ? this.renderLoading() : this.renderAd()
					}
				}]) && X(t.prototype, n), r && X(t, r), i
			}(o.a.PureComponent),
			ee = Object(y.a)($),
			te = n(125);

		function ne(e, t) {
			return function(e) {
				if (Array.isArray(e)) return e
			}(e) || function(e, t) {
				if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
				var n = [],
					r = !0,
					o = !1,
					a = void 0;
				try {
					for (var i, s = e[Symbol.iterator](); !(r = (i = s.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
				} catch (e) {
					o = !0, a = e
				} finally {
					try {
						r || null == s.return || s.return()
					} finally {
						if (o) throw a
					}
				}
				return n
			}(e, t) || function(e, t) {
				if (!e) return;
				if ("string" == typeof e) return re(e, t);
				var n = Object.prototype.toString.call(e).slice(8, -1);
				"Object" === n && e.constructor && (n = e.constructor.name);
				if ("Map" === n || "Set" === n) return Array.from(e);
				if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return re(e, t)
			}(e, t) || function() {
				throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
			}()
		}

		function re(e, t) {
			(null == t || t > e.length) && (t = e.length);
			for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
			return r
		}

		function oe(e, t, n, r, o, a, i) {
			try {
				var s = e[a](i),
					c = s.value
			} catch (e) {
				return void n(e)
			}
			s.done ? t(c) : Promise.resolve(c).then(r, o)
		}

		function ae(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
			}
		}
		var ie = "/dist/site/images/effects/focuser";
		var se = function() {
			function e(t) {
				var n = this;
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.rate = 1e-4, this.particles = 110, this.density = .01, this.fadeInRate = 2, this.scale = 1, this.canvas = document.createElement("canvas"), this.ctx = this.canvas.getContext("2d"), this.path = [], this.progress = 0, this.init = function() {
					var e, t = (e = regeneratorRuntime.mark((function e(t) {
						var r, o, a, i, s;
						return regeneratorRuntime.wrap((function(e) {
							for (;;) switch (e.prev = e.next) {
								case 0:
									return n.bounds = t.getBoundingClientRect(), n.width = n.bounds.right - n.bounds.left, n.height = n.bounds.bottom - n.bounds.top, n.edge = n.width + n.height, n.perimeter = 2 * n.edge, n.canvas.width = n.width + 60, n.canvas.height = n.height + 60, n.canvas.style.position = "absolute", n.canvas.style.left = "-".concat(30, "px"), n.canvas.style.top = "-".concat(30, "px"), t.parentNode.appendChild(n.canvas), t.style.position = "relative", n.canvas.style.pointerEvents = "none", n.canvas.onclick = function() {
										return t.click()
									}, n.canvas.addEventListener("click", (function() {
										return t.click()
									})), n.surfaces = {
										auras: Object(te.a)(),
										sparkles: Object(te.a)(),
										join: Object(te.a)()
									}, e.next = 18, Promise.all([Object(te.b)("".concat(ie, "/aura.png")), Object(te.b)("".concat(ie, "/sparkle1.png")), Object(te.b)("".concat(ie, "/sparkle2.png"))]);
								case 18:
									r = e.sent, o = ne(r, 3), a = o[0], i = o[1], s = o[2], n.images = {
										aura: a,
										sparkle1: i,
										sparkle2: s
									}, n.reset(), n.render();
								case 26:
								case "end":
									return e.stop()
							}
						}), e)
					})), function() {
						var t = this,
							n = arguments;
						return new Promise((function(r, o) {
							var a = e.apply(t, n);

							function i(e) {
								oe(a, r, o, i, s, "next", e)
							}

							function s(e) {
								oe(a, r, o, i, s, "throw", e)
							}
							i(void 0)
						}))
					});
					return function(e) {
						return t.apply(this, arguments)
					}
				}(), this.stop = function() {
					cancelAnimationFrame(n.nextFrame)
				}, this.render = function() {
					n.progress += n.rate;
					var e = n.progress,
						t = n.path,
						r = n.ctx,
						o = n.canvas,
						a = n.images,
						i = a.aura,
						s = a.sparkle1,
						c = a.sparkle2,
						l = n.surfaces,
						u = l.join,
						p = l.sparkles,
						f = l.auras;
					t.pop();
					var d = n.interpolate(e / n.density % 1);
					t.unshift(d), o.width = u.canvas.width = f.canvas.width = p.canvas.width = o.width, o.height = u.canvas.height = f.canvas.height = p.canvas.height = o.height, n.applyContextAction("setTransform", 1, 0, 0, 1, 0, 0), n.applyContextAction("translate", 30, 30), u.ctx.translate(30, 30), u.ctx.beginPath();
					for (var m = Math.floor(.4 * n.particles), h = 0; h < m; h++) {
						var y = ne(t[h], 5),
							g = y[0],
							v = y[1],
							b = y[2],
							w = y[3],
							E = y[4],
							O = .6 * (n.scale - h / m),
							S = w * O + b * O,
							_ = s.width * O,
							T = s.height * O,
							N = _ / 2,
							C = T / 2;
						n.applyContextAction("translate", g, v), n.applyContextAction("rotate", S), n.applyContextAction("translate", -N, -C);
						var A = h < n.fadeInRate ? h / n.fadeInRate : Math.min(1, O + .4);
						f.ctx.globalAlpha = A, p.ctx.globalAlpha = A, f.ctx.drawImage(i, 0, 0, _, T), p.ctx.drawImage(0 === E ? s : c, 0, 0, _, T), n.applyContextAction("translate", N, C), n.applyContextAction("rotate", -S), n.applyContextAction("translate", -g, -v)
					}
					r.globalAlpha = .7, r.drawImage(f.canvas, 0, 0), r.globalAlpha = 1, r.globalCompositeOperation = "overlay", r.drawImage(p.canvas, 0, 0), r.globalCompositeOperation = "color-dodge", r.drawImage(p.canvas, 0, 0), n.nextFrame = requestAnimationFrame(n.render)
				}, Object.assign(this, t)
			}
			var t, n, r;
			return t = e, (n = [{
				key: "applyContextAction",
				value: function(e) {
					for (var t, n, r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) o[a - 1] = arguments[a];
					(t = this.surfaces.auras.ctx)[e].apply(t, o), (n = this.surfaces.sparkles.ctx)[e].apply(n, o)
				}
			}, {
				key: "reset",
				value: function() {
					this.progress = 0, this.path.splice(0, this.path.length);
					for (var e = 0; e < this.particles; e++) {
						this.progress += this.rate;
						var t = this.interpolate(this.progress / this.density % 1);
						this.path.unshift(t)
					}
				}
			}, {
				key: "interpolate",
				value: function(e) {
					var t = this.perimeter,
						n = this.width,
						r = this.height,
						o = this.edge,
						a = t * e,
						i = a < n ? [a, 0] : a < n + r ? [n, a - n] : a < o + n ? [n - (a - o), r] : [0, r - (a - (o + n))];
					return i[2] = Math.random() * (2 * Math.PI), i[3] = -Math.random() * (2 * Math.PI), i[4] = Math.round(Math.random()), i
				}
			}]) && ae(t.prototype, n), r && ae(t, r), e
		}();

		function ce(e) {
			return (ce = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}

		function le(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function ue(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
			}
		}

		function pe(e, t) {
			return (pe = Object.setPrototypeOf || function(e, t) {
				return e.__proto__ = t, e
			})(e, t)
		}

		function fe(e) {
			var t = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
				} catch (e) {
					return !1
				}
			}();
			return function() {
				var n, r = me(e);
				if (t) {
					var o = me(this).constructor;
					n = Reflect.construct(r, arguments, o)
				} else n = r.apply(this, arguments);
				return de(this, n)
			}
		}

		function de(e, t) {
			return !t || "object" !== ce(t) && "function" != typeof t ? function(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}(e) : t
		}

		function me(e) {
			return (me = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
				return e.__proto__ || Object.getPrototypeOf(e)
			})(e)
		}
		var he = function(e) {
			! function(e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						writable: !0,
						configurable: !0
					}
				}), t && pe(e, t)
			}(i, e);
			var t, n, r, a = fe(i);

			function i() {
				var e;
				le(this, i);
				for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
				return (e = a.call.apply(a, [this].concat(n))).state = {
					showingMysteryBoxModal: !1
				}, e.claimNowButtonRef = o.a.createRef(), e.closeModal = function() {
					e.props.clearReward(), e.props.reward || m.a.trackEvent("garage", "mystery box", "close"), e.setState({
						showingMysteryBoxModal: !1
					})
				}, e.canClaimReward = function() {
					return e.props.rewardCountdown < Date.now() / 1e3
				}, e.claimReward = function() {
					e.canClaimReward() && !e.state.showingMysteryBoxModal && (m.a.trackEvent("garage", "mystery box", "claim"), e.setState({
						showingMysteryBoxModal: !0
					}))
				}, e.parseRewardCountdown = function(e) {
					return p()(1e3 * e).fromNow(!0)
				}, e
			}
			return t = i, (n = [{
				key: "componentDidMount",
				value: function() {
					this.canClaimReward() && (new se).init(this.claimNowButtonRef.current)
				}
			}, {
				key: "componentDidUpdate",
				value: function(e, t, n) {
					this.props.reward && this.props.reward !== e.reward && this.setState({
						reward: this.props.reward
					})
				}
			}, {
				key: "render",
				value: function() {
					var e = this.parseRewardCountdown(this.props.rewardCountdown),
						t = this.canClaimReward(),
						n = d()("mysteryBox", {
							"is-coming": !t,
							"is-here": t
						});
					return o.a.createElement("div", {
						className: n
					}, o.a.createElement("div", {
						className: "mysteryBox-box"
					}, t ? o.a.createElement("img", {
						src: "/dist/site/images/mystery-box/mystery-box.png",
						className: "mysteryBox-boxImg"
					}) : o.a.createElement("img", {
						src: "/dist/site/images/mystery-box/mystery-box-inactive.png",
						className: "mysteryBox-boxImg"
					})), o.a.createElement("div", {
						className: "mysteryBox-content"
					}, t && o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
						className: "mysteryBox-title"
					}, "Mystery Box"), o.a.createElement("div", {
						className: "mysteryBox-arrival"
					}, "is HERE!"), o.a.createElement("div", {
						className: "mysteryBox-action"
					}, o.a.createElement("div", {
						className: "focus-effect-container"
					}, o.a.createElement("button", {
						className: "btn btn--gold btn--thin btn--fw",
						onClick: this.claimReward,
						ref: this.claimNowButtonRef
					}, "Claim Now!")))) || o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
						className: "mysteryBox-title"
					}, "Mystery Box"), o.a.createElement("div", {
						className: "mysteryBox-arrival"
					}, "Is arriving in..."), o.a.createElement("div", {
						className: "mysteryBox-action"
					}, o.a.createElement("button", {
						className: "btn btn--gold btn--fw mysteryBox-btn is-disabled"
					}, e)))), o.a.createElement(ee, {
						visible: this.state.showingMysteryBoxModal,
						teardown: this.closeModal,
						title: "Daily Reward",
						theme: "mysterybox",
						reward: this.state.reward,
						getCarUrl: this.props.getCarUrl,
						getCarName: this.props.getCarName,
						claimReward: this.props.claimReward,
						showAd: !1,
						size: "m"
					}))
				}
			}]) && ue(t.prototype, n), r && ue(t, r), i
		}(o.a.PureComponent);

		function ye(e) {
			return (ye = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}

		function ge(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function ve(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
			}
		}

		function be(e, t) {
			return (be = Object.setPrototypeOf || function(e, t) {
				return e.__proto__ = t, e
			})(e, t)
		}

		function we(e) {
			var t = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
				} catch (e) {
					return !1
				}
			}();
			return function() {
				var n, r = Oe(e);
				if (t) {
					var o = Oe(this).constructor;
					n = Reflect.construct(r, arguments, o)
				} else n = r.apply(this, arguments);
				return Ee(this, n)
			}
		}

		function Ee(e, t) {
			return !t || "object" !== ye(t) && "function" != typeof t ? function(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}(e) : t
		}

		function Oe(e) {
			return (Oe = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
				return e.__proto__ || Object.getPrototypeOf(e)
			})(e)
		}
		var Se = function(e) {
				! function(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							writable: !0,
							configurable: !0
						}
					}), t && be(e, t)
				}(i, e);
				var t, n, r, a = we(i);

				function i() {
					var e;
					ge(this, i);
					for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
					return (e = a.call.apply(a, [this].concat(n))).state = {
						invitedToTeam: !1,
						clickedRequestFriend: !1
					}, e.inviteToTeam = function() {
						e.props.inviteToTeam(e.props.userID, e.props.ownTeamID), e.setState({
							invitedToTeam: !0
						})
					}, e.requestFriend = function() {
						e.props.numberOfFriends >= e.props.friendLimits ? alert("Sorry, but you've hit your max limit of ".concat(e.props.friendLimits, " friends.")) : (e.props.requestFriend(e.props.otherRacerProfile), e.setState({
							clickedRequestFriend: !0
						}))
					}, e.renderSendCashButton = function() {
						if (e.props.loggedIn) {
							var t = "gold" === e.props.ownMembership;
							return o.a.createElement("li", {
								className: d()("list-item", {
									"tooltip tooltip--a tooltip--s tooltip--c tooltip--bottom": !t
								}),
								"data-ttcopy": "You must be a Nitro Gold member to send cash to other players!"
							}, o.a.createElement("button", {
								onClick: e.props.openSendCashModal,
								className: d()("btn btn--top btn--tertiary btn--xs btn--thinner"),
								disabled: !t
							}, o.a.createElement("svg", {
								className: "icon btn-icon icon-sendcash--s"
							}, o.a.createElement("use", {
								xmlnsXlink: "http://www.w3.org/1999/xlink",
								xlinkHref: "/dist/site/images/icons/icons.css.svg#icon-sendcash"
							})), "Send Cash"))
						}
					}, e.renderFriendButtonArea = function() {
						if (e.props.friends.includes(e.props.userID)) return o.a.createElement("li", {
							className: "list-item"
						}, o.a.createElement("div", {
							className: d()("profile-friendBadge")
						}, o.a.createElement("img", {
							src: "/dist/site/images/pages/garage/friends-lg.png"
						}), "Friend"));
						if (e.props.allowFriendRequests) {
							var t = e.props.requestedFriends.includes(e.props.userID);
							return o.a.createElement("li", {
								className: "list-item"
							}, o.a.createElement("button", {
								onClick: e.requestFriend,
								disabled: t,
								className: d()("btn btn--top btn--primary btn--xs btn--thinner", {
									"is-success": t,
									"is-animating": e.state.clickedRequestFriend
								})
							}, o.a.createElement("svg", {
								className: d()("icon btn-icon", {
									"icon-adduser--s": !t
								}, {
									"icon-circlecheck--s": t
								})
							}, o.a.createElement("use", {
								xmlnsXlink: "http://www.w3.org/1999/xlink",
								xlinkHref: "/dist/site/images/icons/icons.css.svg#icon-".concat(t ? "circlecheck" : "adduser")
							})), t ? "Friend Request Sent" : "Add Friend"))
						}
						return o.a.createElement("li", {
							className: "list-item"
						}, o.a.createElement("div", {
							className: "btn btn--light btn--top btn--outline btn--thinner btn--xs is-disabled"
						}, o.a.createElement("svg", {
							className: "icon icon-forbidden--s btn-icon"
						}, o.a.createElement("use", {
							xmlnsXlink: "http://www.w3.org/1999/xlink",
							xlinkHref: "/dist/site/images/icons/icons.css.svg#icon-forbidden"
						})), "Not Accepting Friends"))
					}, e.storeUserInfoForUpgrade = function(t) {
						t.preventDefault();
						var n = t.currentTarget.href;
						e.props.username, e.props.displayName, e.props.title, e.props.carID, e.props.tag, e.props.tagColor, e.props.carHueAngle;
						window.__navigateTo(n)
					}, e
				}
				return t = i, (n = [{
					key: "render",
					value: function() {
						var e;
						return e = this.props.playerTeamID && ["captain", "officer"].includes(this.props.teamRole) && !this.props.teamID && this.props.lookingForTeam && !this.props.teammates.includes(this.props.userID) ? o.a.createElement("li", {
							className: "list-item"
						}, o.a.createElement("button", {
							onClick: this.inviteToTeam,
							disabled: this.state.invitedToTeam,
							className: d()("btn btn--xs btn--light btn--top btn--thinner", {
								"is-disabled": this.state.invitedToTeam
							})
						}, o.a.createElement("svg", {
							className: d()("icon btn-icon", {
								"icon-addteam--s": !this.state.invitedToTeam
							}, {
								"icon-circlecheck--s": this.state.invitedToTeam
							})
						}, o.a.createElement("use", {
							xmlnsXlink: "http://www.w3.org/1999/xlink",
							xlinkHref: "/dist/site/images/icons/icons.css.svg#icon-".concat(this.state.invitedToTeam ? "circlecheck" : "addteam")
						})), this.state.invitedToTeam ? "Team Invite Sent" : "Invite to your Team")) : null, o.a.createElement("ul", {
							className: "list list--inline list--start list--xs profile-otherActions"
						}, this.renderFriendButtonArea(), e, this.renderSendCashButton(), "gold" !== this.props.membership ? o.a.createElement("li", {
							className: "list-item"
						}, o.a.createElement("a", {
							href: "/store/gold#".concat(this.props.username),
							className: "btn btn--top btn--gold btn--xs btn--thinner"
						}, o.a.createElement("svg", {
							className: "icon icon-gift--s btn-icon"
						}, o.a.createElement("use", {
							xmlnsXlink: "http://www.w3.org/1999/xlink",
							xlinkHref: "/dist/site/images/icons/icons.css.svg#icon-gift"
						})), "Give Nitro Gold")) : null)
					}
				}]) && ve(t.prototype, n), r && ve(t, r), i
			}(o.a.PureComponent),
			_e = n(21),
			Te = function(e) {
				var t = 2 * Math.PI * 80,
					n = e.avgSpeed,
					r = e.highestSpeed;
				r < n && (r = n);
				var a = Math.round(n / r * 100),
					i = "".concat(2.98 * a - 59 || -59, "deg"),
					s = 83 * t / 100,
					c = t * (.83 * a / 100) || 0;
				return o.a.createElement(o.a.Fragment, null, o.a.createElement(_e.b, null, o.a.createElement("div", {
					key: "speedometer",
					className: "speedometer",
					style: {
						"--rotatedeg": i
					}
				}, o.a.createElement("svg", {
					className: "speedometer-dial",
					version: "1.1",
					xmlnsXlink: "http://www.w3.org/2000/svg"
				}, o.a.createElement("circle", {
					className: "speedometer-stroke speedometer-stroke--bg",
					cx: "50%",
					cy: "50%",
					r: 80,
					strokeDasharray: "".concat(s, " ").concat(t)
				}), o.a.createElement("circle", {
					className: "speedometer-stroke speedometer-stroke--shadow",
					cx: "50%",
					cy: "50%",
					r: 80,
					strokeDasharray: "".concat(c, " ").concat(t)
				}), o.a.createElement("circle", {
					className: "speedometer-stroke speedometer-stroke--fill",
					cx: "50%",
					cy: "50%",
					r: 80,
					strokeDasharray: "".concat(c, " ").concat(t)
				}), o.a.createElement("line", {
					className: "speedometer-needle",
					x1: "17%",
					y1: "50%",
					x2: "26%",
					y2: "50%"
				})), o.a.createElement("div", {
					className: "speedometer-bursts"
				}, o.a.createElement("div", {
					className: "speedometer-burst"
				}), o.a.createElement("div", {
					className: "speedometer-burst"
				})), o.a.createElement("div", {
					className: "speedometer-text speedometer-top"
				}, o.a.createElement("div", {
					className: "tsxxl twb tlh-1"
				}, n), o.a.createElement("div", {
					className: "tsxs ttu"
				}, "AVG WPM")), o.a.createElement("div", {
					className: "speedometer-text speedometer-avg"
				}, o.a.createElement("div", {
					className: "tsl twb tlh-1"
				}, o.a.createElement("span", null, r)), o.a.createElement("div", {
					className: "tsxs ttu"
				}, "TOP WPM"))), o.a.createElement("div", {
					key: "total-races",
					className: "well well--t well--xs tac"
				}, o.a.createElement("div", {
					className: "profile-totalRaces"
				}, e.racesPlayed ? e.racesPlayed.toLocaleString() : 0, o.a.createElement("span", {
					className: "tss plxxs"
				}, "Total Races")))), o.a.createElement(_e.a, null, o.a.createElement("div", {
					key: "total-races",
					className: "profile-totalRaces profile-totalRaces--math"
				}, o.a.createElement("div", {
					className: "profile-totalRacesInterior"
				}, o.a.createElement("div", {
					className: "tsxs ttu mbxxs"
				}, "Total Matches"), o.a.createElement("div", {
					className: "tsxl twb"
				}, e.racesPlayed ? e.racesPlayed.toLocaleString() : 0)), o.a.createElement("div", {
					className: "profile-totalRacesArrows"
				}, o.a.createElement("svg", {
					className: "icon profile-totalRacesArrow"
				}, o.a.createElement("use", {
					xmlnsXlink: "http://www.w3.org/1999/xlink",
					xlinkHref: "/dist/site/images/icons/icons.css.svg#icon-angle-up"
				})), o.a.createElement("svg", {
					className: "icon profile-totalRacesArrow"
				}, o.a.createElement("use", {
					xmlnsXlink: "http://www.w3.org/1999/xlink",
					xlinkHref: "/dist/site/images/icons/icons.css.svg#icon-angle-up"
				})), o.a.createElement("svg", {
					className: "icon profile-totalRacesArrow"
				}, o.a.createElement("use", {
					xmlnsXlink: "http://www.w3.org/1999/xlink",
					xlinkHref: "/dist/site/images/icons/icons.css.svg#icon-angle-up"
				}))))))
			},
			Ne = o.a.memo(Te),
			Ce = n(31),
			Ae = n(51),
			Ie = n(144),
			ke = n(46),
			Re = n(23);

		function Pe(e) {
			return (Pe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}

		function je(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function De(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
			}
		}

		function xe(e, t) {
			return (xe = Object.setPrototypeOf || function(e, t) {
				return e.__proto__ = t, e
			})(e, t)
		}

		function Le(e) {
			var t = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
				} catch (e) {
					return !1
				}
			}();
			return function() {
				var n, r = Ue(e);
				if (t) {
					var o = Ue(this).constructor;
					n = Reflect.construct(r, arguments, o)
				} else n = r.apply(this, arguments);
				return Me(this, n)
			}
		}

		function Me(e, t) {
			return !t || "object" !== Pe(t) && "function" != typeof t ? function(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}(e) : t
		}

		function Ue(e) {
			return (Ue = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
				return e.__proto__ || Object.getPrototypeOf(e)
			})(e)
		}
		var Fe = function(e) {
			! function(e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						writable: !0,
						configurable: !0
					}
				}), t && xe(e, t)
			}(i, e);
			var t, n, r, a = Le(i);

			function i() {
				var e;
				je(this, i);
				for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
				return (e = a.call.apply(a, [this].concat(n))).goToSeasonPage = function() {
					location.href = "/season"
				}, e.goToUpgradePage = function(e) {
					e.stopPropagation(), location.href = "/store/gold"
				}, e
			}
			return t = i, (n = [{
				key: "render",
				value: function() {
					var e, t = this.props.reward.free,
						n = this.props.reward.reward,
						r = this.props,
						a = r.user,
						i = r.loot,
						s = n.type,
						c = n.value;
					"loot" === s && (s = null === (e = i.find((function(e) {
						return parseInt(e.lootID) === parseInt(c)
					}))) || void 0 === e ? void 0 : e.type);
					var l, u, p = this.props.getItemRarity({
							id: c,
							type: s
						}),
						f = "basic" === a.membership && !t && o.a.createElement("div", {
							className: "season-reward-mini-preview--locked"
						}, o.a.createElement("div", {
							onClick: this.goToUpgradePage,
							className: "tooltip--season tooltip--xs tooltip--c",
							"data-ttcopy": "Upgrade to Nitro Gold to Unlock!"
						}, o.a.createElement("svg", {
							className: "icon icon-lock"
						}, o.a.createElement("use", {
							xmlnsXlink: "http://www.w3.org/1999/xlink",
							xlinkHref: "/dist/site/images/icons/icons.css.svg#icon-lock"
						}))));
					if ("money" === s) l = o.a.createElement("div", {
						className: "as-nitro-cash--prefix"
					}, "$", Object(g.g)(c)), u = o.a.createElement("img", {
						src: "/dist/site/images/pages/race/race-results-prize-cash.2.png",
						className: "season-reward-mini-previewImg"
					});
					else if ("car" === s) l = "car", u = o.a.createElement("img", {
						src: this.props.getCarUrl(parseInt(c), !1),
						className: "season-reward-mini-previewImg"
					});
					else {
						var d, m = i.find((function(e) {
								return parseInt(e.lootID) === parseInt(c)
							})),
							h = null == m || null === (d = m.options) || void 0 === d ? void 0 : d.src;
						l = m.type, h ? u = o.a.createElement("img", {
							src: h,
							className: "season-reward-mini-previewImg"
						}) : "title" === s && (u = '"'.concat(m.name, '"'))
					}
					return o.a.createElement("div", {
						className: "season-reward-mini-preview season-reward-mini-preview--".concat(s)
					}, f, o.a.createElement("a", {
						className: "season-reward-mini-preview",
						href: "/season"
					}, o.a.createElement("div", {
						className: "season-reward-mini-preview--frame"
					}, o.a.createElement(Re.a, {
						type: "frame",
						size: "small",
						rarity: p
					}, o.a.createElement("div", {
						className: "season-reward-mini-preview--preview"
					}, u), o.a.createElement("div", {
						className: "season-reward-mini-preview--label"
					}, l)))))
				}
			}]) && De(t.prototype, n), r && De(t, r), i
		}(o.a.PureComponent);

		function Be(e) {
			return (Be = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}

		function qe(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function He(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
			}
		}

		function Ge(e, t) {
			return (Ge = Object.setPrototypeOf || function(e, t) {
				return e.__proto__ = t, e
			})(e, t)
		}

		function Ve(e) {
			var t = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
				} catch (e) {
					return !1
				}
			}();
			return function() {
				var n, r = We(e);
				if (t) {
					var o = We(this).constructor;
					n = Reflect.construct(r, arguments, o)
				} else n = r.apply(this, arguments);
				return ze(this, n)
			}
		}

		function ze(e, t) {
			return !t || "object" !== Be(t) && "function" != typeof t ? function(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}(e) : t
		}

		function We(e) {
			return (We = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
				return e.__proto__ || Object.getPrototypeOf(e)
			})(e)
		}
		var Ye = function(e) {
				! function(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							writable: !0,
							configurable: !0
						}
					}), t && Ge(e, t)
				}(i, e);
				var t, n, r, a = Ve(i);

				function i() {
					return qe(this, i), a.apply(this, arguments)
				}
				return t = i, (n = [{
					key: "renderNextReward",
					value: function(e) {
						return o.a.createElement("div", {
							className: "season-progress-widget--next-reward"
						}, o.a.createElement("div", {
							className: "season-progress-widget--next-reward--display"
						}, o.a.createElement(Fe, {
							reward: e,
							user: this.props.user,
							getCarUrl: this.props.getCarUrl,
							getItemRarity: this.props.getItemRarity,
							loot: this.props.loot
						})))
					}
				}, {
					key: "render",
					value: function() {
						var e = this.props,
							t = e.progress,
							n = e.user,
							r = n.loggedIn,
							a = t.nextReward,
							i = t.currentLevelXP,
							s = t.requiredXP,
							c = Math.max(5, Math.floor(100 * t.percentComplete)) || 5,
							l = this.props.calculateInfinityTier(n.level),
							u = Math.floor(s / 1e3);
						return o.a.createElement("div", {
							className: "season-progress-widget"
						}, o.a.createElement("div", {
							className: "season-progress-widget--info"
						}, o.a.createElement("div", {
							className: "season-progress-widget--title"
						}, "Season Progress"), r && o.a.createElement("div", {
							className: "season-progress-widget--current-xp"
						}, i.toLocaleString(), " / ", u, "k XP"), o.a.createElement("div", {
							className: "season-progress-widget--current-level"
						}, o.a.createElement("div", {
							className: "season-progress-widget--current-level--prefix"
						}, "Level"), o.a.createElement("div", {
							className: "season-progress-widget--current-level--number"
						}, l.isInfinityLevel && "∞", Number(l.level).toLocaleString())), o.a.createElement("div", {
							className: "season-progress-widget--level-progress"
						}, o.a.createElement("div", {
							className: "season-progress-widget--level-progress-bar",
							style: {
								width: "".concat(c, "%")
							}
						}))), this.props.loggedIn && a && this.renderNextReward(a))
					}
				}]) && He(t.prototype, n), r && He(t, r), i
			}(o.a.PureComponent),
			Xe = n(113),
			Ke = n(95),
			Je = n(40);

		function Qe(e) {
			return (Qe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}

		function Ze() {
			return (Ze = Object.assign || function(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = arguments[t];
					for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
				}
				return e
			}).apply(this, arguments)
		}

		function $e(e) {
			return function(e) {
				if (Array.isArray(e)) return et(e)
			}(e) || function(e) {
				if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
			}(e) || function(e, t) {
				if (!e) return;
				if ("string" == typeof e) return et(e, t);
				var n = Object.prototype.toString.call(e).slice(8, -1);
				"Object" === n && e.constructor && (n = e.constructor.name);
				if ("Map" === n || "Set" === n) return Array.from(e);
				if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return et(e, t)
			}(e) || function() {
				throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
			}()
		}

		function et(e, t) {
			(null == t || t > e.length) && (t = e.length);
			for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
			return r
		}

		function tt(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function nt(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
			}
		}

		function rt(e, t) {
			return (rt = Object.setPrototypeOf || function(e, t) {
				return e.__proto__ = t, e
			})(e, t)
		}

		function ot(e) {
			var t = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
				} catch (e) {
					return !1
				}
			}();
			return function() {
				var n, r = st(e);
				if (t) {
					var o = st(this).constructor;
					n = Reflect.construct(r, arguments, o)
				} else n = r.apply(this, arguments);
				return at(this, n)
			}
		}

		function at(e, t) {
			return !t || "object" !== Qe(t) && "function" != typeof t ? it(e) : t
		}

		function it(e) {
			if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return e
		}

		function st(e) {
			return (st = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
				return e.__proto__ || Object.getPrototypeOf(e)
			})(e)
		}
		var ct = function(e) {
			! function(e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						writable: !0,
						configurable: !0
					}
				}), t && rt(e, t)
			}(i, e);
			var t, n, r, a = ot(i);

			function i() {
				var e;
				tt(this, i);
				for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
				return (e = a.call.apply(a, [this].concat(n))).state = {
					showingReportPopup: !1,
					showingSendCashModal: !1,
					playerReported: !1,
					claimedCashGifts: [],
					carEasterEggClicks: 1
				}, e.getCarParams = function() {
					var t, n, r, o = 0;
					return e.props.otherRacer && e.props.otherRacerActiveCarID ? (e.props.cars.forEach((function(t) {
						t[0] === e.props.otherRacerActiveCarID && (o = t[2])
					})), t = e.props.otherRacerActiveCarID, n = e.props.getCarUrl(e.props.otherRacerActiveCarID, !0, o), r = e.props.getCarName(e.props.otherRacerActiveCarID)) : (t = e.props.carID, n = e.props.getCarUrl(e.props.carID, !0, e.props.carHueAngle), r = e.props.getCarName(e.props.carID), o = e.props.carHueAngle), {
						carID: t,
						carImageSrc: n,
						carName: r,
						carHueAngle: o
					}
				}, e.openSendCashModal = function() {
					e.setState({
						showingSendCashModal: !0
					})
				}, e.closeSendCashModal = function() {
					e.props.clearSendCashState(), e.setState({
						showingSendCashModal: !1
					})
				}, e.showReportPlayerPopup = function() {
					e.setState({
						showingReportPopup: !0
					})
				}, e.hideReportPlayerPopup = function() {
					e.setState({
						showingReportPopup: !1
					})
				}, e.setPendingCashGiftReceived = function(t, n) {
					e.setState((function(e) {
						return {
							claimedCashGifts: [].concat($e(e.claimedCashGifts), [n])
						}
					})), e.props.setCashGiftReceived(t.amount), Object(g.t)("purchase")
				}, e.handleCarEasterEggClick = function() {
					e.setState({
						carEasterEggClicks: e.state.carEasterEggClicks + 1
					})
				}, e.reportPlayer = function() {
					e.props.reportPlayer(e.props.userID), e.setState({
						showingReportPopup: !1,
						playerReported: !0
					})
				}, e.onRaceNowClick = function(t) {
					e.props.shouldShowEventModal && (t.preventDefault(), e.props.setEventModalVisibility(!0)), m.a.trackEvent("cta click", "race", "garage-page")
				}, e.onRaceNowWithFriendsClick = function() {
					m.a.trackEvent("cta click", "friend race", "garage-page")
				}, e.onLoginClick = function() {
					m.a.trackEvent("cta click", "login", "garage-page-profile")
				}, e.onSignupClick = function() {
					m.a.trackEvent("cta click", "signup", "garage-page-profile")
				}, e.renderSeasonProgress = function() {
					return e.props.currentSeasonProgress && o.a.createElement(Ye, Ze({}, e.props, {
						forSelf: !e.props.otherRacerProfile,
						progress: e.props.currentSeasonProgress,
						loot: e.props.loot,
						user: e.props.user,
						getCarUrl: e.props.getCarUrl,
						getItemRarity: e.props.getItemRarity,
						loggedIn: e.props.loggedIn
					}))
				}, e.renderHeaderMenu = function() {
					return e.isViewingSelf ? o.a.createElement("div", {
						className: "bucket bucket--c bucket--xxs tbs tar profile-otherActions well tc-i"
					}, o.a.createElement("div", {
						className: "bucket-media"
					}, o.a.createElement("svg", {
						className: "icon icon-warning"
					}, o.a.createElement("use", {
						xmlnsXlink: "http://www.w3.org/1999/xlink",
						xlinkHref: "/dist/site/images/icons/icons.css.svg#icon-warning"
					}))), o.a.createElement("div", {
						className: "bucket-content"
					}, o.a.createElement("div", {
						className: "tsxs tlh-1 tsi"
					}, "THIS IS YOUR PUBLIC PROFILE"))) : o.a.createElement(Se, {
						loggedIn: e.props.loggedIn,
						friends: e.props.friends,
						teammates: e.props.teammates,
						userID: e.props.userID,
						allowFriendRequests: e.props.allowFriendRequests,
						lookingForTeam: e.props.lookingForTeam,
						teamID: e.props.teamID,
						membership: e.props.membership,
						profileViews: e.props.profileViews,
						requestedFriends: e.props.requestedFriends,
						ownMembership: e.props.ownMembership,
						openSendCashModal: e.openSendCashModal,
						teamRole: e.props.teamRole,
						requestFriend: e.props.requestFriend,
						playerTeamID: e.props.playerTeamID,
						inviteToTeam: e.props.inviteToTeam,
						friendLimits: e.props.friendLimits,
						numberOfFriends: e.props.numberOfFriends,
						ownTeamID: e.props.ownTeamID,
						username: e.props.username,
						displayName: e.props.displayName,
						title: e.props.title,
						carID: e.props.carID,
						tag: e.props.tag,
						tagColor: e.props.tagColor,
						carHueAngle: e.props.carHueAngle,
						otherRacerProfile: e.props.otherRacerProfile
					})
				}, e.renderLevelArea = function() {}, e.renderPrimaryActions = function() {
					return e.props.otherRacer ? e.renderOtherRacerPrimaryActions() : e.props.loggedIn ? e.renderCurrentPlayerPrimaryActions() : e.renderGuestPrimaryActions()
				}, e.renderReportPlayerArea = function() {
					return e.state.playerReported ? o.a.createElement("div", null, o.a.createElement("div", {
						className: "bucket bucket--c bucket--xxs tc-brick dif"
					}, o.a.createElement("div", {
						className: "bucket-media"
					}, o.a.createElement("svg", {
						className: "icon icon-warning"
					}, o.a.createElement("use", {
						xmlnsXlink: "http://www.w3.org/1999/xlink",
						xlinkHref: "/dist/site/images/icons/icons.css.svg#icon-check"
					}))), o.a.createElement("div", {
						className: "bucket-content tss twb"
					}, "Reported. Thank you!"))) : e.props.loggedIn && e.props.ownUsername !== e.props.username ? o.a.createElement("div", null, o.a.createElement("button", {
						className: "link link--error link--icon link--xs twb",
						onClick: e.showReportPlayerPopup
					}, o.a.createElement("svg", {
						className: "icon icon-warning icon--n-4 icon--nt mrxxs"
					}, o.a.createElement("use", {
						xmlnsXlink: "http://www.w3.org/1999/xlink",
						xlinkHref: "/dist/site/images/icons/icons.css.svg#icon-warning"
					})), "Report Player Name")) : void 0
				}, e.renderSquareAd = function() {
					return o.a.createElement("div", {
						className: "profile-ad well well--b"
					}, o.a.createElement(Ce.a, {
						unit: "contentSquare",
						adStyle: "sq",
						page: "garage"
					}))
				}, e.renderDailyChallenges = function() {
					var t;
					return e.props.loggedIn && null !== (t = e.props.dailyChallenges) && void 0 !== t && t.length ? o.a.createElement(_e.b, null, o.a.createElement("div", {
						className: "profile-dailyChallenges card card--open card--d card--grit card--shadow-l"
					}, o.a.createElement(Xe.a, {
						dailyChallenges: e.props.dailyChallenges
					}))) : null
				}, e.renderAside = function() {
					var t = it(e).shouldDisplayAd,
						n = Date.now() / 1e3,
						r = e.props.currentSeason,
						a = (null == r ? void 0 : r.startStamp) <= n;
					return o.a.createElement(o.a.Fragment, null, e.props.loggedIn && o.a.createElement("div", null, e.renderRenewalNotice()), o.a.createElement("div", null, t && e.renderSquareAd(), a && e.renderDailyChallenges()), o.a.createElement("div", null, !e.props.loggedIn && !e.props.otherRacer && o.a.createElement(z, null)))
				}, e
			}
			return t = i, (n = [{
				key: "componentDidMount",
				value: function() {
					this.props.loggedIn && !this.props.otherRacer && this.props.getPendingCashGifts()
				}
			}, {
				key: "isViewingSelf",
				get: function() {
					return this.props.ownUsername === this.props.username
				}
			}, {
				key: "isGarageView",
				get: function() {
					return !(this.isPublicProfileView || this.props.otherRacer)
				}
			}, {
				key: "isPublicProfileView",
				get: function() {
					return this.props.loggedIn && this.props.otherRacer
				}
			}, {
				key: "shouldDisplayAd",
				get: function() {
					return !this.props.loggedIn && this.props.otherRacer || this.props.otherRacer && "gold" !== this.props.ownMembership || !this.props.otherRacer && "gold" !== this.props.membership && this.props.loggedIn
				}
			}, {
				key: "renderRaceNowButton",
				value: function() {
					return o.a.createElement(Je.a, {
						onClick: this.onRaceNowClick,
						icon: !0,
						className: "btn btn--primary btn--fw animate--iconSlam well well--b well--s"
					})
				}
			}, {
				key: "renderRaceWithFriendsButton",
				value: function() {
					return o.a.createElement(Je.a, {
						type: "friend-race",
						icon: !0,
						className: "btn btn--light btn--outline btn--fw animate--iconSlam well well--b well--s",
						onClick: this.onRaceNowWithFriendsClick
					}, o.a.createElement(_e.b, null, "Race With Friends"), o.a.createElement(_e.a, null, "Play With Friends"))
				}
			}, {
				key: "renderOtherRacerPrimaryActions",
				value: function() {
					return o.a.createElement("div", null, o.a.createElement(Ne, {
						site: this.props.site,
						avgSpeed: this.props.avgSpeed,
						highestSpeed: this.props.highestSpeed,
						racesPlayed: this.props.racesPlayed
					}))
				}
			}, {
				key: "renderCurrentPlayerPrimaryActions",
				value: function() {
					return o.a.createElement("div", {
						className: "profile--content--primary-actions"
					}, this.renderRaceNowButton(), this.renderRaceWithFriendsButton())
				}
			}, {
				key: "renderMysteryBox",
				value: function() {
					return this.props.loggedIn && !this.props.otherRacer && o.a.createElement("div", {
						className: "profile--content--mystery-box"
					}, o.a.createElement(he, {
						membership: "",
						claimReward: this.props.claimReward,
						rewardCountdown: this.props.rewardCountdown,
						reward: this.props.reward,
						clearReward: this.props.clearReward,
						getCarUrl: this.props.getCarUrl,
						getCarName: this.props.getCarName,
						splitTestId: this.props.splitTestId,
						mysteryBoxes: this.props.mysteryBoxes,
						userID: this.props.userID
					}))
				}
			}, {
				key: "renderGuestPrimaryActions",
				value: function() {
					return o.a.createElement("div", null, this.renderRaceNowButton())
				}
			}, {
				key: "renderPlayerCarControls",
				value: function() {
					var e = this,
						t = this.getCarParams(),
						n = t.carName,
						r = t.carImageSrc,
						a = (t.carID, [{
							position: "mouse",
							particle: {
								type: "image",
								assets: [r]
							},
							count: 30,
							speed: [10, 30]
						}]);
					return o.a.createElement(o.a.Fragment, null, o.a.createElement(v.a, {
						animate: this.state.carEasterEggClicks >= 10 && "click",
						animations: a,
						render: function(t) {
							return o.a.createElement("div", t, o.a.createElement("div", {
								className: "profile--active-car--easter-egg",
								onClick: e.handleCarEasterEggClick
							}, o.a.createElement("div", {
								className: "profile--active-car--car-name"
							}, n)))
						}
					}), this.props.loggedIn && !this.props.otherRacer && o.a.createElement("div", {
						className: "profile-customizations tac"
					}, o.a.createElement("a", {
						href: "/garage/customizer",
						className: "btn btn--thinner btn--secondary profile-customization-btn"
					}, o.a.createElement(h.a, {
						name: "gear",
						extraClasses: "btn-icon"
					}), "Customize Cars & Loot")))
				}
			}, {
				key: "renderPlayerActiveCar",
				value: function() {
					var e, t = this.getCarParams(),
						n = t.carID,
						r = t.carHueAngle,
						a = !!this.props.getCarBranding(n),
						i = null === (e = this.props.selectedTrail) || void 0 === e ? void 0 : e.assetKey,
						s = d()({
							"has-car-branding": a
						});
					return o.a.createElement("div", {
						className: s
					}, o.a.createElement("div", {
						className: "profile--active-car--preview-container"
					}, o.a.createElement(Ae.a, {
						className: "profile--active-car--preview",
						getCarUrl: this.props.getCarUrl,
						getCarMetaData: this.props.getCarMetaData,
						transparent: !0,
						carID: n,
						hue: r,
						trailKey: i,
						backgroundColor: 0,
						useWebGL: !0
					})))
				}
			}, {
				key: "renderRenewalNotice",
				value: function() {
					return this.props.userRequiresRenewal && o.a.createElement("div", {
						className: "profile-goldNotice"
					}, o.a.createElement("div", {
						className: "split split--flag"
					}, o.a.createElement("div", {
						className: "split-cell"
					}, o.a.createElement("div", {
						className: "bucket bucket--c bucket--xxs tal"
					}, o.a.createElement("div", {
						className: "bucket-media"
					}, o.a.createElement("svg", {
						className: "tc-brick icon icon-warning animate animate--fadeInOut animate--infinite animate--d-15"
					}, o.a.createElement("use", {
						xmlnsXlink: "http://www.w3.org/1999/xlink",
						xlinkHref: "/dist/site/images/icons/icons.css.svg#icon-warning-diamond"
					}))), o.a.createElement("div", {
						className: "bucket-content"
					}, this.props.user.goldExpired ? "Your Nitro Gold has expired!" : o.a.createElement(o.a.Fragment, null, "Your Nitro Gold will expire ", p()(1e3 * this.props.user.goldUntil).fromNow(), "."), o.a.createElement("a", {
						href: "/store/gold",
						className: "link link--dark mlxxs twb"
					}, "Renew Now!")))), o.a.createElement("div", {
						className: "split-cell"
					})))
				}
			}, {
				key: "renderProfileViews",
				value: function() {
					return o.a.createElement("div", {
						className: "split split--inline split--xs well well--t well--xs"
					}, o.a.createElement("div", {
						className: "split-cell"
					}, o.a.createElement("div", {
						className: "tsxxs ttu"
					}, "Profile Views")), o.a.createElement("div", {
						className: "split-cell"
					}, o.a.createElement("div", {
						className: "tss"
					}, this.props.profileViews.toLocaleString())))
				}
			}, {
				key: "renderNitroCash",
				value: function() {
					return o.a.createElement("div", {
						className: "profile--content--current-cash"
					}, o.a.createElement("div", {
						className: "split split--flag split--reverse split--xs"
					}, o.a.createElement("div", {
						className: "split-cell profile-invIcon"
					}, o.a.createElement(v.a, {
						animate: "click",
						animations: i.MONEY_ANIMATIONS,
						render: function(e) {
							return o.a.createElement("img", Ze({}, e, {
								alt: "Cash",
								src: "/dist/site/images/inventory/inv-cash.2.png",
								width: "30",
								className: "profile-invIcon"
							}))
						}
					})), o.a.createElement("div", {
						className: "split-cell"
					}, o.a.createElement("div", {
						className: "tsxxs ttu"
					}, "Cash"), o.a.createElement("div", {
						className: "bucket bucket--xxs bucket--c bucket--reverse tlh-1"
					}, o.a.createElement("div", {
						className: "bucket-content"
					}, o.a.createElement("div", {
						className: "profile-invCount as-nitro-cash--prefix"
					}, "$", Object(g.g)(this.props.money))), o.a.createElement("div", {
						className: "bucket-media"
					}, this.props.loggedIn && !this.props.otherRacer && o.a.createElement("a", {
						className: "link link--emerald db",
						href: "/store/cash"
					}, o.a.createElement("svg", {
						className: "icon icon-squareplus"
					}, o.a.createElement("use", {
						xmlnsXlink: "http://www.w3.org/1999/xlink",
						xlinkHref: "/dist/site/images/icons/icons.css.svg#icon-squareplus"
					}))))))))
				}
			}, {
				key: "renderRankingBanner",
				value: function(e, t) {
					if (!e) return null;
					var n = "Top ".concat(e, " ").concat(t, " in the Last 7 Days"),
						r = "/dist/site/images/badges/profile-".concat(t.toLowerCase(), "-top").concat(e, ".png");
					return o.a.createElement("div", {
						title: n
					}, o.a.createElement("img", {
						className: "profile-badge",
						src: r
					}))
				}
			}, {
				key: "renderProfileHeader",
				value: function() {
					var e = this.props.username || this.props.displayName,
						t = this.props.displayName || name,
						n = this.renderRankingBanner(this.props.rankingBadges.user, "Racer"),
						r = this.renderRankingBanner(this.props.rankingBadges.team, "Team"),
						a = d()("profile--grid--player", {
							"with-racer-ranking": !!n,
							"with-team-ranking": !!r
						});
					return o.a.createElement("div", {
						className: a
					}, n, r, o.a.createElement("div", {
						className: "profile--grid--player-info"
					}, o.a.createElement("h2", {
						className: "profile-username tc-i"
					}, o.a.createElement(ke.a, {
						username: e,
						displayName: t,
						membership: this.props.membership,
						tag: this.props.tag,
						tagColor: this.props.tagColor,
						rankingBadges: this.props.rankingBadges,
						theme: this.props.loggedIn && !this.props.otherRacer ? "profile" : "profileBare"
					})), o.a.createElement("div", {
						className: "profile-title"
					}, '"', this.props.title, '"')))
				}
			}, {
				key: "renderOtherRacerDetails",
				value: function() {
					if (!this.props.otherRacer) return null;
					var e = this.props.calculateInfinityTier(this.props.level),
						t = this.props.signupDate ? p()(1e3 * this.props.signupDate).format("MMMM Do, YYYY") : null;
					return o.a.createElement("div", {
						className: "profile--otherRacerDetails tar"
					}, o.a.createElement("div", {
						className: "tsxl twb"
					}, o.a.createElement("span", {
						className: "tc-i"
					}, "LVL"), " ", o.a.createElement("span", {
						className: "tc-fuel"
					}, e.isInfinityLevel && "∞", Number(e.level).toLocaleString())), o.a.createElement("div", {
						className: "tsxs tc-i tsi mtxxs"
					}, "Member Since ", t))
				}
			}, {
				key: "renderReportPlayer",
				value: function() {
					return this.props.loggedIn && this.props.otherRacer ? o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
						className: d()("quicktip quicktip--a quicktip--bottomRight quicktip--fw", {
							"is-active": this.state.showingReportPopup
						}),
						id: "report"
					}, o.a.createElement("div", {
						className: "quicktip-msg tac"
					}, o.a.createElement("p", {
						className: "tss twb"
					}, "Are you sure you want to report this player?"), o.a.createElement("p", {
						className: "tsxs tc-ts tsi"
					}, "Note: Abuse of this reporting system can lead to your account being banned."), o.a.createElement("div", {
						className: "split"
					}, o.a.createElement("div", {
						className: "split-cell tal"
					}, o.a.createElement("button", {
						className: "btn btn--negative btn--thin",
						onClick: this.reportPlayer
					}, "Report")), o.a.createElement("div", {
						className: "split-cell"
					}, o.a.createElement("button", {
						className: "btn btn--light btn--outline btn--thin",
						onClick: this.hideReportPlayerPopup
					}, "Cancel"))))), this.renderReportPlayerArea()) : null
				}
			}, {
				key: "render",
				value: function() {
					var e, t, n = this,
						r = !(null === (e = this.props.selectedTrail) || void 0 === e || !e.assetKey),
						a = this.props.otherRacer,
						s = this.props.isGoldMembership || "gold" === (null === (t = this.props.otherRacerProfile) || void 0 === t ? void 0 : t.membership),
						c = d()("card card--a card--shadow card--f card--o profile well well--l well--b theme--pDefault", {
							"is-guest": !this.props.loggedIn && !this.props.otherRacer,
							"is-gold": s,
							"is-garage": this.isGarageView,
							"is-other": this.props.otherRacer,
							"with-ad": this.shouldDisplayAd,
							"with-trail": r
						});
					return o.a.createElement("section", {
						className: c
					}, o.a.createElement("div", {
						className: "profile-goldBorder"
					}), this.isPublicProfileView ? this.renderHeaderMenu() : null, o.a.createElement("div", {
						className: "profile--active-car"
					}, this.renderPlayerActiveCar()), o.a.createElement("div", {
						className: "profile--interior"
					}, o.a.createElement("div", {
						className: "profile-bg"
					}, o.a.createElement("div", {
						className: "profile-bgHead"
					})), s && o.a.createElement(v.a, {
						animate: "click",
						animations: i.NT_GOLD_ANIMATION,
						render: function(e) {
							return o.a.createElement("div", Ze({}, e, {
								className: "profile-goldLogo"
							}), o.a.createElement("img", {
								src: "/dist/site/images/themes/profiles/gold/deco-ntGoldLogo2.png"
							}))
						}
					}), o.a.createElement("div", {
						className: "profile--grid"
					}, o.a.createElement("div", {
						className: "profile--grid--header"
					}, this.renderProfileHeader()), o.a.createElement("div", {
						className: "profile--grid--level"
					}, this.renderSeasonProgress(), this.renderOtherRacerDetails()), o.a.createElement("div", {
						className: "profile--grid--actions"
					}, this.renderPrimaryActions(), !this.props.isGoldMembership && this.renderMysteryBox()), o.a.createElement("div", {
						className: "profile--grid--center"
					}, this.renderPlayerCarControls()), o.a.createElement("div", {
						className: "profile--grid--aside"
					}, this.renderAside()), o.a.createElement("div", {
						className: "profile--grid--footer"
					}, o.a.createElement("div", null, a ? this.renderProfileViews() : this.renderNitroCash()), o.a.createElement("div", null, this.renderReportPlayer(), this.props.isGoldMembership && this.renderMysteryBox())))), !!this.props.otherRacer && o.a.createElement(A, Ze({}, this.props, {
						visible: this.state.showingSendCashModal,
						teardown: this.closeSendCashModal,
						title: "Send Cash",
						racer: this.props.otherRacerProfile
					})), !this.props.otherRacer && this.props.pendingCashGifts.map((function(e, t) {
						return o.a.createElement(M, {
							disableHideDelay: n.props.pendingCashGifts.length - 1 !== t,
							visible: !(n.state.claimedCashGifts.includes(t) || t > n.state.claimedCashGifts.length),
							key: t,
							teardown: function() {
								return n.setPendingCashGiftReceived(e, t)
							},
							title: "You've Got Cash",
							gift: e,
							oneWayFriendIDs: n.props.oneWayFriendIDs
						})
					})), !!this.props.pendingCashGifts && o.a.createElement(Ie.a, {
						animate: this.props.pendingCashGifts.length > this.state.claimedCashGifts.length && "now",
						animations: i.RECEIVE_CASH_ANIMATIONS
					}), o.a.createElement(Ke.a, {
						place: "top",
						effect: "solid",
						className: "reactTooltip"
					}))
				}
			}]) && nt(t.prototype, n), r && nt(t, r), i
		}(o.a.PureComponent);
		ct.defaultProps = {
			friends: [],
			cars: []
		}, ct.MONEY_ANIMATIONS = [{
			position: "center",
			particle: {
				type: "image",
				assets: ["/dist/site/images/inventory/inv-cash.2.png"]
			},
			count: 10,
			angle: 270,
			speed: [10, 30],
			spread: [30, 60]
		}], ct.NT_GOLD_ANIMATION = [{
			position: "mouse",
			type: "firework",
			maxActive: 6,
			count: 1,
			explosions: [{
				particle: {
					type: "confetti"
				},
				colors: ["#F9D034", "#F2DC88", "#F9CC1F", "#F4E5AC", "#FFF0B9"],
				count: 200
			}]
		}], ct.RECEIVE_CASH_ANIMATIONS = [{
			type: "firework",
			launchDelay: 1e3,
			maxActive: 4,
			count: 20,
			explosions: [{
				particle: {
					type: "sparkle"
				},
				count: 400
			}, {
				particle: {
					type: "image",
					assets: ["/dist/site/images/inventory/inv-cash.2.png"]
				},
				count: 30
			}, {
				particle: {
					type: "image",
					assets: ["/dist/site/images/inventory/inv-cash.2.png"]
				},
				count: 30
			}]
		}];
		var lt = ct;
		n(58);

		function ut(e) {
			return (ut = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}

		function pt() {
			return (pt = Object.assign || function(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = arguments[t];
					for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
				}
				return e
			}).apply(this, arguments)
		}

		function ft(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function dt(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
			}
		}

		function mt(e, t) {
			return (mt = Object.setPrototypeOf || function(e, t) {
				return e.__proto__ = t, e
			})(e, t)
		}

		function ht(e) {
			var t = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
				} catch (e) {
					return !1
				}
			}();
			return function() {
				var n, r = gt(e);
				if (t) {
					var o = gt(this).constructor;
					n = Reflect.construct(r, arguments, o)
				} else n = r.apply(this, arguments);
				return yt(this, n)
			}
		}

		function yt(e, t) {
			return !t || "object" !== ut(t) && "function" != typeof t ? function(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}(e) : t
		}

		function gt(e) {
			return (gt = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
				return e.__proto__ || Object.getPrototypeOf(e)
			})(e)
		}
		var vt = function(e) {
			! function(e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						writable: !0,
						configurable: !0
					}
				}), t && mt(e, t)
			}(i, e);
			var t, n, r, a = ht(i);

			function i() {
				return ft(this, i), a.apply(this, arguments)
			}
			return t = i, (n = [{
				key: "render",
				value: function() {
					var e = {},
						t = {};
					return this.props.carImageUrl && (e = {
						backgroundImage: "url('".concat(this.props.carImageUrl, "')")
					}, t = {
						"data-tip": this.props.carName
					}), o.a.createElement("div", {
						draggable: !0,
						className: "garage-vehicle"
					}, o.a.createElement("div", pt({
						style: e,
						className: "garage-vehichleImage"
					}, t)))
				}
			}]) && dt(t.prototype, n), r && dt(t, r), i
		}(o.a.PureComponent);

		function bt(e) {
			return (bt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}

		function wt(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function Et(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
			}
		}

		function Ot(e, t) {
			return (Ot = Object.setPrototypeOf || function(e, t) {
				return e.__proto__ = t, e
			})(e, t)
		}

		function St(e) {
			var t = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
				} catch (e) {
					return !1
				}
			}();
			return function() {
				var n, r = Tt(e);
				if (t) {
					var o = Tt(this).constructor;
					n = Reflect.construct(r, arguments, o)
				} else n = r.apply(this, arguments);
				return _t(this, n)
			}
		}

		function _t(e, t) {
			return !t || "object" !== bt(t) && "function" != typeof t ? function(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}(e) : t
		}

		function Tt(e) {
			return (Tt = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
				return e.__proto__ || Object.getPrototypeOf(e)
			})(e)
		}
		var Nt = function(e) {
			! function(e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						writable: !0,
						configurable: !0
					}
				}), t && Ot(e, t)
			}(i, e);
			var t, n, r, a = St(i);

			function i() {
				var e;
				wt(this, i);
				for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
				return (e = a.call.apply(a, [this].concat(n))).state = {
					active: !1
				}, e.onDragOver = function(e) {
					e.preventDefault()
				}, e.onDragEnter = function(e) {
					e.currentTarget.classList.add("is-hovered")
				}, e.onDragLeave = function(t) {
					t.currentTarget.classList.remove("is-hovered"), e.state.active && t.currentTarget.classList.add("is-origin"), t.preventDefault()
				}, e.onDragStart = function(t) {
					if (t.target.classList.add("is-hovered"), e.props.carID)
						if (e.props.allowRearranging) {
							try {
								t.dataTransfer.setData("travis_rules", JSON.stringify({
									value: !0
								}))
							} catch (t) {}
							e.props.dragStart(e.props.spotID), e.state.active || e.setState({
								active: !0
							})
						} else t.preventDefault();
					else t.preventDefault()
				}, e.onDragEnd = function(t) {
					t.target.classList.remove("is-hovered"), e.props.dragEnd(), e.state.active && e.setState({
						active: !1
					})
				}, e.onDrop = function(t) {
					t.currentTarget.classList.remove("is-hovered"), t.preventDefault(), e.setState({
						active: !1
					}), e.props.dragDrop(e.props.spotID)
				}, e.handleClickSetActive = function() {
					if (e.props.otherRacer) {
						if (e.props.active) return;
						e.props.carID && (e.props.setOtherRacerCarActive(e.props.carID), Object(g.t)("swoosh"))
					} else e.props.onSelectGarageSpot()
				}, e
			}
			return t = i, (n = [{
				key: "render",
				value: function() {
					return o.a.createElement("div", {
						onClick: this.handleClickSetActive,
						onDragStart: this.onDragStart,
						onDragEnd: this.onDragEnd,
						onDragEnter: this.onDragEnter,
						onDragOver: this.onDragOver,
						onDragLeave: this.onDragLeave,
						onDrop: this.onDrop,
						className: d()("garage-spot", {
							"is-dragged": this.state.active
						}, {
							"is-empty": !this.props.carID
						})
					}, o.a.createElement(vt, {
						carName: this.props.carName,
						carImageUrl: this.props.carImageUrl
					}))
				}
			}]) && Et(t.prototype, n), r && Et(t, r), i
		}(o.a.PureComponent);

		function Ct(e) {
			return (Ct = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}

		function At(e, t) {
			var n = Object.keys(e);
			if (Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(e);
				t && (r = r.filter((function(t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				}))), n.push.apply(n, r)
			}
			return n
		}

		function It(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = null != arguments[t] ? arguments[t] : {};
				t % 2 ? At(Object(n), !0).forEach((function(t) {
					kt(e, t, n[t])
				})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : At(Object(n)).forEach((function(t) {
					Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
				}))
			}
			return e
		}

		function kt(e, t, n) {
			return t in e ? Object.defineProperty(e, t, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = n, e
		}

		function Rt(e) {
			return function(e) {
				if (Array.isArray(e)) return Pt(e)
			}(e) || function(e) {
				if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
			}(e) || function(e, t) {
				if (!e) return;
				if ("string" == typeof e) return Pt(e, t);
				var n = Object.prototype.toString.call(e).slice(8, -1);
				"Object" === n && e.constructor && (n = e.constructor.name);
				if ("Map" === n || "Set" === n) return Array.from(e);
				if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Pt(e, t)
			}(e) || function() {
				throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
			}()
		}

		function Pt(e, t) {
			(null == t || t > e.length) && (t = e.length);
			for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
			return r
		}

		function jt(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
			}
		}

		function Dt(e, t) {
			return (Dt = Object.setPrototypeOf || function(e, t) {
				return e.__proto__ = t, e
			})(e, t)
		}

		function xt(e) {
			var t = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
				} catch (e) {
					return !1
				}
			}();
			return function() {
				var n, r = Mt(e);
				if (t) {
					var o = Mt(this).constructor;
					n = Reflect.construct(r, arguments, o)
				} else n = r.apply(this, arguments);
				return Lt(this, n)
			}
		}

		function Lt(e, t) {
			return !t || "object" !== Ct(t) && "function" != typeof t ? function(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}(e) : t
		}

		function Mt(e) {
			return (Mt = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
				return e.__proto__ || Object.getPrototypeOf(e)
			})(e)
		}
		var Ut = function(e) {
			! function(e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						writable: !0,
						configurable: !0
					}
				}), t && Dt(e, t)
			}(i, e);
			var t, n, r, a = xt(i);

			function i(e) {
				var t;
				return function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, i), (t = a.call(this, e)).state = {
					isDragging: !1,
					spotIDBeingDragged: null,
					allowRearranging: !1,
					garage: []
				}, t.renderGarageSpots = function() {
					var e;
					return t.props.garage ? e = t.state.garage : (e = Array(30).fill(null))[0] = 9, e.map((function(e, n) {
						var r, a, i = 0;
						return e = parseInt(e), t.props.otherRacer && t.props.otherRacerActiveCarID === e || t.props.otherRacer && !t.props.otherRacerActiveCarID && t.props.carID === e ? a = !0 : t.props.otherRacer || t.props.carID !== e || (a = !0), null === (r = t.props.cars) || void 0 === r || r.forEach((function(t) {
							t[0] === e && (i = t[2])
						})), o.a.createElement(Nt, {
							key: "carSpot".concat(n),
							spotID: n,
							active: a,
							carID: e ? Number(e) : null,
							dragStart: t.dragStart,
							dragEnd: t.dragEnd,
							dragDrop: t.dragDrop,
							allowRearranging: t.state.allowRearranging,
							loggedIn: t.props.loggedIn,
							carName: t.props.getCarName(e),
							carImageUrl: e ? t.props.getCarUrl(e, !1, i) : null,
							otherRacer: t.props.otherRacer,
							setOtherRacerCarActive: t.props.setOtherRacerCarActive,
							onSelectGarageSpot: t.props.onSelectGarageSpot,
							carHueAngle: i
						})
					}))
				}, t.toggleRearrangeCars = function(e) {
					e.preventDefault(), t.setState((function(e) {
						return e.allowRearranging && t.props.arrangeCars(t.state.garage, t.props.garage), {
							allowRearranging: !e.allowRearranging
						}
					}))
				}, t.dragStart = function(e) {
					t.setState({
						isDragging: !0,
						spotIDBeingDragged: e
					})
				}, t.dragEnd = function() {
					t.setState({
						isDragging: !1
					})
				}, t.dragDrop = function(e) {
					if (e || 0 === e) {
						var n = Rt(t.state.garage),
							r = n[t.state.spotIDBeingDragged],
							o = n[e];
						o ? (n[e] = r, n[t.state.spotIDBeingDragged] = o) : (n[t.state.spotIDBeingDragged] = "", n[e] = r), t.setState({
							garage: n,
							isDragging: !1
						})
					} else t.setState({
						spotIDBeingDragged: null
					})
				}, t.state = It(It({}, t.state), {}, {
					garage: e.garage
				}), t
			}
			return t = i, (n = [{
				key: "componentDidUpdate",
				value: function(e, t, n) {
					this.props.garage && JSON.stringify(this.props.garage) !== JSON.stringify(e.garage) && this.setState({
						garage: this.props.garage
					}), Ke.a.rebuild()
				}
			}, {
				key: "render",
				value: function() {
					var e = d()("card card--b card--shadow card--f card--grit well well--b well--l", {
						"is-player-garage": !this.props.otherRacer
					});
					return o.a.createElement("section", {
						className: e
					}, o.a.createElement("div", {
						className: "card-cap bg--gradient"
					}, o.a.createElement("div", {
						className: "split split--flag split--stack_xs"
					}, o.a.createElement("div", {
						className: "split-cell"
					}, o.a.createElement("h1", {
						className: "h2 tbs"
					}, this.props.otherRacer ? null : "My ", "Cars")), o.a.createElement("div", {
						className: "split-cell"
					}, o.a.createElement("div", {
						className: "well--xs_xs well--t"
					}, this.props.loggedIn && !this.props.otherRacer ? o.a.createElement("a", {
						className: "btn btn--primary",
						href: "/garage",
						onClick: this.toggleRearrangeCars
					}, this.state.allowRearranging ? "Save Garage" : "Rearrange Cars") : null)))), o.a.createElement("div", {
						className: d()("flash flash--garage well well--l well--t mrs mls", {
							dn: !this.state.allowRearranging
						})
					}, o.a.createElement("p", {
						className: "mbf tac twb tss"
					}, "Rearrange your cars below by dragging them to a new spot!")), o.a.createElement("div", {
						className: d()("garage", {
							"is-rearranging": this.state.allowRearranging
						}, {
							"is-dragging": this.state.isDragging
						})
					}, this.renderGarageSpots()))
				}
			}]) && jt(t.prototype, n), r && jt(t, r), i
		}(o.a.PureComponent);

		function Ft(e) {
			return (Ft = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}

		function Bt(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function qt(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
			}
		}

		function Ht(e, t) {
			return (Ht = Object.setPrototypeOf || function(e, t) {
				return e.__proto__ = t, e
			})(e, t)
		}

		function Gt(e) {
			var t = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
				} catch (e) {
					return !1
				}
			}();
			return function() {
				var n, r = zt(e);
				if (t) {
					var o = zt(this).constructor;
					n = Reflect.construct(r, arguments, o)
				} else n = r.apply(this, arguments);
				return Vt(this, n)
			}
		}

		function Vt(e, t) {
			return !t || "object" !== Ft(t) && "function" != typeof t ? function(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}(e) : t
		}

		function zt(e) {
			return (zt = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
				return e.__proto__ || Object.getPrototypeOf(e)
			})(e)
		}
		var Wt = function(e) {
				! function(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							writable: !0,
							configurable: !0
						}
					}), t && Ht(e, t)
				}(i, e);
				var t, n, r, a = Gt(i);

				function i() {
					var e;
					Bt(this, i);
					for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
					return (e = a.call.apply(a, [this].concat(n))).visit = function(e) {
						e && e.preventDefault(), window.__navigateTo("/garage/customizer")
					}, e
				}
				return t = i, (n = [{
					key: "render",
					value: function() {
						return o.a.createElement("div", {
							className: "modal-body row row--m well--m_p well--pb tac",
							id: "modal-sendcash"
						}, o.a.createElement("img", {
							src: "/dist/site/images/modals/customizer-header.jpg",
							alt: "NitroType Customizer"
						}), o.a.createElement("div", {
							className: "well well--b tc-ts"
						}, "Customize your car, title, stickers and more using the new ", o.a.createElement("strong", null, "NitroType Customizer!")), o.a.createElement("form", {
							className: "well well--l well--t"
						}, o.a.createElement("button", {
							className: "btn btn--secondary",
							type: "submit",
							onClick: this.visit
						}, "Check Out the Customizer!")))
					}
				}]) && qt(t.prototype, n), r && qt(t, r), i
			}(o.a.PureComponent),
			Yt = Object(y.a)(Wt);

		function Xt(e) {
			return (Xt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}

		function Kt() {
			return (Kt = Object.assign || function(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = arguments[t];
					for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
				}
				return e
			}).apply(this, arguments)
		}

		function Jt(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function Qt(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
			}
		}

		function Zt(e, t) {
			return (Zt = Object.setPrototypeOf || function(e, t) {
				return e.__proto__ = t, e
			})(e, t)
		}

		function $t(e) {
			var t = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
				} catch (e) {
					return !1
				}
			}();
			return function() {
				var n, r = tn(e);
				if (t) {
					var o = tn(this).constructor;
					n = Reflect.construct(r, arguments, o)
				} else n = r.apply(this, arguments);
				return en(this, n)
			}
		}

		function en(e, t) {
			return !t || "object" !== Xt(t) && "function" != typeof t ? function(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}(e) : t
		}

		function tn(e) {
			return (tn = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
				return e.__proto__ || Object.getPrototypeOf(e)
			})(e)
		}
		var nn = function(e) {
				! function(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							writable: !0,
							configurable: !0
						}
					}), t && Zt(e, t)
				}(i, e);
				var t, n, r, a = $t(i);

				function i() {
					var e;
					Jt(this, i);
					for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
					return (e = a.call.apply(a, [this].concat(n))).state = {
						showingCustomizerPrompt: !1
					}, e.onSelectGarageSpot = function() {
						e.setState({
							showingCustomizerPrompt: !0
						})
					}, e.onCloseRedirectModal = function() {
						e.setState({
							showingCustomizerPrompt: !1
						})
					}, e
				}
				return t = i, (n = [{
					key: "render",
					value: function() {
						return o.a.createElement(o.a.Fragment, null, o.a.createElement(Yt, {
							visible: this.state.showingCustomizerPrompt,
							teardown: this.onCloseRedirectModal
						}), o.a.createElement(lt, Kt({
							key: "profile"
						}, this.props)), o.a.createElement(Ut, Kt({
							key: "cars"
						}, this.props, {
							onSelectGarageSpot: this.onSelectGarageSpot
						})))
					}
				}]) && Qt(t.prototype, n), r && Qt(t, r), i
			}(o.a.PureComponent),
			rn = n(38),
			on = n(10),
			an = n(9),
			sn = n(14),
			cn = n(25),
			ln = n(29),
			un = n(64),
			pn = n(35),
			fn = Object(l.b)((function(e) {
				return {
					site: e.globals.SITE,
					user: e.user,
					loggedIn: e.user.loggedIn,
					money: e.user.money,
					username: e.user.username,
					displayName: e.user.displayName,
					title: e.user.title,
					level: e.user.level,
					userID: e.user.userID,
					experience: e.user.experience,
					experienceForCurrentLevel: Object(g.k)(e.user.level, e.globals.SEASON_LEVELS),
					experienceForNextLevel: Object(g.k)(e.user.level + 1, e.globals.SEASON_LEVELS),
					rewardCountdown: e.user.rewardCountdown,
					ownedCars: e.user.cars,
					carHueAngle: e.user.carHueAngle,
					carID: e.user.carID,
					selectedTrail: Object(ln.getEquippedLoot)(e, {
						type: "trail"
					})[0],
					membership: e.user.membership,
					teamID: e.user.teamID,
					signupDate: e.user.createdStamp,
					country: e.user.country,
					garage: rn.c.getSanitizedGarage(e.user.garage, e.user.cars),
					cars: e.user.cars,
					tag: e.user.tag,
					accountType: e.user.accountType,
					splitTestId: e.globals.SPLIT_TEST_ID,
					mysteryBoxes: e.user.mysteryBoxes,
					rankingBadges: an.c.getRankingBadges(e.user, e.globals.TOP_PLAYERS),
					isGoldMembership: e.user.loggedIn && "gold" === e.user.membership,
					isBasicMembership: e.user.loggedIn && "gold" !== e.user.membership,
					userRequiresRenewal: !e.otherRacer && an.c.getUserRequiresRenewal(e.user),
					dailyChallenges: Object(pn.getDailyChallenges)(e),
					currentSeasonProgress: Object(un.getCurrentSeasonProgress)(e),
					loot: e.globals.LOOT,
					reward: e.garage.reward,
					pendingCashGifts: e.garage.pendingCashGifts,
					allowSendCash: !1,
					shouldShowEventModal: an.c.shouldEventCarModalShow(e),
					oneWayFriendIDs: e.globals.ONE_WAY_FRIEND_IDS,
					currentSeason: cn.a.getCurrentSeason(e.globals.ACTIVE_SEASONS),
					seasonRewards: sn.b.getCurrentSeasonRewards(e),
					getCarPrice: function(t) {
						return on.b.getCarPrice(e, t)
					},
					getCarName: function(t) {
						return on.b.getCarName(e, t)
					},
					getCarUrl: function(t, n, r, o) {
						return on.b.getCarUrl(e, t, n, r, o)
					},
					getCarMetaData: function(t) {
						return on.b.getCarMetaData(e, t)
					},
					getCarBranding: function(t) {
						return on.b.getCarBranding(e, t)
					},
					calculateInfinityTier: function(t) {
						return cn.a.calculateInfinityTier(e, t)
					},
					getItemRarity: function() {
						for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
						return on.b.getItemRarity.apply(on.b, [e].concat(n))
					}
				}
			}), (function(e) {
				return {
					claimReward: function() {
						return e(rn.b.claimReward())
					},
					clearReward: function() {
						return e(rn.b.clearReward())
					},
					arrangeCars: function(t, n) {
						return e(rn.b.arrangeCars(t, n))
					},
					getPendingCashGifts: function() {
						return e(rn.b.getPendingCashGifts())
					},
					setCashGiftReceived: function(t) {
						return e(an.b.setCashGiftReceived(t))
					},
					setEventModalVisibility: function(t) {
						return e(an.b.setEventModalVisibility(t))
					}
				}
			}))(nn);

		function dn(e) {
			return (dn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}

		function mn(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function hn(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
			}
		}

		function yn(e, t) {
			return (yn = Object.setPrototypeOf || function(e, t) {
				return e.__proto__ = t, e
			})(e, t)
		}

		function gn(e) {
			var t = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
				} catch (e) {
					return !1
				}
			}();
			return function() {
				var n, r = bn(e);
				if (t) {
					var o = bn(this).constructor;
					n = Reflect.construct(r, arguments, o)
				} else n = r.apply(this, arguments);
				return vn(this, n)
			}
		}

		function vn(e, t) {
			return !t || "object" !== dn(t) && "function" != typeof t ? function(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}(e) : t
		}

		function bn(e) {
			return (bn = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
				return e.__proto__ || Object.getPrototypeOf(e)
			})(e)
		}
		var wn = function(e) {
				! function(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							writable: !0,
							configurable: !0
						}
					}), t && yn(e, t)
				}(i, e);
				var t, n, r, a = gn(i);

				function i() {
					return mn(this, i), a.apply(this, arguments)
				}
				return t = i, (n = [{
					key: "render",
					value: function() {
						return o.a.createElement(o.a.Fragment, null, o.a.createElement(lt, this.props), o.a.createElement(Ut, this.props))
					}
				}]) && hn(t.prototype, n), r && hn(t, r), i
			}(o.a.PureComponent),
			En = n(19),
			On = n(13),
			Sn = n(20),
			_n = Object(l.b)((function(e, t) {
				var n, r;
				return n = e.globals.RACER_INFO.raceLogs, r = e.globals.RACER_INFO.racingStats, {
					site: e.globals.SITE,
					loggedIn: e.user.loggedIn,
					money: e.globals.RACER_INFO.money,
					ownUsername: e.user.username,
					username: e.globals.RACER_INFO.username,
					displayName: e.globals.RACER_INFO.displayName,
					title: e.globals.RACER_INFO.title,
					level: e.globals.RACER_INFO.level,
					experience: e.globals.RACER_INFO.experience,
					garage: rn.c.getSanitizedGarage(e.globals.RACER_INFO.garage, e.globals.RACER_INFO.cars),
					carHueAngle: e.globals.RACER_INFO.carHueAngle,
					carID: e.globals.RACER_INFO.carID,
					userID: e.globals.RACER_INFO.userID,
					otherRacer: !0,
					nitros: e.globals.RACER_INFO.nitros,
					friends: an.c.getFriendIDs(e),
					teammates: an.c.getFriendIDs(e, !0),
					lookingForTeam: !!e.globals.RACER_INFO.lookingForTeam,
					allowFriendRequests: !!e.globals.RACER_INFO.allowFriendRequests,
					teamID: e.globals.RACER_INFO.teamID,
					tag: e.globals.RACER_INFO.tag,
					country: e.globals.RACER_INFO.country,
					friendIds: e.user.friends,
					membership: e.globals.RACER_INFO.membership,
					ownMembership: e.user.membership,
					racesPlayed: e.globals.RACER_INFO.racesPlayed,
					getCarUrl: function(t, n, r) {
						return on.b.getCarUrl(e, t, n, r)
					},
					getCarName: function(t) {
						return on.b.getCarName(e, t)
					},
					getCarBranding: function(t) {
						return on.b.getCarBranding(e, t)
					},
					getCarMetaData: function(t) {
						return on.b.getCarMetaData(e, t)
					},
					selectedTrail: Object(ln.getEquippedLoot)(e, {
						type: "trail",
						source: e.globals.RACER_INFO.loot
					})[0],
					signupDate: e.globals.RACER_INFO.createdStamp,
					avgSpeed: e.globals.RACER_INFO.avgSpeed,
					highestSpeed: e.globals.RACER_INFO.highestSpeed,
					rankingBadges: an.c.getRankingBadges(e.globals.RACER_INFO, e.globals.TOP_PLAYERS),
					profileViews: e.globals.RACER_INFO.profileViews,
					requestedFriends: e.friends.requestedFriends,
					playerTeamID: e.user.teamID,
					teamRole: e.user.teamRole,
					otherRacerActiveCarID: e.garage.otherRacerActiveCarID,
					cars: e.globals.RACER_INFO.cars,
					friendLimits: e.user.loggedIn && "gold" === e.user.membership ? e.globals.FRIEND_LIMITS.gold : e.globals.FRIEND_LIMITS.basic,
					numberOfFriends: an.c.getFriendIDs(e, !1, !0).length,
					placed1: e.globals.RACER_INFO.placed1,
					placed2: e.globals.RACER_INFO.placed2,
					placed3: e.globals.RACER_INFO.placed3,
					nitrosUsed: e.globals.RACER_INFO.nitrosUsed,
					sessionRaces: e.globals.RACER_INFO.sessionRaces,
					longestSession: e.globals.RACER_INFO.longestSession,
					moneySpent: e.globals.RACER_INFO.moneySpent,
					racingStats: an.c.sortRacingStats(r),
					chartData: n,
					ownTeamID: e.user.teamID,
					user: e.user,
					otherRacerProfile: e.globals.RACER_INFO,
					sendCashDefaults: e.globals.CASH_SENDING,
					sendCashError: e.ui.sendCashError,
					sendCashPending: e.ui.sendCashPending,
					sendCashSuccessful: e.ui.sendCashSuccessful,
					ui: e.ui,
					isUserGoldMembership: "gold" === e.user.membership,
					allowSendCash: e.user.userID !== e.globals.RACER_INFO.userID && e.user.loggedIn,
					lessonDescriptions: e.globals.LESSON_DESCRIPTIONS,
					worldDescriptions: e.globals.WORLD_DESCRIPTIONS,
					currentSeason: cn.a.getCurrentSeason(e.globals.ACTIVE_SEASONS),
					calculateInfinityTier: function(t) {
						return cn.a.calculateInfinityTier(e, t)
					},
					getItemRarity: function() {
						for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
						return on.b.getItemRarity.apply(on.b, [e].concat(n))
					}
				}
			}), (function(e) {
				return {
					requestFriend: function(t) {
						e(En.b.requestFriend(t))
					},
					inviteToTeam: function(t, n) {
						e(On.b.inviteToTeam(t, n))
					},
					reportPlayer: function(t) {
						e(an.b.reportPlayer(t))
					},
					setOtherRacerCarActive: function(t) {
						e(rn.b.setOtherRacerCarActive(t))
					},
					sendCash: function(t, n, r) {
						return e(rn.b.sendCash(t, n, r))
					},
					clearSendCashState: function() {
						return e(Sn.b.clearApiState("sendCash"))
					}
				}
			}))(wn),
			Tn = [o.a.createElement(s.a, {
				path: "/garage",
				component: fn,
				adPage: "garage",
				key: "garage",
				tab: "garage"
			}), o.a.createElement(s.a, {
				path: "/racer/:username",
				component: _n,
				adPage: "garage",
				key: "otherRacer",
				tab: "otherRacer"
			})];
		i.a.render(o.a.createElement(c.a, {
			routes: Tn
		}), document.getElementById("root"))
	},
	35: function(e, t, n) {
		"use strict";
		n.r(t), n.d(t, "getFriendIDs", (function() {
			return l
		})), n.d(t, "getDailyChallenges", (function() {
			return h
		})), n.d(t, "sortRacingStats", (function() {
			return u
		})), n.d(t, "shouldEventCarModalShow", (function() {
			return f
		})), n.d(t, "hasCompletedQualifyingRace", (function() {
			return p
		})), n.d(t, "getRankingBadges", (function() {
			return d
		})), n.d(t, "getUserRequiresRenewal", (function() {
			return m
		})), n.d(t, "getSelectedMathProblemTypeId", (function() {
			return y
		})), n.d(t, "canAccessFullSite", (function() {
			return g
		}));
		var r = n(2),
			o = n(4),
			a = n(29);

		function i(e, t) {
			var n = Object.keys(e);
			if (Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(e);
				t && (r = r.filter((function(t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				}))), n.push.apply(n, r)
			}
			return n
		}

		function s(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = null != arguments[t] ? arguments[t] : {};
				t % 2 ? i(Object(n), !0).forEach((function(t) {
					c(e, t, n[t])
				})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function(t) {
					Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
				}))
			}
			return e
		}

		function c(e, t, n) {
			return t in e ? Object.defineProperty(e, t, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = n, e
		}
		var l = function(e, t, n) {
				var r = e.user.friends;
				return r && r.length ? (t && (r = r.filter((function(e) {
					return "teammate" === e.friendType
				}))), n && (r = r.filter((function(e) {
					return "friend" === e.friendType
				}))), r.map((function(e) {
					return e.userID
				}))) : []
			},
			u = function() {
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
				if (!e || e.length <= 0 || !Array.isArray(e)) return {};
				var t = {};
				return e.forEach((function(e) {
					t[e.board] = {
						races: e.played,
						averageWPM: Object(r.d)(parseInt(e.typed, 10), parseInt(e.secs, 10)),
						accuracy: Object(r.c)(parseInt(e.typed, 10), parseInt(e.errs, 10), 2),
						rank: e.rank,
						dayRank: e.dayRank,
						prevRank: e.prevRank
					}
				})), t
			},
			p = function(e) {
				var t, n;
				return (null === (t = e.user) || void 0 === t ? void 0 : t.avgSpeed) > 0 && (null === (n = e.user) || void 0 === n ? void 0 : n.loggedIn)
			},
			f = function(e) {
				return !(!e.user.loggedIn || !e.globals.SPECIAL_EVENT || !e.globals.SPECIAL_EVENT.cars || e.globals.SPECIAL_EVENT.cars.includes(e.user.carID) || void 0 !== e.user.event_modal_visible || !e.user.avgSpeed)
			},
			d = function(e, t) {
				return {
					team: t.teams[e.teamID],
					user: t.users[e.userID]
				}
			},
			m = function(e) {
				if (e.goldUntil || e.goldExpired) {
					var t = Math.round(Date.now() / 1e3),
						n = Math.round((Date.now() + 5184e6) / 1e3);
					if (e.goldUntil < n) return !0;
					if (t - e.goldExpired < 7776e3) return !0;
					if (e.goldExpired && e.lastLogin < e.goldExpired) return !0
				}
				return !1
			},
			h = function(e) {
				if (!e.globals.CHALLENGES) return [];
				var t = Math.floor(Date.now() / 1e3),
					n = e.globals.CHALLENGE_TYPES,
					a = Object(o.o)(e.globals.CHALLENGES.filter((function(e) {
						return e.expiration >= t
					})), 0, 3);
				return (null == a ? void 0 : a.map((function(t) {
					try {
						var a = n[t.type],
							i = Object(o.q)(a[0]),
							c = Object(o.e)(e.user.challenges) ? e.user.challenges : [],
							l = (null == c ? void 0 : c.find((function(e) {
								return e.challengeID === t.challengeID
							}))) || {
								progress: 0
							};
						return s(s(s({}, t), l), {}, {
							title: i({
								goal: t.goal,
								field: Object(r.u)(a[1], t.goal)
							}),
							field: a[1]
						})
					} catch (e) {
						console.warn("Unable to create Daily Challenge", t, e)
					}
				})).filter((function(e) {
					return Boolean
				}))) || []
			},
			y = function(e) {
				var t = localStorage.getItem("selected-math-problem-type"),
					n = Object(a.getMathProblemTypes)(e);
				return t || n.find((function(e) {
					return e.id !== t
				})) || (t = n[0].id), t
			},
			g = function(e) {
				return e.user.loggedIn && (e.globals.IS_NITROTYPE && p(e) || e.globals.IS_NITROMATH)
			}
	},
	36: function(e, t, n) {
		"use strict";
		n.d(t, "a", (function() {
			return o
		})), n.d(t, "c", (function() {
			return r
		})), n.d(t, "b", (function() {
			return a
		}));
		var r = {};
		n.r(r), n.d(r, "EQUIP_LOOT", (function() {
			return s
		}));
		var o = {};
		n.r(o), n.d(o, "equipLoot", (function() {
			return p
		}));
		var a = {};
		n.r(a), n.d(a, "getLootByType", (function() {
			return T
		})), n.d(a, "getUserTrails", (function() {
			return N
		})), n.d(a, "getUserCars", (function() {
			return C
		})), n.d(a, "getUserStickers", (function() {
			return A
		})), n.d(a, "getUserTitles", (function() {
			return I
		}));
		var i = n(2),
			s = "nitrotype/customizer/EQUIP_LOOT",
			c = n(7);

		function l(e) {
			return function(e) {
				if (Array.isArray(e)) return u(e)
			}(e) || function(e) {
				if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
			}(e) || function(e, t) {
				if (!e) return;
				if ("string" == typeof e) return u(e, t);
				var n = Object.prototype.toString.call(e).slice(8, -1);
				"Object" === n && e.constructor && (n = e.constructor.name);
				if ("Map" === n || "Set" === n) return Array.from(e);
				if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return u(e, t)
			}(e) || function() {
				throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
			}()
		}

		function u(e, t) {
			(null == t || t > e.length) && (t = e.length);
			for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
			return r
		}
		var p = function(e) {
				return function(t, n) {
					var r = n(),
						o = r.user,
						a = r.globals;
					(e = e.filter((function(e) {
						var t;
						return (null === (t = e.ids) || void 0 === t ? void 0 : t.length) || void 0 !== e.id
					})).filter((function(e) {
						var t, n;
						switch (e.type) {
							case "car":
								return e.id !== a.GUEST_CAR && (e.id !== o.carID || e.hueAngle !== o.carHueAngle);
							case "stickers":
								var r = a.LOOT.filter((function(e) {
										return "sticker" === e.type
									})).map((function(e) {
										return e.lootID
									})),
									i = o.loot.filter((function(e) {
										return r.includes(e.lootID) && e.equipped
									})).map((function(e) {
										return e.lootID
									})).sort();
								return l(e.ids).sort().join("") !== i.join("");
							case "trail":
								var s = o.loot.filter((function(e) {
										return "trail" === e.type
									})).map((function(e) {
										return e.lootID
									})),
									c = [].concat(l(s), l((null === (t = a.LOOT_CONFIG.trail) || void 0 === t ? void 0 : t.defaults) || []));
								return null === e.id || c.includes(e.id);
							default:
								return !(null !== (n = o.loot.find((function(t) {
									return t.lootID === e.id
								}))) && void 0 !== n && n.equipped)
						}
					}))).length ? Object(i.b)("/api/v2/loot/equip", {
						method: "post",
						params: l(e),
						apiScope: "equipLoot"
					}, t).then((function() {
						var r, o;
						t((r = e, o = n().globals.LOOT, {
							type: s,
							payload: r,
							allLoot: o
						})), c.a.trackEvent("customizer", "Customize", "Car and items were customized")
					}), (function() {
						return null
					})) : console.warn("unable to save changes")
				}
			},
			f = n(4),
			d = n(29);

		function m(e) {
			return function(e) {
				if (Array.isArray(e)) return g(e)
			}(e) || function(e) {
				if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
			}(e) || y(e) || function() {
				throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
			}()
		}

		function h(e, t) {
			return function(e) {
				if (Array.isArray(e)) return e
			}(e) || function(e, t) {
				if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
				var n = [],
					r = !0,
					o = !1,
					a = void 0;
				try {
					for (var i, s = e[Symbol.iterator](); !(r = (i = s.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
				} catch (e) {
					o = !0, a = e
				} finally {
					try {
						r || null == s.return || s.return()
					} finally {
						if (o) throw a
					}
				}
				return n
			}(e, t) || y(e, t) || function() {
				throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
			}()
		}

		function y(e, t) {
			if (e) {
				if ("string" == typeof e) return g(e, t);
				var n = Object.prototype.toString.call(e).slice(8, -1);
				return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? g(e, t) : void 0
			}
		}

		function g(e, t) {
			(null == t || t > e.length) && (t = e.length);
			for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
			return r
		}

		function v(e, t) {
			var n = Object.keys(e);
			if (Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(e);
				t && (r = r.filter((function(t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				}))), n.push.apply(n, r)
			}
			return n
		}

		function b(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = null != arguments[t] ? arguments[t] : {};
				t % 2 ? v(Object(n), !0).forEach((function(t) {
					w(e, t, n[t])
				})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : v(Object(n)).forEach((function(t) {
					Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
				}))
			}
			return e
		}

		function w(e, t, n) {
			return t in e ? Object.defineProperty(e, t, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = n, e
		}
		var E = new Date;
		E.setHours(0, 0, 0, 0);
		var O = +E / 1e3,
			S = O + 86400;

		function _(e, t, n) {
			var r = isNaN(t) ? S + n : 0 | t;
			return b(b({}, e), {}, {
				new: r >= O,
				createdStamp: r
			})
		}
		var T = function(e, t) {
				return e ? e.filter((function(e) {
					return e.type === t
				})) : []
			},
			N = function(e) {
				var t, n = k(e, "trail", (null === (t = e.globals.LOOT_CONFIG.trail) || void 0 === t ? void 0 : t.defaults) || []),
					r = n.equipped,
					o = n.available;
				return {
					selectedID: r[0],
					available: o
				}
			},
			C = function(e) {
				var t, n = e.globals.STARTING_CARS,
					r = (null === (t = e.user.cars) || void 0 === t ? void 0 : t.filter((function(e) {
						return "owned" === e[1]
					})).map((function(t, r) {
						var o = h(t, 4),
							a = o[0],
							i = (o[1], o[2]),
							s = o[3],
							c = Object(d.getCarMetaData)(e, a),
							l = c.isAnimated,
							u = c.assetKey,
							p = n.indexOf(a);
						return _({
							id: a,
							hue: i,
							isAnimated: l,
							assetKey: u
						}, p > -1 ? p : s, r)
					}))) || [];
				return {
					selectedID: e.user.carID,
					selectedHue: e.user.carHueAngle,
					available: r
				}
			},
			A = function(e) {
				return k(e, "sticker", e.globals.LOOT_CONFIG.sticker.defaults, !0)
			},
			I = function(e) {
				var t, n = (null === (t = e.globals.LOOT_CONFIG.title) || void 0 === t ? void 0 : t.defaults) || [],
					r = k(e, "title", n),
					o = r.equipped,
					a = r.available;
				if (!o.length) {
					var i = a.find((function(t) {
						return t.name === e.user.title
					}));
					i && (o[0] = i.lootID)
				}
				return {
					selectedID: o[0],
					available: a
				}
			};

		function k(e, t, n, r) {
			var o = e.globals.LOOT.filter((function(e) {
					return e.type === t
				})),
				a = e.user.loot.filter((function(e) {
					return e.type === t
				})),
				i = a.filter((function(e) {
					return e.equipped
				})).map((function(e) {
					return e.lootID
				}));
			return r && !i.length && (i = n), {
				equipped: i = i.filter((function(e) {
					return o.find((function(t) {
						return t.lootID === e
					}))
				})),
				available: Object(f.t)([].concat(m(a.map((function(e) {
					return e.lootID
				}))), m(n))).map((function(e, t) {
					var r = o.find((function(t) {
						return t.lootID === e
					}));
					if (!r) return null;
					var i = a.find((function(t) {
							return t.lootID === e
						})),
						s = null == i ? void 0 : i.createdStamp,
						c = n.find((function(t) {
							return t === e
						}));
					return isNaN(c) || (s = c), _(b({
						id: e
					}, r), s, t)
				})).filter((function(e) {
					return !!e && o.find((function(t) {
						return t.lootID === e.id
					}))
				}))
			}
		}
	},
	37: function(e, t, n) {
		"use strict";
		var r = n(0),
			o = n.n(r),
			a = (n(1), n(67));

		function i(e) {
			return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}

		function s(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function c(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
			}
		}

		function l(e, t) {
			return (l = Object.setPrototypeOf || function(e, t) {
				return e.__proto__ = t, e
			})(e, t)
		}

		function u(e) {
			var t = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
				} catch (e) {
					return !1
				}
			}();
			return function() {
				var n, r = f(e);
				if (t) {
					var o = f(this).constructor;
					n = Reflect.construct(r, arguments, o)
				} else n = r.apply(this, arguments);
				return p(this, n)
			}
		}

		function p(e, t) {
			return !t || "object" !== i(t) && "function" != typeof t ? function(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}(e) : t
		}

		function f(e) {
			return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
				return e.__proto__ || Object.getPrototypeOf(e)
			})(e)
		}
		var d = function(e) {
			! function(e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						writable: !0,
						configurable: !0
					}
				}), t && l(e, t)
			}(a, e);
			var t, n, r, o = u(a);

			function a() {
				return s(this, a), o.apply(this, arguments)
			}
			return t = a, (n = [{
				key: "render",
				value: function() {
					return this.props.render({
						ref: this.props.parentRef,
						onMouseEnter: this.props.onMouseEnter,
						onClick: this.props.onClick
					})
				}
			}]) && c(t.prototype, n), r && c(t, r), a
		}(o.a.PureComponent);
		t.a = Object(a.a)(d)
	},
	38: function(e, t, n) {
		"use strict";
		n.d(t, "b", (function() {
			return o
		})), n.d(t, "d", (function() {
			return r
		})), n.d(t, "c", (function() {
			return a
		}));
		var r = {};
		n.r(r), n.d(r, "CLAIM_REWARD_SUCCESSFUL", (function() {
			return i
		})), n.d(r, "CLAIM_REWARD_FAILED", (function() {
			return s
		})), n.d(r, "CLEAR_REWARD", (function() {
			return c
		})), n.d(r, "SET_CAR_ACTIVE", (function() {
			return l
		})), n.d(r, "ARRANGE_CARS", (function() {
			return u
		})), n.d(r, "SET_OTHER_RACER_CAR_ACTIVE", (function() {
			return p
		})), n.d(r, "SET_PENDING_CASH_GIFTS", (function() {
			return f
		}));
		var o = {};
		n.r(o), n.d(o, "claimReward", (function() {
			return A
		})), n.d(o, "arrangeCars", (function() {
			return I
		})), n.d(o, "sendCash", (function() {
			return k
		})), n.d(o, "getPendingCashGifts", (function() {
			return R
		})), n.d(o, "clearReward", (function() {
			return P
		})), n.d(o, "setOtherRacerCarActive", (function() {
			return j
		}));
		var a = {};
		n.r(a), n.d(a, "getSanitizedGarage", (function() {
			return L
		}));
		var i = "nitrotype/garage/CLAIM_REWARD_SUCCESSFUL",
			s = "nitrotype/garage/CLAIM_REWARD_FAILED",
			c = "nitrotype/garage/CLEAR_REWARD",
			l = "nitrotype/garage/SET_CAR_ACTIVE",
			u = "nitrotype/garage/ARRANGE_CARS",
			p = "nitrotype/garage/SET_OTHER_RACER_CAR_ACTIVE",
			f = "nitrotype/garage/SET_PENDING_CASH_GIFTS";

		function d(e, t) {
			var n = Object.keys(e);
			if (Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(e);
				t && (r = r.filter((function(t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				}))), n.push.apply(n, r)
			}
			return n
		}

		function m(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = null != arguments[t] ? arguments[t] : {};
				t % 2 ? d(Object(n), !0).forEach((function(t) {
					h(e, t, n[t])
				})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : d(Object(n)).forEach((function(t) {
					Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
				}))
			}
			return e
		}

		function h(e, t, n) {
			return t in e ? Object.defineProperty(e, t, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = n, e
		}
		var y = {
				reward: null,
				otherRacerActiveCarID: null,
				pendingCashGifts: []
			},
			g = function(e, t) {
				return m(m({}, e), {}, {
					reward: {
						type: t.type,
						value: t.value
					}
				})
			},
			v = function(e) {
				return m({}, e)
			},
			b = function(e) {
				return m(m({}, e), {}, {
					reward: null
				})
			},
			w = function(e, t) {
				return m(m({}, e), {}, {
					otherRacerActiveCarID: t
				})
			},
			E = function(e, t) {
				return m(m({}, e), {}, {
					pendingCashGifts: t
				})
			},
			O = function() {
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : y,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case i:
						return g(e, t.payload);
					case s:
						return v(e);
					case c:
						return b(e);
					case p:
						return w(e, t.payload);
					case f:
						return E(e, t.payload)
				}
				return e
			},
			S = n(2),
			_ = n(9),
			T = n(8),
			N = n.n(T),
			C = n(7),
			A = (n(10), function() {
				return function(e, t) {
					Object(S.b)("/api/v2/rewards/daily", {
						method: "get"
					}, e).then((function(n) {
						if (n.reward) {
							var r = "never",
								o = t().user.lastMysteryBoxClaimed;
							o && (r = N()().unix() - o), C.a.trackEvent("garage", "claim mystery box", r), e({
								type: i,
								payload: n
							})
						}
					}), (function(t) {
						console.warn(t), e({
							type: s
						})
					}))
				}
			}),
			I = function(e, t) {
				return function(n) {
					var r = JSON.stringify(t) !== JSON.stringify(e);
					Object(S.b)("/api/v2/loot/arrange-cars", {
						method: "post",
						params: {
							garage: e
						}
					}, n).then((function() {
						n(function(e) {
							return {
								type: u,
								payload: e
							}
						}(e)), C.a.trackEvent("garage", "rearrange cars", r ? "changed" : "unchanged")
					}), (function(e) {
						console.warn(e)
					}))
				}
			},
			k = function(e, t, n) {
				return function(r) {
					Object(S.b)("/api/v2/players/".concat(e, "/send-cash"), {
						method: "post",
						params: {
							amount: t,
							password: n
						},
						apiScope: "sendCash"
					}, r).then((function(e) {
						r(_.b.setSendCashSuccessful(e))
					}), (function(e) {
						console.error("Cash sending error", e)
					}))
				}
			},
			R = function() {
				return function(e) {
					Object(S.b)("/api/v2/players/receive-cash", {
						method: "post",
						apiScope: "getPendingCashGifts"
					}, e).then((function(t) {
						e(function(e) {
							return {
								type: f,
								payload: e
							}
						}(t))
					}), (function() {
						return null
					}))
				}
			},
			P = function() {
				return {
					type: c
				}
			},
			j = function(e) {
				return {
					type: p,
					payload: e
				}
			};

		function D(e) {
			return function(e) {
				if (Array.isArray(e)) return x(e)
			}(e) || function(e) {
				if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
			}(e) || function(e, t) {
				if (!e) return;
				if ("string" == typeof e) return x(e, t);
				var n = Object.prototype.toString.call(e).slice(8, -1);
				"Object" === n && e.constructor && (n = e.constructor.name);
				if ("Map" === n || "Set" === n) return Array.from(e);
				if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return x(e, t)
			}(e) || function() {
				throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
			}()
		}

		function x(e, t) {
			(null == t || t > e.length) && (t = e.length);
			for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
			return r
		}
		var L = function(e, t) {
			t = t || [];
			var n = D(e),
				r = [],
				o = [];
			t.forEach((function(e) {
				o.push("" + e[0])
			}));
			var a = {};
			if ((n = n.filter((function(e) {
					return ("" === e || !a.hasOwnProperty(e)) && (a[e] = !0)
				}))).forEach((function(e) {
					"" === e ? r.push("") : o.includes("" + e) ? r.push("" + e) : r.push("")
				})), o.forEach((function(e) {
					if (!r.includes(e))
						if (r.length) {
							for (var t = 0; t <= r.length; t++)
								if (!r[t]) {
									r[t] = e;
									break
								}
						} else r.push(e)
				})), r.length % 15) {
				var i = 15 - r.length % 15;
				i && (r.length = r.length + i, r.fill("", r.length - i, r.length))
			}
			var s = 30;
			for (r.length && (s = r.length + r.length % 30); r.length < s;) r.push("");
			return r
		};
		t.a = O
	},
	39: function(e, t, n) {
		"use strict";
		var r = n(0),
			o = n.n(r),
			a = n(6),
			i = (n(1), n(33)),
			s = n(57),
			c = n(77),
			l = {
				en: {
					translation: n(90)
				}
			};
		c.a.use(s.b).init({
			resources: l,
			lng: "en",
			keySeparator: !1,
			interpolation: {
				escapeValue: !1
			}
		});
		var u, p, f, d = c.a,
			m = n(101),
			h = n.n(m),
			y = n(102),
			g = n.n(y);

		function v(e) {
			return (v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}
		var b, w = [".data.indexOf is not a function", "See almond README", "PulsePointVideo", "ResizeObserver", "extAbbr", "navigator.sendBeacon", "googlesyndication", "PAPADDINGXXPADDING", "Blocked a frame", "Unable to decode audio data", "lnrAppboy", "'innerText' of null", "BetterJsPop", "t.country", "Microsoft Internet extensions", "Unexpected token '<'", "lineNumber must be a Number", "Rejection reason was not an Error", "InvalidStateError: The object is in an invalid state.", "There is no audio asset with key", "Tapad", "Cannot redefine property: op", "$bos", "__tcfapi", "got '<'", "_getRootNode", "ownerDocument", "Invalid state transition request"],
			E = ["extAbbr", "zencdn.net", "static.userback.io", "adservice.google.com", "vjs.zencdn", "doubleclick", "googleadservices", "googletagservices", "connect.facebook", "apis.google.com", "googlesyndication", "127.0.0.1", "www.google-analytics.com", "newrelic", "cloudfront", "nr-data", "nuanria.FrameConnector", "/inject.js", "global code", "checkUnit", "pub.network", "quantcast", "consensu", "ExpandableBannerFormat", "IframePlacement"],
			O = document.cookie,
			S = localStorage.getItem("player_token"),
			_ = localStorage.getItem("persist:nt") || "";
		if (_) try {
			var T, N = JSON.parse(null === (T = JSON.parse(_)) || void 0 === T ? void 0 : T.user);
			N.loggedIn && (b = {
				userID: N.userID,
				username: N.username,
				level: N.level,
				membership: N.membership
			})
		} catch (e) {
			console.error("Error parsing persist:nt store", {
				error: e
			})
		}
		var C = window.NTSERVERS ? window.NTSERVERS() : "NTSERVERS() does not exist",
			A = h()({
				apiKey: (null === (u = window.NTGLOBALS) || void 0 === u ? void 0 : u.BUGSNAG_KEY) || "",
				beforeSend: function(e) {
					var t, n, r = [];
					(e.breadcrumbs = e.breadcrumbs.filter((function(e) {
						var t, n, o;
						return "request" !== e.type || (!(null === (t = e.metaData) || void 0 === t || !t.request || !e.metaData.request.match(/^(POST|GET|PUT|HEAD|DELETE) \//)) || (!(null === (n = e.metaData) || void 0 === n || !n.request || -1 === e.metaData.request.indexOf("https://realtime")) || (r.push(null === (o = e.metaData) || void 0 === o ? void 0 : o.request), !1)))
					})), window.__bootstrapLoaded) ? e.breadcrumbs.push(new window.bugsnagClient.BugsnagBreadcrumb("Bootstrap Loaded", {}, "custom", null === (n = window.__bootstrapLoaded) || void 0 === n ? void 0 : n.toISOString())): e.breadcrumbs.push(new window.bugsnagClient.BugsnagBreadcrumb("Bootstrap Failed to Load", {}, "custom", (new Date).toISOString()));
					if (r.length && e.breadcrumbs.push(new window.bugsnagClient.BugsnagBreadcrumb("Filtered XHR Requests", {
							requests: r
						}, "custom")), localStorage.TEST || "local" === (null === (t = window.NTGLOBALS) || void 0 === t ? void 0 : t.ENV)) return !1;
					var o = navigator.userAgent;
					if (o.match("MSIE") || o.match("rv:11")) return !1;
					var a = o.match(/Firefox\/([0-9]+)/);
					if (a && a[1] < 50) return !1;
					var i = o.match(/Chrome\/([0-9]+)/);
					if (i && i[1] < 50) return !1;
					var s, c = JSON.stringify(e.stacktrace);
					for (s = 0; s < w.length; s++)
						if (e.errorMessage.indexOf(w[s]) > -1) return !1;
					for (s = 0; s < E.length; s++)
						if (c.indexOf(E[s]) > -1) return !1;
					"object" === v(e.metaData.phaser) && e.metaData.phaser.length && (e.metaData.phaser = JSON.stringify(e.metaData.phaser, null, 2)), "object" === v(e.metaData.raceLogs) && e.metaData.raceLogs.length && (e.metaData.raceLogs = JSON.stringify(e.metaData.raceLogs, null, 2))
				},
				releaseStage: null === (p = window.NTGLOBALS) || void 0 === p ? void 0 : p.ENV,
				appVersion: (null === (f = window.NTGLOBALS) || void 0 === f ? void 0 : f.CACHE_ID) + "",
				autoCaptureSessions: !1,
				interactionBreadcrumbsEnabled: !1,
				consoleBreadcrumbsEnabled: !0,
				navigationBreadcrumbsEnabled: !0,
				networkBreadcrumbsEnabled: !0,
				metaData: {
					localData: {
						userFromLocalStorage: void 0,
						cookies: O,
						ntServers: C,
						token: S
					}
				},
				user: b,
				maxBreadcrumbs: 40
			});
		window.bugsnagClient = A, window.bugsnagClient.metaData = window.bugsnagClient.metaData || {}, A.use(g.a, o.a);
		var I = A.getPlugin("react"),
			k = n(103),
			R = n(104),
			P = n(45),
			j = n(61),
			D = n(105),
			x = n.n(D),
			L = n(15),
			M = n(9),
			U = n(52),
			F = n(38),
			B = n(10),
			q = n(19),
			H = n(14),
			G = n(68),
			V = n(20),
			z = n(43),
			W = n(30),
			Y = n(13),
			X = n(65),
			K = n(63),
			J = n(73),
			Q = n(91),
			Z = n.n(Q).a,
			$ = n(16),
			ee = n(17),
			te = n.n(ee),
			ne = n(2),
			re = n(8),
			oe = n.n(re);

		function ae() {
			var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
			se(), localStorage.removeItem("player_token"), localStorage.removeItem("persist:nt"), window.__navigateTo("/" + (e ? "#" + e : ""), !1)
		}

		function ie() {
			var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
				t = te.a.get("ntuserguest");
			(!t || e.userID && t !== e.userID) && te.a.set("ntuserguest", e.userID, Object(ne.i)())
		}

		function se() {
			te.a.remove("ntuserguest", Object(ne.i)()), te.a.remove("userrem", Object(ne.i)()), te.a.remove(Object(ne.w)("avgspeed"), Object(ne.i)()), te.a.get("PHPNTSESSION") && (te.a.remove(te.a.get("PHPNTSESSION"), Object(ne.i)()), te.a.remove("PHPNTSESSION", Object(ne.i)()))
		}
		var ce, le, ue = n(4),
			pe = ["persist/PERSIST", L.b.LOG_IN_SUCCESSFUL, L.b.LOG_IN_TO_CLASS, L.b.LOG_OUT, H.c.CLAIM_ACHIEVEMENT, H.c.SET_UNCLAIMED_ACHIEVEMENTS, H.c.VERIFY_NEW_ACHIEVEMENTS, H.c.NEW_UNCLAIMED_ACHIEVEMENTS, H.c.CLEAR_UNCLAIMED_ACHIEVEMENTS, V.c.CLEAR_API_STATE, V.c.SET_API_ERROR, V.c.SET_API_PENDING, V.c.SET_API_SUCCESSFUL, $.c.ADD_NOTIFICATIONS, $.c.REMOVE_NOTIFICATIONS],
			fe = Object(ue.c)((function(e, t) {
				e(H.a.verifyNewAchievements(t))
			}), 300),
			de = Object(ue.c)((function(e, t) {
				e(H.a.verifyExtraTier(t))
			}), 300),
			me = function(e, t) {
				if (e.active) {
					var n, r, o, a = e.rules,
						i = 0;
					for (r = 0, n = a.length, 0; r < n; r++) switch (o = parseInt(t[a[r].field] || 0, 10), a[r].comparison) {
						case "eq":
							i += o === parseInt(a[r].value, 10) || t[a[r].field] === a[r].value ? 1 : 0;
							break;
						case "ne":
							i += o !== parseInt(a[r].value, 10) ? 1 : 0;
							break;
						case "gt":
							i += o > parseInt(a[r].value, 10) ? 1 : 0;
							break;
						case "gte":
							i += o >= parseInt(a[r].value, 10) ? 1 : 0;
							break;
						case "lt":
							i += o < parseInt(a[r].value, 10) ? 1 : 0;
							break;
						case "lte":
							i += o <= parseInt(a[r].value, 10) ? 1 : 0
					}
					return i === n
				}
			},
			he = n(22),
			ye = n(44),
			ge = n.n(ye),
			ve = n(49),
			be = n(50),
			we = ["persist/PERSIST"],
			Ee = location.pathname.match(/^\/race\//) || "/race" === location.pathname,
			Oe = location.pathname.match(/^\/team\//),
			Se = function() {
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
					t = e.servers,
					n = e.user,
					r = e.globals,
					o = e.userID,
					a = e.dispatch;
				if (he.a.socket) return he.a;
				var i = location.pathname.match(/^\/race\//) || "/race" === location.pathname || location.pathname.match(/^\/play\//) || "/play" === location.pathname,
					s = i && (location.pathname.match(/^\/race\//) || location.pathname.match(/^\/play\//)),
					c = i && "nitromath" === r.SITE,
					l = n.loggedIn,
					u = (n.avgSpeed, n.offline);
				if (l || s) {
					var p, f, d = s && null != r && r.LEADER_USER_ID ? r.LEADER_USER_ID : o,
						m = t[parseInt(String(d).substr(-3), 10) % t.length],
						h = localStorage.getItem("player_token") || "",
						y = i ? 0 : 4,
						g = m.split(".");
					c ? (g[0] += "ws", p = new be.a("wss://".concat(g.join("."), "/ws?token=").concat(h), n, r)) : "ws" === localStorage.getItem("_useServer") ? (g[0] += "ws", p = new ve.a("wss://".concat(g.join(".")), null, {
						pathname: "/ws?token=" + h,
						retries: y
					})) : p = ge.a.connect("".concat(location.protocol, "//").concat(m, "?token=").concat(h), {
						pathname: "/realtime",
						reconnect: {
							retries: y
						}
					}), he.a.socket = p, he.a.on("data", (function(e) {
						_e(e, n, a)
					})), he.a.on("error", (function(e) {
						console.error("Realtime client threw an error", e)
					})), window.addEventListener("unload", (function(e) {
						he.a.pageUnloaded = !0, he.a.end()
					})), he.a.on("open", (function() {
						var e, t = (null === (e = n.friends) || void 0 === e ? void 0 : e.map((function(e) {
							return e.userID
						}))) || [];
						r.ERROR_TYPE || (he.a.checkin(u, t, {
							first: 1 === n.checkins
						}, null == r ? void 0 : r.RACER_INFO), a(M.b.trackCheckins()))
					}));
					var v = function() {
						clearTimeout(f), f = setTimeout((function() {
							he.a.end()
						}), 9e5)
					};
					return he.a.on("data", (function(e) {
						if ("error" !== e.stream) "auth" === e.stream && Object(ne.C)(a, e.token, "rt"), v();
						else {
							switch (e.type) {
								case "invalid session":
									a(L.a.logOut("rt-invalid-session"));
									break;
								case "no cookie":
									alert("Your browser must have cookies enabled to play Nitro Type!"), a(L.a.logOut("rt-no-cookie"))
							}
							he.a.end()
						}
					})), v(), he.a
				}
			},
			_e = function(e, t, n) {
				var r, o;
				null != e && null !== (r = e.data) && void 0 !== r && r.type && (n(M.b.newRealtimeMessage(e.data)), n($.b.addNotifications([{
					type: "realtime",
					data: e.data
				}], t)), "team-accept" === e.data.type && n(Y.b.joinTeam(e.data)), "friend-online" === e.data.type && n(M.b.onlineNotificationSeen(null === (o = e.data) || void 0 === o ? void 0 : o.from)))
			};

		function Te(e) {
			return (Te = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}

		function Ne(e) {
			return function(e) {
				if (Array.isArray(e)) return Ce(e)
			}(e) || function(e) {
				if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
			}(e) || function(e, t) {
				if (!e) return;
				if ("string" == typeof e) return Ce(e, t);
				var n = Object.prototype.toString.call(e).slice(8, -1);
				"Object" === n && e.constructor && (n = e.constructor.name);
				if ("Map" === n || "Set" === n) return Array.from(e);
				if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ce(e, t)
			}(e) || function() {
				throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
			}()
		}

		function Ce(e, t) {
			(null == t || t > e.length) && (t = e.length);
			for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
			return r
		}

		function Ae(e, t) {
			var n = Object.keys(e);
			if (Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(e);
				t && (r = r.filter((function(t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				}))), n.push.apply(n, r)
			}
			return n
		}

		function Ie(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = null != arguments[t] ? arguments[t] : {};
				t % 2 ? Ae(Object(n), !0).forEach((function(t) {
					ke(e, t, n[t])
				})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ae(Object(n)).forEach((function(t) {
					Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
				}))
			}
			return e
		}

		function ke(e, t, n) {
			return t in e ? Object.defineProperty(e, t, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = n, e
		}
		var Re = Object(P.c)({
				authentication: L.c,
				user: M.a,
				race: U.a,
				garage: F.a,
				globals: B.a,
				friends: q.a,
				achievements: H.d,
				leaderboard: G.a,
				ui: V.a,
				stats: z.a,
				profile: W.a,
				team: Y.a,
				alerts: Z,
				news: X.a,
				store: K.a,
				password: J.a,
				notifications: $.a
			}),
			Pe = {
				0: function(e) {
					return Ie({}, e)
				},
				1: function(e) {
					return Object(ue.e)(null == e ? void 0 : e.notifications) && (e.notifications = {
						notifications: Ne(e.notifications),
						mutedGroups: []
					}), Ie({}, e)
				},
				2: function(e) {
					var t;
					return 0 === (null == e || null === (t = e.user) || void 0 === t ? void 0 : t.challenges) && (e.user.challenges = []), Ie({}, e)
				},
				3: function(e) {
					var t;
					return Object(ue.h)(null == e || null === (t = e.user) || void 0 === t ? void 0 : t.challenges) && (e.user.challenges = []), Ie({}, e)
				}
			},
			je = {
				key: "nt",
				storage: x.a,
				version: 3,
				throttle: 0,
				whitelist: ["user", "friends", "notifications"],
				migrate: Object(j.a)(Pe, {
					debug: !1
				})
			},
			De = Object(j.b)(je, Re),
			xe = "object" !== ("undefined" == typeof window ? "undefined" : Te(window)) || !window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || "local" !== (null === (ce = window) || void 0 === ce || null === (le = ce.NTGLOBALS) || void 0 === le ? void 0 : le.ENV) && void 0 === localStorage.TEST ? P.d : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
				trace: !0
			}),
			Le = Ie(Ie({}, window.NTGLOBALS), {}, {
				IS_NITROTYPE: "nitrotype" === window.NTGLOBALS.SITE,
				IS_NITROMATH: "nitromath" === window.NTGLOBALS.SITE
			}),
			Me = Object(P.e)(De, {
				globals: Le
			}, xe(Object(P.a)(R.a, (function(e) {
				return function(e) {
					return function(t) {
						var n;
						(null === (n = sessionStorage) || void 0 === n ? void 0 : n.getItem("reduxLogger")) && console.log(t, JSON.stringify(t)), window.bugsnagClient && (window.bugsnagClient.metaData.redux || (window.bugsnagClient.metaData.redux = []), window.bugsnagClient.metaData.redux.push(t)), e(t)
					}
				}
			}), (function(e) {
				return function(t) {
					return function(n) {
						var r;
						switch (n.type) {
							case L.b.LOG_IN_SUCCESSFUL:
								if (se(), n.payload.checkTimestamp && !Object(ne.e)(n.payload.checkTimestamp)) {
									var o = oe()().format("dddd, MMMM Do YYYY, h:mm:ss a"),
										a = oe()(1e3 * n.payload.checkTimestamp).format("dddd, MMMM Do YYYY, h:mm:ss a");
									return alert("Your Computer's Date/Time is Incorrect! Your computer's time is set to ".concat(o, " however the correct time is ").concat(a, ". For Nitro to function properly you must set your computer clock correctly.")), void window.__navigateTo("/login#computer-time-" + n.payload.checkTimestamp + "-" + Math.floor(Date.now() / 1e3))
								}
								Object(ne.C)(e.dispatch, n.payload.token, "api");
								break;
							case L.b.LOG_OUT:
								return void ae(n.hash);
							case "persist/REHYDRATE":
								if (! function(e, t) {
										var n = localStorage.getItem("player_token"),
											r = Math.floor(Date.now() / 1e3);
										if (n) {
											var o;
											try {
												if (o = Object(ne.r)(n), (null == t ? void 0 : t.userID) !== parseInt(o.sub)) return ae("user-mismatch-" + (null == t ? void 0 : t.userID) + "-" + o.sub), !1;
												if ("nitrotype.com" !== o.iss) return console.error("Invalid JWT Token", {
													iss: o.iss
												}), ae("invalid-jwt"), !1;
												if (o.exp < r) return console.error("Expired Session", {
													exp: o.exp,
													now: r
												}), ae("expired-session"), !1
											} catch (e) {
												return console.error("JWT Parse Error", n, e), ae("jwt-parse-" + e.message), !1
											}
											return Object(ne.y)(e, o), !0
										}
										if (t) {
											if (t.loggedIn) return ae("logged-in-no-token"), !1;
											ie(t)
										} else ie();
										return !0
									}(e.dispatch, null === (r = n.payload) || void 0 === r ? void 0 : r.user)) return
						}
						t(n)
					}
				}
			}), (function(e) {
				return function(t) {
					return function(n) {
						var r = t(n),
							o = e.dispatch,
							a = e.getState(),
							i = a.globals,
							s = a.user,
							c = Math.floor(Date.now() / 1e3);
						if (pe.includes(n.type) || !s || !s.loggedIn) return r;
						var l = i.ACHIEVEMENTS.LIST.map((function(e) {
								return !e.seasonID || !e.active || e.startStamp <= c && e.endStamp > c || (e.active = 0), "nitromath" !== i.SITE || e.seasonID || (e.active = 0), e
							})),
							u = s.achievementsUnclaimed,
							p = s.achievements,
							f = [];
						if (l.forEach((function(e) {
								p && p.filter((function(t) {
									return t[0] === e.achievementID
								})).length > 0 || u && u.filter((function(t) {
									return t[0] === e.achievementID
								})).length > 0 || me(e, s) && f.push(e)
							})), !f.length) return r;
						if (!s.backOffAchievementsCheckUntil || s.backOffAchievementsCheckUntil < c) {
							var d = f.find((function(e) {
								return e.extraTier
							}));
							d && s.level > s.lastExtraLevel && de(o, d.achievementID);
							var m = f.filter((function(e) {
								return !e.extraTier
							})).map((function(e) {
								return e.achievementID
							}));
							m.length && fe(o, m)
						}
						return r
					}
				}
			}), (function(e) {
				return function(t) {
					return function(n) {
						var r, o = t(n),
							a = e.dispatch,
							i = e.getState(),
							s = i.globals,
							c = i.user,
							l = i.team;
						if (we.includes(n.type) || !c || !c.loggedIn && !Ee) return o;
						r = c.loggedIn ? c.userID : te.a.get("ntuserguest");
						var u = Se({
								servers: window.NTSERVERS(),
								userID: r,
								user: c,
								globals: s,
								dispatch: a
							}),
							p = s.ONE_WAY_FRIEND_IDS || [];
						switch (n.type) {
							case Y.c.APPLY_FOR_TEAM:
								u.applyToTeam(n.payload);
								break;
							case Y.c.JOIN_TEAM:
								u.joinedTeam(n.payload.teamID);
								break;
							case L.b.LOG_OUT:
								u.end();
								break;
							case q.c.REQUEST_FRIEND:
								u.requestFriend(n.payload);
								break;
							case Y.c.NEW_MOTD:
							case Y.c.NEW_STATUS_UPDATE:
								u.teamMotd(n.payload);
								break;
							case Y.c.INVITE_TO_TEAM:
								u.inviteToTeam(n.payload.userID, n.payload.teamID);
								break;
							case Y.c.ACCEPT_TEAM_APPLICATION:
								u.acceptToTeam(n.payload.teamID, [n.payload.userID]);
								break;
							case Y.c.ACCEPT_ALL_TEAM_APPLICATIONS:
								u.acceptToTeam(n.payload.teamID, n.payload.userIDs);
								break;
							case q.c.ACCEPT_REQUEST:
								p.includes(n.payload.userID) || u.acceptFriends([n.payload.userID]);
								break;
							case q.c.INVITE_FRIENDS_TO_RACE:
								u.raceInvites(n.payload);
								break;
							case M.d.SET_SEND_CASH_SUCCESSFUL:
								u.sendCash(n.payload.recipient, parseInt(n.payload.amount));
								break;
							case q.c.ACCEPT_ALL_REQUESTS:
								var f = n.payload.filter((function(e) {
									return !p.includes(e)
								}));
								f.length && u.acceptFriends(f);
								break;
							case Y.c.SET_TEAM_DETAILS:
								c.loggedIn && Oe && c.teamID !== l.info.teamID && l && l.info && 1 !== c.offline && u.teamCheckin(l.info.teamID)
						}
						return o
					}
				}
			}), (function(e) {
				return function(t) {
					return function(n) {
						var r, o = t(n),
							a = e.getState().notifications,
							i = n.payload && n.payload.user;
						return "persist/REHYDRATE" !== n.type || null == i || !i.loggedIn || "na" === (null == i ? void 0 : i.captchaStatus) || "passed" === (null == i ? void 0 : i.captchaStatus) || null !== (r = a.notifications) && void 0 !== r && r.filter((function(e) {
							return "captcha" === e.type
						})).length || e.dispatch($.b.addNotifications([{
							type: "captcha",
							captchaStatus: i.captchaStatus
						}])), o
					}
				}
			}))));
		window.__getPath = function() {
			return window.location.pathname.toLowerCase()
		}, window.__navigateTo = function(e) {
			var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
			if (!t) return window.location.href = e;
			Ue.flush().then((function() {
				window.location.href = e
			}))
		}, window.__reloadPage = function() {
			Ue.flush().then((function() {
				window.location.reload()
			}))
		};
		var Ue = Object(j.c)(Me),
			Fe = n(27),
			Be = n(3),
			qe = n.n(Be);

		function He(e) {
			return (He = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}

		function Ge(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function Ve(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
			}
		}

		function ze(e, t) {
			return (ze = Object.setPrototypeOf || function(e, t) {
				return e.__proto__ = t, e
			})(e, t)
		}

		function We(e) {
			var t = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
				} catch (e) {
					return !1
				}
			}();
			return function() {
				var n, r = Xe(e);
				if (t) {
					var o = Xe(this).constructor;
					n = Reflect.construct(r, arguments, o)
				} else n = r.apply(this, arguments);
				return Ye(this, n)
			}
		}

		function Ye(e, t) {
			return !t || "object" !== He(t) && "function" != typeof t ? function(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}(e) : t
		}

		function Xe(e) {
			return (Xe = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
				return e.__proto__ || Object.getPrototypeOf(e)
			})(e)
		}
		var Ke = function(e) {
			! function(e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						writable: !0,
						configurable: !0
					}
				}), t && ze(e, t)
			}(i, e);
			var t, n, r, a = We(i);

			function i() {
				return Ge(this, i), a.apply(this, arguments)
			}
			return t = i, (n = [{
				key: "render",
				value: function() {
					var e, t, n, r;
					return "404" === this.props.errorType ? (e = "404 Error", t = "Oops! Are you lost, racer?", n = o.a.createElement("span", null, "The page you were trying to get to can't be found! You may have taken a wrong turn from the race track because you are now in the ", o.a.createElement("span", {
						className: "twb"
					}, "404 Error "), "system."), r = o.a.createElement("div", {
						className: "error-sidebar"
					}, o.a.createElement("img", {
						className: "error-floater",
						src: "/dist/site/images/pages/404/stop.png"
					}))) : (e = "Oops!", t = "Travis Broke Something", n = o.a.createElement("span", null, "Nitro Type encountered an internal error which has been forwarded to the development team for investigation. If you encounter this screen again, please log out and back in."), r = o.a.createElement("div", {
						className: "error-sidebar"
					}, o.a.createElement("img", {
						className: "error-floater",
						src: "/dist/site/images/pages/404/stop-lg.png"
					}))), o.a.createElement("section", {
						className: "card card--b card--shadow card--o card--grit card--f mtxs mbm "
					}, o.a.createElement("div", {
						className: qe()("error", {
							"error--404": "404" === this.props.errorType
						}, {
							"error--noinfo": "404" !== this.props.errorType
						})
					}, o.a.createElement("div", {
						className: "error-fg"
					}, o.a.createElement("div", {
						className: "g"
					}, o.a.createElement("div", {
						className: "g-b g-b--6of12"
					}, o.a.createElement("div", {
						className: "well--p well--l_p pll"
					}, o.a.createElement("div", {
						className: "split split--stack dhf"
					}, o.a.createElement("div", {
						className: "split-cell"
					}, o.a.createElement("div", {
						className: "error-title db"
					}, o.a.createElement("div", {
						className: "error-titleGlitch"
					}, o.a.createElement("div", {
						className: "error-titleCopy"
					}, e)), o.a.createElement("div", {
						className: "error-titleGlitch"
					}, o.a.createElement("div", {
						className: "error-titleCopy"
					}, e)), o.a.createElement("div", {
						className: "error-titleGlitch"
					}, o.a.createElement("div", {
						className: "error-titleCopy"
					}, e))), o.a.createElement("h1", {
						className: "tc-i mbs tbs dib"
					}, t), o.a.createElement("p", {
						className: "tc-ts"
					}, n)), o.a.createElement("div", {
						className: "split-cell"
					}, o.a.createElement("div", {
						className: "split split--flag split--eq well well--xxl well--t"
					}, o.a.createElement("div", {
						className: "split-cell"
					}, o.a.createElement("a", {
						className: "btn btn--primary btn--fw",
						href: "/"
					}, "Back To Homepage"))))))), o.a.createElement("div", {
						className: "g-b g-b--6of12 plm"
					}, r))), o.a.createElement("div", {
						className: "error-bg"
					}, o.a.createElement("div", {
						className: "error-orb"
					}), o.a.createElement("div", {
						className: "error-car"
					}))))
				}
			}]) && Ve(t.prototype, n), r && Ve(t, r), i
		}(o.a.PureComponent);
		Ke.defaultProps = {
			errorType: ""
		};
		var Je = Ke;

		function Qe(e) {
			return (Qe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}

		function Ze(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function $e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
			}
		}

		function et(e, t) {
			return (et = Object.setPrototypeOf || function(e, t) {
				return e.__proto__ = t, e
			})(e, t)
		}

		function tt(e) {
			var t = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
				} catch (e) {
					return !1
				}
			}();
			return function() {
				var n, r = rt(e);
				if (t) {
					var o = rt(this).constructor;
					n = Reflect.construct(r, arguments, o)
				} else n = r.apply(this, arguments);
				return nt(this, n)
			}
		}

		function nt(e, t) {
			return !t || "object" !== Qe(t) && "function" != typeof t ? function(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}(e) : t
		}

		function rt(e) {
			return (rt = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
				return e.__proto__ || Object.getPrototypeOf(e)
			})(e)
		}
		var ot = function(e) {
				! function(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							writable: !0,
							configurable: !0
						}
					}), t && et(e, t)
				}(i, e);
				var t, n, r, a = tt(i);

				function i() {
					var e;
					Ze(this, i);
					for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
					return (e = a.call.apply(a, [this].concat(n))).state = {
						error: null
					}, e
				}
				return t = i, (n = [{
					key: "componentDidMount",
					value: function() {
						var e = parseInt(localStorage.lastErrorStamp || 0),
							t = Math.floor(Date.now() / 1e3);
						e && t - e <= 15 ? (localStorage.removeItem("player_token"), localStorage.removeItem("persist:nt"), localStorage.loggedOutFromMultipleErrors = t) : localStorage.lastErrorStamp = t
					}
				}, {
					key: "render",
					value: function() {
						return o.a.createElement("div", {
							className: "wrapper"
						}, o.a.createElement("div", {
							className: "structure structure--noAds"
						}, o.a.createElement("div", {
							className: "structure-content row row--o"
						}, o.a.createElement("div", {
							className: "structure-main"
						}, o.a.createElement("div", {
							className: "main cell cell--s"
						}, o.a.createElement("div", {
							className: "well well--t well--s"
						}, o.a.createElement(Je, {
							errorType: "bug",
							error: this.state.error
						})))))))
					}
				}]) && $e(t.prototype, n), r && $e(t, r), i
			}(o.a.PureComponent),
			at = n(106),
			it = n.n(at),
			st = function(e) {
				var t, n = e.user,
					r = (null === (t = e.globals.SPECIAL_EVENT) || void 0 === t ? void 0 : t.name) || "none";
				if (parseInt(te.a.get("st-id")) || te.a.set("st-id", Math.floor(12 * Math.random()) + 1, Object(ne.i)({
						expires: 365
					})), n.loggedIn) {
					var o, a, i = "(page:undefined)";
					return r && null !== (o = e.globals.SPECIAL_EVENT) && void 0 !== o && o.cars && (i = e.globals.SPECIAL_EVENT.cars.includes(n.carID) ? "yes" : "no"), {
						id: "s" + n.userID,
						gaId: n.userID,
						email: n.email ? it()(n.email) : "none",
						accountType: n.accountType,
						membership: n.membership,
						inClass: 1 === n.inClass ? "in class" : "individual",
						accountAge: n.createdStamp,
						logins: n.logins,
						level: n.level,
						team: n.teamID ? "".concat(n.teamName, " (").concat(n.teamID, ")") : void 0,
						teamRole: n.teamID ? n.teamRole : void 0,
						friends: n.totalFriends,
						money: n.money,
						moneySpent: n.moneySpent,
						longestSession: n.longestSession,
						totalCars: n.totalCars,
						soldCars: n.soldCars,
						nitros: n.nitros,
						nitrosUsed: n.nitrosUsed,
						mysteryBoxes: n.mysteryBoxes,
						eventCar: i,
						averageSpeed: n.avgSpeed,
						averageAccuracy: parseFloat(n.avgAcc),
						currentStreak: n.sessionRaces,
						lastRace: n.lastConsecRace,
						raceSounds: n.raceSounds,
						firstPlaceWins: n.placed1,
						secondPlaceWins: n.placed2,
						thirdPlaceWins: n.placed3,
						playTime: n.playTime,
						racesPlayed: n.racesPlayed,
						currentCar: n.carID,
						eventActive: r,
						organization: null === (a = n.classData) || void 0 === a ? void 0 : a.districtName,
						loggedIn: "logged in",
						lastLogin: n.lastLogin,
						splitTestId: te.a.get("st-id")
					}
				}
				return {
					id: "anon",
					averageSpeed: n.avgSpeed,
					averageAccuracy: n.avgAcc,
					racesPlayed: n.racesPlayed,
					currentStreak: n.sessionRaces,
					lastRace: n.lastConsecRace,
					raceSounds: n.raceSounds,
					firstPlaceWins: n.placed1,
					secondPlaceWins: n.placed2,
					thirdPlaceWins: n.placed3,
					playTime: n.playTime,
					eventActive: r,
					loggedIn: "logged out",
					splitTestId: te.a.get("st-id")
				}
			},
			ct = function(e) {
				return new Promise((function(t) {
					t(st(e))
				}))
			},
			lt = n(7),
			ut = {
				initialize: function(e) {
					if ("race" !== e.page && ("production" === e.env || location.search.match(/production/))) {
						window._kiq = window._kiq || [], "logged in" === e.loggedIn && window._kiq.push(["identify", e.id]), window._kiq.push(["set", e]);
						var t = document,
							n = t.getElementsByTagName("script")[0],
							r = t.createElement("script");
						r.type = "text/javascript", r.async = !0, r.src = "https://cl.qualaroo.com/ki.js/75336/hB_.js", n.parentNode.insertBefore(r, n)
					}
				}
			};

		function pt(e) {
			return (pt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}

		function ft(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function dt(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
			}
		}

		function mt(e, t) {
			return (mt = Object.setPrototypeOf || function(e, t) {
				return e.__proto__ = t, e
			})(e, t)
		}

		function ht(e) {
			var t = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
				} catch (e) {
					return !1
				}
			}();
			return function() {
				var n, r = gt(e);
				if (t) {
					var o = gt(this).constructor;
					n = Reflect.construct(r, arguments, o)
				} else n = r.apply(this, arguments);
				return yt(this, n)
			}
		}

		function yt(e, t) {
			return !t || "object" !== pt(t) && "function" != typeof t ? function(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}(e) : t
		}

		function gt(e) {
			return (gt = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
				return e.__proto__ || Object.getPrototypeOf(e)
			})(e)
		}
		var vt = function(e) {
				! function(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							writable: !0,
							configurable: !0
						}
					}), t && mt(e, t)
				}(a, e);
				var t, n, r, o = ht(a);

				function a() {
					var e;
					ft(this, a);
					for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
					return (e = o.call.apply(o, [this].concat(n))).state = {
						ready: !1
					}, e
				}
				return t = a, (n = [{
					key: "componentDidMount",
					value: function() {
						var e = this;
						ct(this.props.state).then((function(t) {
							lt.a.initialize(t, !0);
							var n = "",
								r = location.pathname.split("/");
							e.setState({
								ready: !0
							});
							var o = {};
							"race" === r[1] && (n = "standard", 0 === e.props.state.user.avgSpeed ? n = "qualifying" : r[2] && (n = "friend"), o["racing-race-type"] = n), lt.a.pageViewEvent(o);
							for (var a = {
									page: r[1] || "index",
									raceType: n,
									env: NTGLOBALS.ENV
								}, i = 0, s = Object.keys(t); i < s.length; i++) {
								var c = s[i];
								"(page:undefined)" !== t[c] && (a[c] = t[c])
							}
							ut.initialize(a)
						}))
					}
				}, {
					key: "render",
					value: function() {
						return this.state.ready ? this.props.children : null
					}
				}]) && dt(t.prototype, n), r && dt(t, r), a
			}(o.a.PureComponent),
			bt = Object(i.d)(vt),
			wt = Object(a.b)((function(e) {
				return {
					state: e
				}
			}), (function(e) {
				return {}
			}))(bt),
			Et = n(24);

		function Ot(e) {
			return (Ot = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}

		function St(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function _t(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
			}
		}

		function Tt(e, t) {
			return (Tt = Object.setPrototypeOf || function(e, t) {
				return e.__proto__ = t, e
			})(e, t)
		}

		function Nt(e) {
			var t = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
				} catch (e) {
					return !1
				}
			}();
			return function() {
				var n, r = At(e);
				if (t) {
					var o = At(this).constructor;
					n = Reflect.construct(r, arguments, o)
				} else n = r.apply(this, arguments);
				return Ct(this, n)
			}
		}

		function Ct(e, t) {
			return !t || "object" !== Ot(t) && "function" != typeof t ? function(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}(e) : t
		}

		function At(e) {
			return (At = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
				return e.__proto__ || Object.getPrototypeOf(e)
			})(e)
		}
		var It = function(e) {
				! function(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							writable: !0,
							configurable: !0
						}
					}), t && Tt(e, t)
				}(i, e);
				var t, n, r, a = Nt(i);

				function i() {
					var e;
					St(this, i);
					for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
					return (e = a.call.apply(a, [this].concat(n))).goToShop = function(t) {
						t && t.preventDefault(), e.props.setEventModalVisibility(!1), setTimeout((function() {
							return window.__navigateTo("/shop")
						}), 200)
					}, e.goToRace = function(t) {
						t && t.preventDefault(), e.props.setEventModalVisibility(!1), setTimeout((function() {
							return window.__navigateTo("/race")
						}), 200)
					}, e
				}
				return t = i, (n = [{
					key: "render",
					value: function() {
						return this.props.event && "object" === Ot(this.props.event) ? o.a.createElement("div", {
							className: "row ptxxl pbl"
						}, o.a.createElement("img", {
							src: "/dist/site/images/themes/events/xmaxx/modal-top.png",
							className: "event-modal-top"
						}), o.a.createElement("h2", {
							className: "tc-i tac mbf event-modal-title"
						}, "Looks like you aren’t using an event car!"), o.a.createElement("div", {
							className: "event-modal-car"
						}, o.a.createElement("img", {
							src: "https://assets.nitrotype.com/cars/161_large_1",
							className: "event-car"
						})), o.a.createElement("p", {
							className: "tc-i tac well well--b well--l event-modal-copy"
						}, "Head to the shop and buy the ", o.a.createElement("strong", null, "B.U.S."), " to join the event! You’ll score ", o.a.createElement("span", {
							className: "event-modal-highlight"
						}, this.props.event.bonus, " more cash and XP"), " until ", o.a.createElement("strong", null, oe()(this.props.event.endDate).format("MMMM Do, YYYY"))), o.a.createElement("div", {
							className: "split split--flag split--eq"
						}, o.a.createElement("div", {
							className: "split-cell"
						}, o.a.createElement("a", {
							className: "btn btn--primary btn--fw",
							onClick: this.goToShop
						}, "Go to the Shop")), o.a.createElement("div", {
							className: "split-cell"
						}, o.a.createElement("a", {
							className: "btn btn--light btn--outline btn--fw",
							onClick: this.goToRace
						}, "Race Without Event Car")))) : null
					}
				}]) && _t(t.prototype, n), r && _t(t, r), i
			}(o.a.PureComponent),
			kt = Object(Et.a)(Object(a.b)((function(e) {
				return {
					event: e.globals.SPECIAL_EVENT
				}
			}), (function(e) {
				return {
					setEventModalVisibility: function(t) {
						return e(M.b.setEventModalVisibility(t))
					}
				}
			}))(It));

		function Rt(e) {
			return (Rt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}

		function Pt(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function jt(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
			}
		}

		function Dt(e, t) {
			return (Dt = Object.setPrototypeOf || function(e, t) {
				return e.__proto__ = t, e
			})(e, t)
		}

		function xt(e) {
			var t = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
				} catch (e) {
					return !1
				}
			}();
			return function() {
				var n, r = Mt(e);
				if (t) {
					var o = Mt(this).constructor;
					n = Reflect.construct(r, arguments, o)
				} else n = r.apply(this, arguments);
				return Lt(this, n)
			}
		}

		function Lt(e, t) {
			return !t || "object" !== Rt(t) && "function" != typeof t ? function(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}(e) : t
		}

		function Mt(e) {
			return (Mt = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
				return e.__proto__ || Object.getPrototypeOf(e)
			})(e)
		}
		var Ut = function(e) {
				! function(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							writable: !0,
							configurable: !0
						}
					}), t && Dt(e, t)
				}(i, e);
				var t, n, r, a = xt(i);

				function i() {
					var e;
					Pt(this, i);
					for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
					return (e = a.call.apply(a, [this].concat(n))).componentDidMount = function() {
						e.props.event && "object" === Rt(e.props.event) && document.body.classList.add("event", "event--".concat(e.props.event.name))
					}, e.closeEventModal = function() {
						return null
					}, e
				}
				return t = i, (n = [{
					key: "render",
					value: function() {
						return o.a.createElement(o.a.Fragment, null, this.props.children, o.a.createElement(kt, {
							visible: this.props.eventModalVisible,
							theme: "event",
							hideClose: !0,
							teardown: this.closeEventModal
						}))
					}
				}]) && jt(t.prototype, n), r && jt(t, r), i
			}(o.a.PureComponent),
			Ft = Object(a.b)((function(e) {
				return {
					event: e.globals.SPECIAL_EVENT,
					eventModalVisible: !0 === e.user.event_modal_visible
				}
			}), (function(e) {
				return {
					setEventModalVisibility: function(t) {
						return e(M.b.setEventModalVisibility(t))
					}
				}
			}))(Ut),
			Bt = n(26);

		function qt(e) {
			return (qt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}

		function Ht(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function Gt(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
			}
		}

		function Vt(e, t) {
			return (Vt = Object.setPrototypeOf || function(e, t) {
				return e.__proto__ = t, e
			})(e, t)
		}

		function zt(e) {
			var t = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
				} catch (e) {
					return !1
				}
			}();
			return function() {
				var n, r = Yt(e);
				if (t) {
					var o = Yt(this).constructor;
					n = Reflect.construct(r, arguments, o)
				} else n = r.apply(this, arguments);
				return Wt(this, n)
			}
		}

		function Wt(e, t) {
			return !t || "object" !== qt(t) && "function" != typeof t ? function(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}(e) : t
		}

		function Yt(e) {
			return (Yt = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
				return e.__proto__ || Object.getPrototypeOf(e)
			})(e)
		}
		var Xt = function(e) {
			! function(e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						writable: !0,
						configurable: !0
					}
				}), t && Vt(e, t)
			}(i, e);
			var t, n, r, a = zt(i);

			function i() {
				var e;
				Ht(this, i);
				for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
				return (e = a.call.apply(a, [this].concat(n))).state = {
					isClosing: !1
				}, e.closeGrowl = function(t) {
					t && t.preventDefault(), t && t.stopPropagation(), e.props.GTMAction && lt.a.trackEvent("growl", e.props.GTMAction, "close"), e.setState({
						isClosing: !0
					}), setTimeout((function() {
						e.setState({
							isClosing: !1
						}), e.props.close()
					}), e.props.hideDelay)
				}, e.goToDestination = function(t) {
					t && t.preventDefault(), e.props.close(), e.props.GTMAction && lt.a.trackEvent("growl", e.props.GTMAction, "confirm"), e.props.destination && window.__navigateTo(e.props.destination || "/")
				}, e
			}
			return t = i, (n = [{
				key: "render",
				value: function() {
					var e, t;
					return "default" === this.props.theme ? (e = "growl--a growl--flag", t = "btn--primary") : "cash" === this.props.theme ? (e = "growl--b growl--cash", t = "btn--tertiary") : "founder" === this.props.theme && (e = "growl--c growl--founder", t = "btn--gold"), o.a.createElement("div", {
						onClick: this.goToDestination,
						className: qe()("growl", {
							"is-exiting": this.state.isClosing
						}, e)
					}, o.a.createElement("p", {
						className: "growl-copy mbxs"
					}, this.props.content), o.a.createElement("div", {
						className: "split split--eq split--flag"
					}, o.a.createElement("div", {
						className: "split-cell"
					}), !!this.props.buttonText && o.a.createElement("div", {
						className: "split-cell"
					}, o.a.createElement("a", {
						href: this.props.destination,
						className: qe()("btn btn--fw btn--compact btn--xs", t)
					}, this.props.buttonText))), this.props.showCloseButton && o.a.createElement("button", {
						className: "growl-close",
						type: "button",
						onClick: this.closeGrowl
					}, o.a.createElement("svg", {
						className: "icon icon-x--s"
					}, o.a.createElement("use", {
						xmlnsXlink: "http://www.w3.org/1999/xlink",
						xlinkHref: "/dist/site/images/icons/icons.css.svg#icon-x"
					}))))
				}
			}]) && Gt(t.prototype, n), r && Gt(t, r), i
		}(r.Component);
		Xt.defaultProps = {
			theme: "default",
			hideDelay: 500,
			showCloseButton: !0
		};
		var Kt = Xt;

		function Jt(e) {
			return (Jt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}

		function Qt(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function Zt(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
			}
		}

		function $t(e, t) {
			return ($t = Object.setPrototypeOf || function(e, t) {
				return e.__proto__ = t, e
			})(e, t)
		}

		function en(e) {
			var t = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
				} catch (e) {
					return !1
				}
			}();
			return function() {
				var n, r = nn(e);
				if (t) {
					var o = nn(this).constructor;
					n = Reflect.construct(r, arguments, o)
				} else n = r.apply(this, arguments);
				return tn(this, n)
			}
		}

		function tn(e, t) {
			return !t || "object" !== Jt(t) && "function" != typeof t ? function(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}(e) : t
		}

		function nn(e) {
			return (nn = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
				return e.__proto__ || Object.getPrototypeOf(e)
			})(e)
		}
		var rn = function(e) {
			! function(e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						writable: !0,
						configurable: !0
					}
				}), t && $t(e, t)
			}(i, e);
			var t, n, r, a = en(i);

			function i() {
				var e;
				Qt(this, i);
				for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
				return (e = a.call.apply(a, [this].concat(n)))._timeBeforeRemovingGrowlsFromPersistence = 1e4, e.state = {
					closingGrowls: !1
				}, e.closeAll = function(t) {
					t && t.preventDefault(), e.setState({
						closingGrowls: !0
					}), e.props.remove(), setTimeout((function() {
						e.setState({
							closingGrowls: !1
						}), e.props.close()
					}), 500)
				}, e.renderGrowls = function() {
					return e.props.notifications.map((function(t, n) {
						var r;
						if (n >= 3) return null;
						var a = 1 === e.props.notifications.length;
						switch (null !== (r = t.data) && void 0 !== r && r.worldID && t.data.app === e.props.site && e.props.worldDescriptions.find((function(e) {
								return e.worldID === t.data.worldID
							})), t.data.type) {
							case "team-invite":
								return o.a.createElement(Kt, {
									key: "growl".concat(n),
									title: "Team Invite!",
									theme: "default",
									content: "You've been invited to a team!",
									buttonText: "View Invite",
									destination: "/team",
									close: e.closeAll,
									GTMAction: "view invite",
									showCloseButton: a
								});
							case "team-application":
								return o.a.createElement(Kt, {
									key: "growl".concat(n),
									title: "New Team Application!",
									theme: "default",
									content: "Someone has just applied to join your team!",
									buttonText: location.pathname.toLowerCase() === "/team/".concat(t.data.tag.toLowerCase()) ? void 0 : "View Application",
									destination: location.pathname.toLowerCase() === "/team/".concat(t.data.tag.toLowerCase()) ? void 0 : "/team/".concat(t.data.tag),
									close: e.closeAll,
									GTMAction: "view application",
									showCloseButton: a
								});
							case "team-member-joined":
								return o.a.createElement(Kt, {
									key: "growl".concat(n),
									title: "New Team Member!",
									theme: "default",
									content: o.a.createElement("span", null, "Player ", o.a.createElement("span", {
										className: "growl-user"
									}, t.data.displayName || t.data.username), " just joined your team!"),
									buttonText: location.pathname.toLowerCase() === "/team/".concat(t.data.tag.toLowerCase()) ? void 0 : "Go To Team",
									destination: location.pathname.toLowerCase() === "/team/".concat(t.data.tag.toLowerCase()) ? void 0 : "/team/".concat(t.data.tag),
									close: e.closeAll,
									GTMAction: "view team",
									showCloseButton: a
								});
							case "team-accept":
								return o.a.createElement(Kt, {
									key: "growl".concat(n),
									title: "Team Application Accepted!",
									theme: "default",
									content: o.a.createElement("span", null, o.a.createElement("span", {
										className: "growl-user"
									}, "Team ", o.a.createElement("span", {
										style: {
											color: "#".concat(t.data.tagColor)
										}
									}, "[", t.data.tag, "]"), " ", t.data.name), " has accepted your application!"),
									buttonText: location.pathname.toLowerCase() === "/team/".concat(t.data.tag.toLowerCase()) ? void 0 : "Visit Your New Team",
									destination: location.pathname.toLowerCase() === "/team/".concat(t.data.tag.toLowerCase()) ? void 0 : "/team/".concat(t.data.tag),
									close: e.closeAll,
									GTMAction: "accept team",
									showCloseButton: a
								});
							case "friend-accept":
								return o.a.createElement(Kt, {
									key: "growl".concat(n),
									title: "Friend Request Accepted",
									theme: "default",
									content: o.a.createElement("span", null, o.a.createElement("span", {
										className: "growl-user"
									}, !!t.data.tag && o.a.createElement("span", {
										style: {
											color: "#".concat(t.data.tagColor)
										}
									}, "[", t.data.tag, "]"), t.data.displayName || t.data.username), " has accepted your friend request!"),
									buttonText: "View Friends",
									destination: "/friends",
									close: e.closeAll,
									GTMAction: "view friends",
									showCloseButton: a
								});
							case "friend-requests":
								return o.a.createElement(Kt, {
									key: "growl".concat(n),
									title: "New Friend Request",
									theme: "default",
									content: "You have a new friend request!",
									buttonText: "View Requests",
									destination: "/friends",
									close: e.closeAll,
									GTMAction: "view requests",
									showCloseButton: a
								});
							case "race-invite":
								if (e.props.offline) return null;
								if (t.data.app && e.props.site !== t.data.app) {
									var i = "nitrotype" === t.data.app ? "race" : "play",
										s = "nitrotype" === t.data.app ? "race" : "match";
									return o.a.createElement(Kt, {
										key: "growl".concat(n),
										title: "Invited to Race on ".concat(e.props.sites[t.data.app], "!"),
										theme: "default",
										content: o.a.createElement("span", null, o.a.createElement("span", {
											className: "growl-user"
										}, !!t.data.tag && o.a.createElement("span", {
											style: {
												color: "#".concat(t.data.tagColor)
											}
										}, "[", t.data.tag, "]"), t.data.displayName || t.data.username), " has invited you to a ", e.props.sites[t.data.app], " ", s, ". If you accept, you will be automatically logged into ", e.props.sites[t.data.app], "."),
										buttonText: "Go to ".concat(e.props.sites[t.data.app]),
										destination: "/api/v2/auth/cross-site/".concat(t.data.app, "?redirect=") + encodeURI("/".concat(i, "/").concat(t.data.username)) + "&token=" + localStorage.getItem("player_token"),
										close: e.closeAll,
										GTMAction: "join race",
										showCloseButton: a
									})
								}
								var c = "nitrotype" === e.props.site ? "race" : "play",
									l = "nitrotype" === t.data.app ? "race" : "a match";
								return o.a.createElement(Kt, {
									key: "growl".concat(n),
									title: "Invited to ".concat(l, "!"),
									theme: "default",
									content: o.a.createElement("span", null, o.a.createElement("span", {
										className: "growl-user"
									}, !!t.data.tag && o.a.createElement("span", {
										style: {
											color: "#".concat(t.data.tagColor)
										}
									}, "[", t.data.tag, "]"), t.data.displayName ? t.data.displayName : t.data.username, !!t.data.avgSpeed && "nitrotype" === e.props.site && "(".concat(Math.round(t.data.avgSpeed), " WPM)")), " has invited you to ", l, "!"),
									buttonText: "Join Friend",
									destination: "/".concat(c, "/").concat(t.data.username),
									close: e.closeAll,
									GTMAction: "join race",
									showCloseButton: a
								});
							case "sent-cash":
								return o.a.createElement(Kt, {
									key: "growl".concat(n),
									title: "You've Been Sent Money",
									theme: "cash",
									content: o.a.createElement("span", {
										className: "as-nitro-cash"
									}, o.a.createElement("span", {
										className: "growl-user"
									}, !!t.data.tag && o.a.createElement("span", {
										style: {
											color: "#".concat(t.data.tagColor)
										}
									}, "[", t.data.tag, "]"), t.data.displayName ? t.data.displayName : t.data.username), " just sent you $", Object(ne.g)(t.data.amount), "!"),
									buttonText: "Claim Your Gift",
									destination: "/garage",
									close: e.closeAll,
									GTMAction: "claim your gift",
									showCloseButton: a
								})
						}
					}))
				}, e
			}
			return t = i, (n = [{
				key: "componentDidMount",
				value: function() {
					var e = this;
					setTimeout((function() {
						e.props.remove()
					}), this._timeBeforeRemovingGrowlsFromPersistence)
				}
			}, {
				key: "render",
				value: function() {
					return o.a.createElement("div", {
						className: qe()("growls", {
							"is-exiting": this.state.closingGrowls
						}),
						key: "growls"
					}, this.renderGrowls(), this.props.notifications.length > 1 && o.a.createElement("button", {
						type: "button",
						className: "btn btn--primary btn--thin growl-closeAll",
						onClick: this.closeAll
					}, "Dismiss All Notifications"))
				}
			}]) && Zt(t.prototype, n), r && Zt(t, r), i
		}(o.a.PureComponent);
		rn.defaultProps = {
			notifications: [],
			site: "nitrotype",
			offline: !1
		};
		var on = Object(a.b)((function(e) {
			return {
				site: e.globals.SITE,
				sites: e.globals.SITES,
				offline: !!e.user.offline,
				worldDescriptions: e.globals.WORLD_DESCRIPTIONS
			}
		}), (function(e) {
			return {}
		}))(rn);

		function an(e) {
			return o.a.createElement("div", {
				className: "modal modal--error modal--s is-active"
			}, o.a.createElement("div", {
				className: "modal-container"
			}, o.a.createElement("div", {
				className: "modal-body row row--m well--l_p tc-i tac"
			}, o.a.createElement("svg", {
				className: "icon icon-warn modal-alertIcon"
			}, o.a.createElement("use", {
				xmlnsXlink: "http://www.w3.org/1999/xlink",
				xlinkHref: "/dist/site/images/icons/icons.css.svg#icon-warn"
			})), o.a.createElement("h3", {
				className: "mbxs"
			}, "Logout Warning"), o.a.createElement("p", {
				className: "mbf"
			}, "Your session will expire soon. Do you want to stay logged in?"), o.a.createElement("div", {
				className: "well well--t well--m"
			}, o.a.createElement("button", {
				onClick: function() {
					e.remove(), setTimeout((function() {
						window.__reloadPage()
					}), 0)
				},
				type: "button",
				className: "btn btn--light btn--thin"
			}, "Yes, I'm here!")))), o.a.createElement("div", {
				className: "modal-overlay"
			}))
		}
		var sn = n(75),
			cn = n(37),
			ln = n(42);

		function un(e) {
			return (un = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}

		function pn(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function fn(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
			}
		}

		function dn(e, t) {
			return (dn = Object.setPrototypeOf || function(e, t) {
				return e.__proto__ = t, e
			})(e, t)
		}

		function mn(e) {
			var t = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
				} catch (e) {
					return !1
				}
			}();
			return function() {
				var n, r = yn(e);
				if (t) {
					var o = yn(this).constructor;
					n = Reflect.construct(r, arguments, o)
				} else n = r.apply(this, arguments);
				return hn(this, n)
			}
		}

		function hn(e, t) {
			return !t || "object" !== un(t) && "function" != typeof t ? function(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}(e) : t
		}

		function yn(e) {
			return (yn = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
				return e.__proto__ || Object.getPrototypeOf(e)
			})(e)
		}
		var gn = function(e) {
			! function(e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						writable: !0,
						configurable: !0
					}
				}), t && dn(e, t)
			}(i, e);
			var t, n, r, a = mn(i);

			function i() {
				var e;
				pn(this, i);
				for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
				return (e = a.call.apply(a, [this].concat(n))).goToAchievementGroup = function(t) {
					e.props.remove();
					var n = e.props.achievementGroups.find((function(e) {
						return e.id === t
					}));
					window.__navigateTo("/achievements/".concat(Object(ne.x)(n.name)))
				}, e
			}
			return t = i, (n = [{
				key: "render",
				value: function() {
					var e, t = this;
					if ("money" === this.props.achievement.reward.type) e = o.a.createElement("div", {
						className: "achievement-prize achievement-prize--money"
					}, o.a.createElement("div", {
						className: "tsxs ttu twn tc-ts achievement-prizeTitle"
					}, "Money"), o.a.createElement("div", {
						className: "tsl twn achievement-prizeCopy"
					}, "+", o.a.createElement("span", {
						className: "as-nitro-cash--prefix"
					}, o.a.createElement(ln.a, {
						amount: this.props.achievement.reward.value
					}))));
					else if ("car" === this.props.achievement.reward.type) e = o.a.createElement("div", {
						className: "achievement-prize achievement-prize--car"
					}, o.a.createElement("img", {
						className: "achievement-car",
						src: this.props.getCarUrl(this.props.achievement.reward.value, !0, 0)
					}), o.a.createElement("div", {
						className: "tss twn achievement-prizeCopy"
					}, this.props.getCarName(this.props.achievement.reward.value)));
					else {
						if ("loot" !== this.props.achievement.reward.type) return console.error("Unknown Achievement Type!", this.props.achievement), !1;
						var n = this.props.loot.find((function(e) {
								return e.lootID === parseInt(t.props.achievement.reward.value)
							})),
							r = this.props.lootConfig[null == n ? void 0 : n.type];
						if (!n || !r) return console.warn("Achievement has invalid loot or config", {
							loot: n,
							config: r,
							achievement: this.props.achievement
						}), !1;
						if ("sticker" === n.type) e = o.a.createElement("div", {
							className: "achievement-prize achievement-prize--sticker"
						}, o.a.createElement("div", {
							className: "tsxs ttu twn achievement-prizeTitle"
						}, this.props.lootConfig[n.type].name), o.a.createElement("img", {
							className: "achievement-sticker well well--t well--xxs",
							src: n.options.src
						}));
						else if ("trail" === n.type) e = o.a.createElement("div", {
							className: "achievement-prize achievement-prize--sticker"
						}, o.a.createElement("div", {
							className: "tsxs ttu twn achievement-prizeTitle"
						}, this.props.lootConfig[n.type].name), o.a.createElement("img", {
							className: "achievement-sticker well well--t well--xxs",
							src: n.options.src
						}));
						else {
							if ("title" !== n.type) return !1;
							e = o.a.createElement("div", {
								className: "achievement-prize achievement-prize--title"
							}, o.a.createElement("div", {
								className: "tsxs ttu twn achievement-prizeTitle"
							}, this.props.lootConfig[n.type].name), o.a.createElement("div", {
								className: "tsm twn achievement-prizeCopy"
							}, '"', n.name, '"'))
						}
					}
					var a = this.props.achievementGroups.find((function(e) {
							return e.id === t.props.achievement.gid
						})),
						i = a && a.site,
						s = qe()("achievement achievement--".concat(i, " is-claimable link"), {
							"is-exiting": this.props.isClosing,
							"achievement--gold": this.props.achievement.rules.filter((function(e) {
								return "membership" === e.field && "gold" === e.value
							})).length > 0
						});
					return o.a.createElement("div", {
						className: s,
						onClick: function() {
							return t.goToAchievementGroup(t.props.achievement.gid)
						}
					}, o.a.createElement("div", {
						className: "achievement-achievement achievement-alert"
					}, o.a.createElement("div", {
						className: "achievement-badge-container"
					}, o.a.createElement("div", {
						className: "achievement-badge"
					}))), o.a.createElement("div", {
						className: " achievement-copy"
					}, o.a.createElement("div", {
						className: "achievement-name"
					}, this.props.achievement.name), o.a.createElement("div", {
						className: "achievement-description"
					}, this.props.achievement.desc)), e)
				}
			}]) && fn(t.prototype, n), r && fn(t, r), i
		}(o.a.PureComponent);

		function vn(e) {
			return (vn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}

		function bn() {
			return (bn = Object.assign || function(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = arguments[t];
					for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
				}
				return e
			}).apply(this, arguments)
		}

		function wn(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function En(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
			}
		}

		function On(e, t) {
			return (On = Object.setPrototypeOf || function(e, t) {
				return e.__proto__ = t, e
			})(e, t)
		}

		function Sn(e) {
			var t = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
				} catch (e) {
					return !1
				}
			}();
			return function() {
				var n, r = Tn(e);
				if (t) {
					var o = Tn(this).constructor;
					n = Reflect.construct(r, arguments, o)
				} else n = r.apply(this, arguments);
				return _n(this, n)
			}
		}

		function _n(e, t) {
			return !t || "object" !== vn(t) && "function" != typeof t ? function(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}(e) : t
		}

		function Tn(e) {
			return (Tn = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
				return e.__proto__ || Object.getPrototypeOf(e)
			})(e)
		}
		var Nn = [{
				position: "top-center",
				delay: 100,
				count: 30,
				speed: 15,
				angle: 270,
				spread: 120,
				particle: {
					type: "image",
					assets: ["/dist/site/images/particles/star-1.png", "/dist/site/images/particles/star-2.png", "/dist/site/images/particles/star-3.png"],
					gravity: 5,
					size: 20,
					fade: .75
				}
			}, {
				position: "top-center",
				delay: 700,
				count: 50,
				speed: 20,
				angle: 270,
				spread: 120,
				particle: {
					type: "image",
					assets: ["/dist/site/images/particles/star-1.png", "/dist/site/images/particles/star-2.png", "/dist/site/images/particles/star-3.png"],
					gravity: 5,
					size: 20,
					fade: .75
				}
			}, {
				position: "top-center",
				delay: 1200,
				count: 75,
				speed: 25,
				angle: 270,
				spread: 120,
				particle: {
					type: "image",
					assets: ["/dist/site/images/particles/star-1.png", "/dist/site/images/particles/star-2.png", "/dist/site/images/particles/star-3.png"],
					gravity: 5,
					size: 20,
					fade: .75
				}
			}],
			Cn = function(e) {
				! function(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							writable: !0,
							configurable: !0
						}
					}), t && On(e, t)
				}(i, e);
				var t, n, r, a = Sn(i);

				function i() {
					var e;
					wn(this, i);
					for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
					return (e = a.call.apply(a, [this].concat(n)))._timeBeforeRemovingGrowlsFromPersistence = 500, e.state = {
						closing: !1
					}, e.closeAchievements = function() {
						e.setState({
							closing: !0
						}), e.props.remove(), setTimeout((function() {
							e.setState({
								closing: !1
							}), e.props.close()
						}), 50)
					}, e.trackClick = function() {
						e.props.remove(), lt.a.trackEvent("growl", "view achievements", "confirm")
					}, e.renderAchievementRows = function() {
						return e.props.achievementsToShow.map((function(t) {
							var n = t.data[0];
							return e.props.achievements.find((function(e) {
								return e.achievementID === n
							}))
						})).map((function(t, n) {
							if (!(n >= 3)) return o.a.createElement(gn, bn({
								key: "achieve-".concat(t.achievementID)
							}, e.props, {
								achievement: t
							}))
						}))
					}, e
				}
				return t = i, (n = [{
					key: "componentDidMount",
					value: function() {
						var e = this;
						setTimeout((function() {
							e.props.remove()
						}), this._timeBeforeRemovingGrowlsFromPersistence)
					}
				}, {
					key: "render",
					value: function() {
						var e = this.renderAchievementRows();
						return o.a.createElement("div", {
							className: qe()("notifications notifications--ach", {
								"is-exiting": this.state.closing
							})
						}, o.a.createElement("div", {
							className: "cell cell--xs row row--o"
						}, o.a.createElement("div", {
							className: "notifications-header"
						}, o.a.createElement("div", {
							className: "notifications-headerTitle"
						}, "Achievement", !!e.length && "s", " Unlocked"), o.a.createElement(cn.a, {
							animations: Nn,
							animate: 300,
							render: function(e) {
								return o.a.createElement("img", bn({}, e, {
									src: "/dist/site/images/notifications/achievements-header.png",
									width: "248",
									height: "162"
								}))
							}
						}), o.a.createElement("button", {
							type: "button",
							className: "modal-close",
							onClick: this.closeAchievements
						}, o.a.createElement("svg", {
							className: "icon icon-x"
						}, o.a.createElement("use", {
							xmlnsXlink: "http://www.w3.org/1999/xlink",
							xlinkHref: "/dist/site/images/icons/icons.css.svg#icon-x"
						})))), o.a.createElement("div", {
							className: "notifications-cards"
						}, e), o.a.createElement("div", {
							className: "tac well well--t"
						}, o.a.createElement("a", {
							onClick: this.trackClick,
							className: "btn btn--primary",
							href: "/achievements"
						}, "View Achievements"))))
					}
				}]) && En(t.prototype, n), r && En(t, r), i
			}(o.a.PureComponent),
			An = Object(a.b)((function(e) {
				var t, n;
				return {
					loot: e.globals.LOOT,
					lootConfig: e.globals.LOOT_CONFIG,
					achievements: H.b.parseAchievements(null === (t = e.globals.ACHIEVEMENTS) || void 0 === t ? void 0 : t.LIST),
					achievementGroups: H.b.parseAchievementGroups(null === (n = e.globals.ACHIEVEMENTS) || void 0 === n ? void 0 : n.GROUPS),
					getCarName: function(t) {
						return B.b.getCarName(e, t)
					},
					getCarUrl: function(t, n, r) {
						return B.b.getCarUrl(e, t, n, r)
					},
					getAchievementNameByID: function(e, t) {
						return H.b.getAchievementNameByID(e, t)
					}
				}
			}), (function(e) {
				return {}
			}))(Cn),
			In = n(25),
			kn = n(23),
			Rn = n(76);

		function Pn(e) {
			return (Pn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}

		function jn(e, t) {
			return function(e) {
				if (Array.isArray(e)) return e
			}(e) || function(e, t) {
				if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
				var n = [],
					r = !0,
					o = !1,
					a = void 0;
				try {
					for (var i, s = e[Symbol.iterator](); !(r = (i = s.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
				} catch (e) {
					o = !0, a = e
				} finally {
					try {
						r || null == s.return || s.return()
					} finally {
						if (o) throw a
					}
				}
				return n
			}(e, t) || function(e, t) {
				if (!e) return;
				if ("string" == typeof e) return Dn(e, t);
				var n = Object.prototype.toString.call(e).slice(8, -1);
				"Object" === n && e.constructor && (n = e.constructor.name);
				if ("Map" === n || "Set" === n) return Array.from(e);
				if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Dn(e, t)
			}(e, t) || function() {
				throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
			}()
		}

		function Dn(e, t) {
			(null == t || t > e.length) && (t = e.length);
			for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
			return r
		}

		function xn(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function Ln(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
			}
		}

		function Mn(e, t) {
			return (Mn = Object.setPrototypeOf || function(e, t) {
				return e.__proto__ = t, e
			})(e, t)
		}

		function Un(e) {
			var t = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
				} catch (e) {
					return !1
				}
			}();
			return function() {
				var n, r = Bn(e);
				if (t) {
					var o = Bn(this).constructor;
					n = Reflect.construct(r, arguments, o)
				} else n = r.apply(this, arguments);
				return Fn(this, n)
			}
		}

		function Fn(e, t) {
			return !t || "object" !== Pn(t) && "function" != typeof t ? function(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}(e) : t
		}

		function Bn(e) {
			return (Bn = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
				return e.__proto__ || Object.getPrototypeOf(e)
			})(e)
		}
		var qn = function(e) {
				! function(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							writable: !0,
							configurable: !0
						}
					}), t && Mn(e, t)
				}(i, e);
				var t, n, r, a = Un(i);

				function i() {
					var e;
					xn(this, i);
					for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
					return (e = a.call.apply(a, [this].concat(n))).state = {
						allItems: null,
						immediateItems: null
					}, e.navigateTo = function(t, n) {
						t && t.preventDefault(), e.props.close(), window.__navigateTo(n)
					}, e.onUpgradeToNitroGold = function(t) {
						e.navigateTo(t, "/store/gold")
					}, e.close = function(t) {
						e.navigateTo(t, e.url)
					}, e.createItemBlock = function(t) {
						var n = t.type,
							r = t.value;
						if ("car" === n) {
							var a = e.props.getCarUrl(r);
							return o.a.createElement("div", {
								className: "modal--gold-sale--item-display-car"
							}, o.a.createElement("img", {
								src: a
							}))
						}
						if ("loot" === n) {
							var i = e.props.loot.find((function(e) {
								return e.lootID === r
							}));
							if ("title" === i.type) return o.a.createElement("div", {
								className: "modal--gold-sale--item-display-".concat(i.type)
							}, '"', i.name, '"');
							var s = i.options.src;
							return o.a.createElement("div", {
								className: "modal--gold-sale--item-display-".concat(i.type)
							}, o.a.createElement("img", {
								src: s
							}))
						}
						if ("money" === n) return o.a.createElement("div", {
							className: "modal--gold-sale--item-display-cash"
						}, o.a.createElement(kn.a, {
							rarity: "cash",
							size: "small",
							className: "as-nitro-cash--prefix"
						}, "$", r / 1e3, "K"))
					}, e
				}
				return t = i, (n = [{
					key: "componentDidMount",
					value: function() {
						localStorage.nextGoldSaleModal = this.getNextGoldModalShowing(), this.initializeItemDisplay(), this.props.remove()
					}
				}, {
					key: "getNextGoldModalShowing",
					value: function() {
						var e = oe()(),
							t = oe()().startOf("day").add(17, "hours");
						return (e.isAfter(t) ? oe()().endOf("day") : t).valueOf()
					}
				}, {
					key: "initializeItemDisplay",
					value: function() {
						var e = this.props,
							t = e.seasonRewards,
							n = e.user,
							r = null == t ? void 0 : t.filter((function(e) {
								return e.rules.find((function(e) {
									return "membership" === e.field && "gold" === e.value
								}))
							})),
							o = r.filter((function(e) {
								var t = e.rules.find((function(e) {
									return "level" === e.field
								}));
								return !t || (null == t ? void 0 : t.value) <= n.level
							}));
						Object(Rn.a)(r), this.setState({
							allItems: r,
							immediateItems: o
						})
					}
				}, {
					key: "renderHeading",
					value: function() {
						var e = this.props.hasSale;
						return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
							className: "modal--gold-sale--title"
						}, e ? "Sale: " : "", " Get 1 Year of Nitro Gold!"), o.a.createElement("div", {
							className: "modal--gold-sale--sub-title"
						}, "Instant loot unlocks, 1 year of all Season rewards, and so much more."))
					}
				}, {
					key: "renderItems",
					value: function() {
						for (var e, t = this.state.allItems, n = t.length, r = 0, a = [], i = 0; i < 5; i++) {
							e = [], a.push(e);
							for (var s = 0; s < 10; s++) {
								var c = t[++r % n],
									l = this.props.getItemRarity(c.reward),
									u = this.createItemBlock(c.reward),
									p = "-".concat(2.5 * s, "s"),
									f = "".concat(25, "s ").concat(i % 2 == 0 ? "reverse" : "", " forwards infinite linear"),
									d = {
										animation: "animate_gold_modal__pan_item ".concat(f),
										animationDelay: p
									},
									m = {
										animation: "animate_gold_modal__flip_item ".concat(f),
										animationDelay: p
									};
								e.push(o.a.createElement("div", {
									key: "item_".concat(i, "_").concat(s),
									className: "modal--gold-sale--items-display-item",
									style: d
								}, o.a.createElement("div", {
									className: "modal--gold-sale--items-display-item-content",
									style: m
								}, o.a.createElement(kn.a, {
									type: "frame",
									rarity: l
								}, u))))
							}
						}
						return o.a.createElement("div", {
							className: "modal--gold-sale--items-display"
						}, a.map((function(e, t) {
							return o.a.createElement("div", {
								key: t,
								className: "modal--gold-sale--items-display-strip column-".concat(t)
							}, e)
						})))
					}
				}, {
					key: "renderFeatures",
					value: function() {
						return [
							["bonus-cash", o.a.createElement(o.a.Fragment, null, "20% more Nitro Cash from every race! This seriously adds up!")],
							["exclusive-rewards", o.a.createElement(o.a.Fragment, null, "Instantly unlock The XCelsior, and earn new ", o.a.createElement("strong", null, "exclusive cars every season."))],
							["season-pass", o.a.createElement(o.a.Fragment, null, "Unlock the full reward track for every season! ", o.a.createElement("strong", null, "More loot, more cash, more often."))],
							["no-ads", o.a.createElement(o.a.Fragment, null, "Enjoy distraction-free high-performance play with ", o.a.createElement("strong", null, "no ads"), " across the site!")],
							["gold-sponsor", o.a.createElement(o.a.Fragment, null, "Everywhere you go, you sport the elite Nitro badge")],
							["early-access", o.a.createElement(o.a.Fragment, null, "You'll get early access to exciting new Nitro features!")],
							["send-cash", o.a.createElement(o.a.Fragment, null, "Only gold members can send cash to other players. Spread the wealth!")]
						].map((function(e) {
							var t = jn(e, 2),
								n = t[0],
								r = t[1];
							return o.a.createElement("div", {
								key: n,
								className: "modal--gold-sale--feature ".concat(n)
							}, r)
						}))
					}
				}, {
					key: "renderCTA",
					value: function() {
						var e = this.props,
							t = e.baseProduct,
							n = e.hasSale,
							r = t.price,
							a = t.salePrice,
							i = parseFloat(a) > 0,
							s = qe()("modal--gold-sale--action", {
								"with-sale": n && i
							});
						return o.a.createElement(o.a.Fragment, null, n && o.a.createElement("div", {
							className: "modal--gold-sale--summary"
						}, "Sale ends December 31st -- ", o.a.createElement("strong", null, "Hurry now!")), o.a.createElement("div", {
							className: s
						}, o.a.createElement("button", {
							className: "btn btn--fw btn--gold btn--xl twb",
							onClick: this.onUpgradeToNitroGold
						}, o.a.createElement("span", null, "Unlock Nitro Gold"), o.a.createElement("span", {
							className: "modal--gold-sale--base-price"
						}, "$", r), n && o.a.createElement("span", {
							className: "modal--gold-sale--sale-price"
						}, "$", a))))
					}
				}, {
					key: "render",
					value: function() {
						if (!this.state.allItems) return null;
						var e = qe()("modal--gold-sale", {
							"has-sale": this.props.hasSale
						});
						return o.a.createElement("div", {
							className: "modal-body"
						}, o.a.createElement("div", {
							className: e
						}, o.a.createElement("div", {
							className: "modal--gold-sale--banner"
						}, o.a.createElement("div", {
							className: "modal--gold-sale--banner-container"
						}, "NITRO GOLD HOLIDAY SALE")), o.a.createElement("div", {
							className: "modal--gold-sale--content"
						}, o.a.createElement("div", {
							className: "modal--gold-sale--heading"
						}, this.renderHeading()), o.a.createElement("div", {
							className: "modal--gold-sale--items"
						}, this.renderItems()), o.a.createElement("div", {
							className: "modal--gold-sale--features"
						}, this.renderFeatures()), o.a.createElement("div", {
							className: "modal--gold-sale--cta"
						}, this.renderCTA()))))
					}
				}]) && Ln(t.prototype, n), r && Ln(t, r), i
			}(o.a.PureComponent),
			Hn = Object(Et.a)(qn),
			Gn = Object(a.b)((function(e) {
				var t, n = In.a.getCurrentSeason(e.globals.ACTIVE_SEASONS),
					r = H.b.parseAchievements(null === (t = e.globals.ACHIEVEMENTS) || void 0 === t ? void 0 : t.LIST).filter((function(e) {
						return e.gid === n.achievementGroupID
					})),
					o = Object.values(e.globals.PRODUCTS).filter((function(e) {
						return "upgrade" === e.type
					})).sort((function(e, t) {
						return parseFloat(e.price) - parseFloat(t.price)
					})),
					a = o[0],
					i = 1e3 * (null == a ? void 0 : a.saleEnds) > Date.now();
				return {
					user: e.user,
					getCarUrl: function(t, n, r) {
						return B.b.getCarUrl(e, t, n, r)
					},
					getItemRarity: function() {
						for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
						return B.b.getItemRarity.apply(B.b, [e].concat(n))
					},
					seasonRewards: r,
					loot: e.globals.LOOT,
					hasSale: i,
					currentSeason: n,
					baseProduct: a,
					allProducts: o
				}
			}), (function(e) {
				return {}
			}))(Hn),
			Vn = n(36);

		function zn(e) {
			return (zn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}

		function Wn(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function Yn(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
			}
		}

		function Xn(e, t) {
			return (Xn = Object.setPrototypeOf || function(e, t) {
				return e.__proto__ = t, e
			})(e, t)
		}

		function Kn(e) {
			var t = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
				} catch (e) {
					return !1
				}
			}();
			return function() {
				var n, r = Qn(e);
				if (t) {
					var o = Qn(this).constructor;
					n = Reflect.construct(r, arguments, o)
				} else n = r.apply(this, arguments);
				return Jn(this, n)
			}
		}

		function Jn(e, t) {
			return !t || "object" !== zn(t) && "function" != typeof t ? function(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}(e) : t
		}

		function Qn(e) {
			return (Qn = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
				return e.__proto__ || Object.getPrototypeOf(e)
			})(e)
		}
		var Zn = function(e) {
				! function(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							writable: !0,
							configurable: !0
						}
					}), t && Xn(e, t)
				}(i, e);
				var t, n, r, a = Kn(i);

				function i() {
					var e;
					Wn(this, i);
					for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
					return (e = a.call.apply(a, [this].concat(n))).close = function(t) {
						t && t.preventDefault(), e.props.closeModal(), window.__navigateTo("/season")
					}, e.renderSeasonItems = function() {
						return e.props.seasonRewards.map((function(t, n) {
							var r, a, i = e.props.getItemRarity(t.reward),
								s = parseInt(t.reward.value),
								c = "car" === (null === (r = t.reward) || void 0 === r ? void 0 : r.type) ? e.props.getCarUrl(s, !0) : null === (a = t.reward.options) || void 0 === a ? void 0 : a.src;
							return c ? o.a.createElement("div", {
								className: "modal--season-announcement--rewards",
								key: "reward_".concat(n)
							}, o.a.createElement("div", {
								className: "modal--season-announcement--rewards--item"
							}, o.a.createElement(kn.a, {
								rarity: i,
								type: "frame"
							}, o.a.createElement("img", {
								src: c
							})))) : null
						}))
					}, e
				}
				return t = i, (n = [{
					key: "componentDidMount",
					value: function() {
						this.props.mute("seasonAnnouncement")
					}
				}, {
					key: "render",
					value: function() {
						var e;
						return null === (e = this.props.currentSeason) || void 0 === e || e.name, o.a.createElement("div", {
							className: "modal--season-announcement"
						}, o.a.createElement("div", {
							className: "modal-extra"
						}), o.a.createElement("div", {
							className: "modal-body ptm pbl"
						}, o.a.createElement("div", {
							className: "modal-info row row--m tac well well--t well--xs"
						}, o.a.createElement("img", {
							src: "/dist/site/images/themes/seasons/fast-food/modal-logo.png",
							className: "season--fast-food--modal-logo"
						})), o.a.createElement("div", {
							className: "modal-info row row--m tac well well--t well--xs"
						}, o.a.createElement("p", {
							className: "modal-desc mbf"
						}, "The new season starts now! Head on over to the Seasons Page to check out all the sweet loot you can earn.")), o.a.createElement("marquee", null, o.a.createElement("div", {
							className: "df well well--l"
						}, this.renderSeasonItems())), o.a.createElement("div", {
							className: "row row--m"
						}, o.a.createElement("div", {
							className: "split split--eq split--flag"
						}, o.a.createElement("div", {
							className: "split-cell"
						}, o.a.createElement("button", {
							onClick: this.close,
							type: "button",
							className: "modal-btn-learn-more btn btn--light btn--outline btn--fw"
						}, "Learn More")), o.a.createElement("div", {
							className: "split-cell"
						}, o.a.createElement("button", {
							onClick: this.close,
							type: "button",
							className: "modal-btn-view-rewards btn btn--primary btn--fw"
						}, "View Season Rewards"))))))
					}
				}]) && Yn(t.prototype, n), r && Yn(t, r), i
			}(o.a.PureComponent),
			$n = Object(Et.a)(Zn),
			er = Object(a.b)((function(e) {
				var t, n = In.a.getCurrentSeason(e.globals.ACTIVE_SEASONS);
				return {
					getCarUrl: function(t, n, r) {
						return B.b.getCarUrl(e, t, n, r)
					},
					getItemRarity: function() {
						for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
						return B.b.getItemRarity.apply(B.b, [e].concat(n))
					},
					seasonRewards: H.b.parseAchievements(null === (t = e.globals.ACHIEVEMENTS) || void 0 === t ? void 0 : t.LIST).filter((function(e) {
						return e.gid === n.achievementGroupID
					})),
					loot: e.globals.LOOT,
					currentSeason: n,
					theme: "season-announcement"
				}
			}), (function(e) {
				return {}
			}))($n),
			tr = n(41),
			nr = n(51);

		function rr(e) {
			return (rr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}

		function or() {
			return (or = Object.assign || function(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = arguments[t];
					for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
				}
				return e
			}).apply(this, arguments)
		}

		function ar(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function ir(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
			}
		}

		function sr(e, t) {
			return (sr = Object.setPrototypeOf || function(e, t) {
				return e.__proto__ = t, e
			})(e, t)
		}

		function cr(e) {
			var t = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
				} catch (e) {
					return !1
				}
			}();
			return function() {
				var n, r = ur(e);
				if (t) {
					var o = ur(this).constructor;
					n = Reflect.construct(r, arguments, o)
				} else n = r.apply(this, arguments);
				return lr(this, n)
			}
		}

		function lr(e, t) {
			return !t || "object" !== rr(t) && "function" != typeof t ? function(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}(e) : t
		}

		function ur(e) {
			return (ur = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
				return e.__proto__ || Object.getPrototypeOf(e)
			})(e)
		}
		var pr = function(e) {
			! function(e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						writable: !0,
						configurable: !0
					}
				}), t && sr(e, t)
			}(i, e);
			var t, n, r, a = cr(i);

			function i() {
				var e;
				ar(this, i);
				for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
				return (e = a.call.apply(a, [this].concat(n))).state = {
					closing: !1,
					equipped: !1,
					activeRewardIndex: 0,
					showingLockedRewards: !1
				}, e.claim = function(t) {
					null == t || t.preventDefault(), e.state.activeRewardIndex + 1 >= e.props.rewards.length ? e.state.closing || e.setState({
						closing: !0
					}, (function() {
						setTimeout((function() {
							e.props.close()
						}), 250)
					})) : e.setState((function(e) {
						return {
							activeRewardIndex: e.activeRewardIndex + 1,
							equipped: !1
						}
					}))
				}, e.showLockedRewards = function(t) {
					t && t.preventDefault(), e.setState({
						showingLockedRewards: !0
					})
				}, e.equip = function(t) {
					t.preventDefault();
					var n = e.props.rewards[e.state.activeRewardIndex].reward,
						r = parseInt(n.value),
						o = "loot" === n.type ? e.props.loot.find((function(e) {
							return e.lootID === r
						})).type : n.type;
					"sticker" !== o && e.setState({
						equipped: !0
					}), "sticker" === o ? window.__navigateTo("/garage/customizer/stickers") : e.props.equipLoot([{
						id: r,
						type: o
					}])
				}, e.renderEquipArea = function() {
					var t, n, r = e.props.rewards[e.state.activeRewardIndex],
						a = "loot" === r.reward.type ? r.reward.lootType : r.reward.type;
					e.props.loggedIn && "basic" === e.props.membership && (n = !0), t = "money" === a ? null : e.state.equipped ? o.a.createElement("div", {
						className: "g-b g-b--6of12 tac"
					}, o.a.createElement("div", {
						className: "bucket bucket--xs bucket--c tc-emerald dif"
					}, o.a.createElement("div", {
						className: "bucket-media por"
					}, o.a.createElement("svg", {
						className: "icon icon-check"
					}, o.a.createElement("use", {
						xmlnsXlink: "http://www.w3.org/1999/xlink",
						xlinkHref: "/dist/site/images/icons/icons.css.svg#icon-check"
					}))), o.a.createElement("div", {
						className: "bucket-content tss twb"
					}, "Your reward was equipped!"))) : o.a.createElement("div", {
						className: "g-b g-b--6of12 tac"
					}, o.a.createElement("button", {
						type: "button",
						className: "btn btn--outline btn--light btn--fw",
						onClick: e.equip
					}, "sticker" === a ? "View Loot Page" : "Equip"));
					var i = "Claim and Close";
					return e.state.activeRewardIndex + 1 < e.props.rewards.length ? i = "View Next Reward" : e.state.activeRewardIndex >= e.props.rewards.length || e.state.showingLockedRewards ? i = "Close" : n && (i = "Next"), o.a.createElement("div", {
						className: "takeoverTemp-actionsBtns g g--flag g--c"
					}, t, o.a.createElement("div", {
						className: "g-b g-b--6of12"
					}, o.a.createElement("button", {
						type: "button",
						className: "btn btn--primary btn--fw",
						onClick: n ? e.showLockedRewards : e.claim
					}, i)))
				}, e.renderLockedRewards = function() {
					var t = [];
					return e.state.showingLockedRewards && (t = e.props.earnedButLockedRewards.map((function(t) {
						var n = e.props.getItemRarity(t.reward);
						switch (t.reward.type) {
							case "car":
								return o.a.createElement("div", {
									key: "car-".concat(t.achievementID),
									className: "takeoverTemp-reward"
								}, o.a.createElement(kn.a, {
									type: "frame",
									rarity: n
								}, o.a.createElement("div", {
									className: "takeoverTemp-rewardVis"
								}, o.a.createElement("img", {
									src: e.props.getCarUrl(t.reward.value, !0)
								}))));
							case "loot":
								var r = e.props.loot.find((function(e) {
									return e.lootID === parseInt(t.reward.value)
								}));
								return "title" === r.type ? o.a.createElement("div", {
									key: "title-".concat(t.achievementID),
									className: "takeoverTemp-reward"
								}, o.a.createElement(kn.a, {
									type: "frame",
									rarity: n
								}, o.a.createElement("div", {
									className: "takeoverTemp-rewardVis"
								}, o.a.createElement("div", {
									className: "takeoverTemp-rewardVisTitleCopy"
								}, '"', r.name, '"'), o.a.createElement("img", {
									src: "/dist/site/images/pages/season/season-takeover-title.png",
									className: "db takeoverTemp-rewardVisTitleImage"
								})))) : o.a.createElement("div", {
									key: "loot-".concat(t.achievementID),
									className: "takeoverTemp-reward"
								}, o.a.createElement(kn.a, {
									type: "frame",
									rarity: n
								}, o.a.createElement("div", {
									className: "takeoverTemp-rewardVis"
								}, o.a.createElement("img", {
									src: r.options.src,
									className: "db"
								}))));
							case "money":
								return o.a.createElement("div", {
									key: "money-".concat(t.achievementID),
									className: "takeoverTemp-reward"
								}, o.a.createElement(kn.a, {
									type: "frame",
									rarity: n
								}, o.a.createElement("div", {
									className: "takeoverTemp-rewardVis"
								}, o.a.createElement(kn.a, {
									rarity: "cash",
									size: "large",
									className: "as-nitro-cash--prefix"
								}, "$", Number(t.reward.value).toLocaleString()), o.a.createElement("img", {
									src: "/dist/site/images/pages/season/season-takeover-cash.2.png",
									className: "db takeoverTemp-rewardVisCashImage"
								}))))
						}
					}))), o.a.createElement("div", {
						className: qe()("takeoverTemp-fg takeoverTemp-fg--upgrade", {
							dn: !e.state.showingLockedRewards
						})
					}, o.a.createElement("div", {
						className: "takeoverTemp-header bucket bucket--start bucket--shrink bucket--flag bucket--xs mhc"
					}, o.a.createElement("div", {
						className: "bucket-media"
					}, o.a.createElement("svg", {
						className: "upgrade-icon",
						viewBox: "0 0 110 83",
						fill: "none",
						xmlns: "http://www.w3.org/2000/svg"
					}, o.a.createElement("path", {
						fillRule: "evenodd",
						clipRule: "evenodd",
						d: "M109.854.272949H27.7792l-.0001.00071H.181885L20.965 33.992l-9.8085 48.5355h81.0067L109.854.272949z",
						fill: "url(#icon0_linear)"
					}), o.a.createElement("path", {
						d: "M83.8795 17.5894l-9.3712 47.621H61.5225L48.0681 43.0326l-4.3509 22.1778H28.3217l9.3712-47.621h12.9858l13.4544 22.1778 4.3509-22.1778h15.3955z",
						fill: "url(#icon1_linear)"
					}), o.a.createElement("defs", null, o.a.createElement("linearGradient", {
						id: "icon0_linear",
						x1: "20.3338",
						y1: ".272924",
						x2: "106.998",
						y2: "54.9138",
						gradientUnits: "userSpaceOnUse"
					}, o.a.createElement("stop", {
						stopColor: "#FFD747"
					}), o.a.createElement("stop", {
						offset: ".614583",
						stopColor: "#B18B00"
					}), o.a.createElement("stop", {
						offset: ".750827",
						stopColor: "#C4A227"
					}), o.a.createElement("stop", {
						offset: ".961326",
						stopColor: "#E6C652"
					})), o.a.createElement("linearGradient", {
						id: "icon1_linear",
						x1: "56.3537",
						y1: "25.8285",
						x2: "52.3257",
						y2: "62.9101",
						gradientUnits: "userSpaceOnUse"
					}, o.a.createElement("stop", null), o.a.createElement("stop", {
						offset: ".906077",
						stopColor: "#846700"
					}))))), o.a.createElement("div", {
						className: "bucket-content"
					}, o.a.createElement("div", {
						className: "tss tsi twb ttu tc-lemon tlh-1"
					}, "Upgrade To"), o.a.createElement("svg", {
						className: "upgrade-logo well well--xs db",
						width: "428",
						height: "47",
						fill: "none",
						xmlns: "http://www.w3.org/2000/svg",
						xmlnsXlink: "http://www.w3.org/1999/xlink"
					}, o.a.createElement("path", {
						d: "M51.5441 1.2002l-8.96 44.8h-10.432L17.368 21.4242l-4.928 24.576H.0240479l8.9600021-44.8H19.416l14.848 24.512 4.8641-24.512h12.416z",
						fill: "url(#paint0_linear)"
					}), o.a.createElement("path", {
						d: "M51.5441 1.2002l-8.96 44.8h-10.432L17.368 21.4242l-4.928 24.576H.0240479l8.9600021-44.8H19.416l14.848 24.512 4.8641-24.512h12.416z",
						fill: "url(#paint1_linear)"
					}), o.a.createElement("path", {
						d: "M51.5441 1.2002l-8.96 44.8h-10.432L17.368 21.4242l-4.928 24.576H.0240479l8.9600021-44.8H19.416l14.848 24.512 4.8641-24.512h12.416z",
						fill: "url(#pattern0)",
						fillOpacity: ".5"
					}), o.a.createElement("path", {
						d: "M60.5466 1.2002h12.6719l-8.96 44.8h-12.672l8.9601-44.8z",
						fill: "url(#paint2_linear)"
					}), o.a.createElement("path", {
						d: "M60.5466 1.2002h12.6719l-8.96 44.8h-12.672l8.9601-44.8z",
						fill: "url(#paint3_linear)"
					}), o.a.createElement("path", {
						d: "M60.5466 1.2002h12.6719l-8.96 44.8h-12.672l8.9601-44.8z",
						fill: "url(#pattern1)",
						fillOpacity: ".5"
					}), o.a.createElement("path", {
						d: "M89.722 11.2482h-13.76l2.048-10.048h40.128l-2.048 10.048h-13.696l-6.976 34.752H82.746l6.976-34.752z",
						fill: "url(#paint4_linear)"
					}), o.a.createElement("path", {
						d: "M89.722 11.2482h-13.76l2.048-10.048h40.128l-2.048 10.048h-13.696l-6.976 34.752H82.746l6.976-34.752z",
						fill: "url(#paint5_linear)"
					}), o.a.createElement("path", {
						d: "M89.722 11.2482h-13.76l2.048-10.048h40.128l-2.048 10.048h-13.696l-6.976 34.752H82.746l6.976-34.752z",
						fill: "url(#pattern2)",
						fillOpacity: ".5"
					}), o.a.createElement("path", {
						d: "M160.043 15.4722c0 4.096-1.088 7.6373-3.264 10.624-2.176 2.944-5.227 5.0987-9.152 6.464l7.616 13.44h-13.248l-6.656-11.904h-6.4l-2.368 11.904h-12.672l8.96-44.8h19.136c5.717 0 10.155 1.25867 13.312 3.776s4.736 6.016 4.736 10.496zm-12.8 1.216c0-1.8347-.619-3.2-1.856-4.096-1.237-.9387-2.965-1.408-5.184-1.408h-6.656l-2.688 13.12h7.552c2.816 0 4.992-.6613 6.528-1.984 1.536-1.3227 2.304-3.2 2.304-5.632z",
						fill: "url(#paint6_linear)"
					}), o.a.createElement("path", {
						d: "M160.043 15.4722c0 4.096-1.088 7.6373-3.264 10.624-2.176 2.944-5.227 5.0987-9.152 6.464l7.616 13.44h-13.248l-6.656-11.904h-6.4l-2.368 11.904h-12.672l8.96-44.8h19.136c5.717 0 10.155 1.25867 13.312 3.776s4.736 6.016 4.736 10.496zm-12.8 1.216c0-1.8347-.619-3.2-1.856-4.096-1.237-.9387-2.965-1.408-5.184-1.408h-6.656l-2.688 13.12h7.552c2.816 0 4.992-.6613 6.528-1.984 1.536-1.3227 2.304-3.2 2.304-5.632z",
						fill: "url(#paint7_linear)"
					}), o.a.createElement("path", {
						d: "M160.043 15.4722c0 4.096-1.088 7.6373-3.264 10.624-2.176 2.944-5.227 5.0987-9.152 6.464l7.616 13.44h-13.248l-6.656-11.904h-6.4l-2.368 11.904h-12.672l8.96-44.8h19.136c5.717 0 10.155 1.25867 13.312 3.776s4.736 6.016 4.736 10.496zm-12.8 1.216c0-1.8347-.619-3.2-1.856-4.096-1.237-.9387-2.965-1.408-5.184-1.408h-6.656l-2.688 13.12h7.552c2.816 0 4.992-.6613 6.528-1.984 1.536-1.3227 2.304-3.2 2.304-5.632z",
						fill: "url(#pattern3)",
						fillOpacity: ".5"
					}), o.a.createElement("path", {
						d: "M185.466 46.8962c-4.523 0-8.469-.832-11.84-2.496-3.328-1.664-5.909-3.9893-7.744-6.976-1.792-2.9867-2.688-6.4-2.688-10.24 0-5.12 1.173-9.728 3.52-13.824 2.389-4.096 5.696-7.296 9.92-9.6 4.267-2.304 9.109-3.456001 14.528-3.456001 4.523 0 8.448.832001 11.776 2.496001 3.371 1.664 5.952 3.98933 7.744 6.976 1.835 2.9867 2.752 6.4 2.752 10.24 0 5.12-1.195 9.728-3.584 13.824-2.347 4.096-5.653 7.296-9.92 9.6-4.224 2.304-9.045 3.456-14.464 3.456zm1.088-10.496c2.816 0 5.291-.704 7.424-2.112 2.133-1.408 3.776-3.2853 4.928-5.632 1.152-2.3893 1.728-5.0133 1.728-7.872 0-3.0293-.939-5.44-2.816-7.232-1.835-1.8347-4.416-2.752-7.744-2.752-2.816 0-5.291.704-7.424 2.112-2.133 1.408-3.776 3.3067-4.928 5.696-1.152 2.3467-1.728 4.9493-1.728 7.808 0 3.0293.917 5.4613 2.752 7.296 1.877 1.792 4.48 2.688 7.808 2.688z",
						fill: "url(#paint8_linear)"
					}), o.a.createElement("path", {
						d: "M185.466 46.8962c-4.523 0-8.469-.832-11.84-2.496-3.328-1.664-5.909-3.9893-7.744-6.976-1.792-2.9867-2.688-6.4-2.688-10.24 0-5.12 1.173-9.728 3.52-13.824 2.389-4.096 5.696-7.296 9.92-9.6 4.267-2.304 9.109-3.456001 14.528-3.456001 4.523 0 8.448.832001 11.776 2.496001 3.371 1.664 5.952 3.98933 7.744 6.976 1.835 2.9867 2.752 6.4 2.752 10.24 0 5.12-1.195 9.728-3.584 13.824-2.347 4.096-5.653 7.296-9.92 9.6-4.224 2.304-9.045 3.456-14.464 3.456zm1.088-10.496c2.816 0 5.291-.704 7.424-2.112 2.133-1.408 3.776-3.2853 4.928-5.632 1.152-2.3893 1.728-5.0133 1.728-7.872 0-3.0293-.939-5.44-2.816-7.232-1.835-1.8347-4.416-2.752-7.744-2.752-2.816 0-5.291.704-7.424 2.112-2.133 1.408-3.776 3.3067-4.928 5.696-1.152 2.3467-1.728 4.9493-1.728 7.808 0 3.0293.917 5.4613 2.752 7.296 1.877 1.792 4.48 2.688 7.808 2.688z",
						fill: "url(#paint9_linear)"
					}), o.a.createElement("path", {
						d: "M185.466 46.8962c-4.523 0-8.469-.832-11.84-2.496-3.328-1.664-5.909-3.9893-7.744-6.976-1.792-2.9867-2.688-6.4-2.688-10.24 0-5.12 1.173-9.728 3.52-13.824 2.389-4.096 5.696-7.296 9.92-9.6 4.267-2.304 9.109-3.456001 14.528-3.456001 4.523 0 8.448.832001 11.776 2.496001 3.371 1.664 5.952 3.98933 7.744 6.976 1.835 2.9867 2.752 6.4 2.752 10.24 0 5.12-1.195 9.728-3.584 13.824-2.347 4.096-5.653 7.296-9.92 9.6-4.224 2.304-9.045 3.456-14.464 3.456zm1.088-10.496c2.816 0 5.291-.704 7.424-2.112 2.133-1.408 3.776-3.2853 4.928-5.632 1.152-2.3893 1.728-5.0133 1.728-7.872 0-3.0293-.939-5.44-2.816-7.232-1.835-1.8347-4.416-2.752-7.744-2.752-2.816 0-5.291.704-7.424 2.112-2.133 1.408-3.776 3.3067-4.928 5.696-1.152 2.3467-1.728 4.9493-1.728 7.808 0 3.0293.917 5.4613 2.752 7.296 1.877 1.792 4.48 2.688 7.808 2.688z",
						fill: "url(#pattern4)",
						fillOpacity: ".5"
					}), o.a.createElement("path", {
						d: "M268.712 22.6402h11.2l-3.776 18.88c-2.304 1.7493-4.992 3.0933-8.064 4.032-3.029.896-6.229 1.344-9.6 1.344-4.523 0-8.491-.8107-11.904-2.432-3.371-1.664-5.995-3.9893-7.872-6.976-1.835-2.9867-2.752-6.4213-2.752-10.304 0-5.1627 1.195-9.7707 3.584-13.824 2.389-4.096 5.739-7.296 10.048-9.6 4.309-2.304 9.259-3.456001 14.848-3.456001 8.875 0 15.381 2.752001 19.52 8.256001l-9.088 7.168c-1.451-1.792-3.051-3.0507-4.8-3.776-1.749-.768-3.819-1.152-6.208-1.152-3.029 0-5.696.6827-8 2.048-2.261 1.3227-4.011 3.1573-5.248 5.504-1.237 2.3467-1.856 5.0133-1.856 8 0 3.072 1.003 5.5253 3.008 7.36 2.005 1.792 4.821 2.688 8.448 2.688 2.176 0 4.16-.3627 5.952-1.088l2.56-12.672z",
						fill: "url(#paint10_linear)"
					}), o.a.createElement("path", {
						d: "M268.712 22.6402h11.2l-3.776 18.88c-2.304 1.7493-4.992 3.0933-8.064 4.032-3.029.896-6.229 1.344-9.6 1.344-4.523 0-8.491-.8107-11.904-2.432-3.371-1.664-5.995-3.9893-7.872-6.976-1.835-2.9867-2.752-6.4213-2.752-10.304 0-5.1627 1.195-9.7707 3.584-13.824 2.389-4.096 5.739-7.296 10.048-9.6 4.309-2.304 9.259-3.456001 14.848-3.456001 8.875 0 15.381 2.752001 19.52 8.256001l-9.088 7.168c-1.451-1.792-3.051-3.0507-4.8-3.776-1.749-.768-3.819-1.152-6.208-1.152-3.029 0-5.696.6827-8 2.048-2.261 1.3227-4.011 3.1573-5.248 5.504-1.237 2.3467-1.856 5.0133-1.856 8 0 3.072 1.003 5.5253 3.008 7.36 2.005 1.792 4.821 2.688 8.448 2.688 2.176 0 4.16-.3627 5.952-1.088l2.56-12.672z",
						fill: "url(#paint11_linear)"
					}), o.a.createElement("path", {
						d: "M268.712 22.6402h11.2l-3.776 18.88c-2.304 1.7493-4.992 3.0933-8.064 4.032-3.029.896-6.229 1.344-9.6 1.344-4.523 0-8.491-.8107-11.904-2.432-3.371-1.664-5.995-3.9893-7.872-6.976-1.835-2.9867-2.752-6.4213-2.752-10.304 0-5.1627 1.195-9.7707 3.584-13.824 2.389-4.096 5.739-7.296 10.048-9.6 4.309-2.304 9.259-3.456001 14.848-3.456001 8.875 0 15.381 2.752001 19.52 8.256001l-9.088 7.168c-1.451-1.792-3.051-3.0507-4.8-3.776-1.749-.768-3.819-1.152-6.208-1.152-3.029 0-5.696.6827-8 2.048-2.261 1.3227-4.011 3.1573-5.248 5.504-1.237 2.3467-1.856 5.0133-1.856 8 0 3.072 1.003 5.5253 3.008 7.36 2.005 1.792 4.821 2.688 8.448 2.688 2.176 0 4.16-.3627 5.952-1.088l2.56-12.672z",
						fill: "url(#pattern5)",
						fillOpacity: ".5"
					}), o.a.createElement("path", {
						d: "M307.466 46.8962c-4.523 0-8.469-.832-11.84-2.496-3.328-1.664-5.909-3.9893-7.744-6.976-1.792-2.9867-2.688-6.4-2.688-10.24 0-5.12 1.173-9.728 3.52-13.824 2.389-4.096 5.696-7.296 9.92-9.6 4.267-2.304 9.109-3.456001 14.528-3.456001 4.523 0 8.448.832001 11.776 2.496001 3.371 1.664 5.952 3.98933 7.744 6.976 1.835 2.9867 2.752 6.4 2.752 10.24 0 5.12-1.195 9.728-3.584 13.824-2.347 4.096-5.653 7.296-9.92 9.6-4.224 2.304-9.045 3.456-14.464 3.456zm1.088-10.496c2.816 0 5.291-.704 7.424-2.112 2.133-1.408 3.776-3.2853 4.928-5.632 1.152-2.3893 1.728-5.0133 1.728-7.872 0-3.0293-.939-5.44-2.816-7.232-1.835-1.8347-4.416-2.752-7.744-2.752-2.816 0-5.291.704-7.424 2.112-2.133 1.408-3.776 3.3067-4.928 5.696-1.152 2.3467-1.728 4.9493-1.728 7.808 0 3.0293.917 5.4613 2.752 7.296 1.877 1.792 4.48 2.688 7.808 2.688z",
						fill: "url(#paint12_linear)"
					}), o.a.createElement("path", {
						d: "M307.466 46.8962c-4.523 0-8.469-.832-11.84-2.496-3.328-1.664-5.909-3.9893-7.744-6.976-1.792-2.9867-2.688-6.4-2.688-10.24 0-5.12 1.173-9.728 3.52-13.824 2.389-4.096 5.696-7.296 9.92-9.6 4.267-2.304 9.109-3.456001 14.528-3.456001 4.523 0 8.448.832001 11.776 2.496001 3.371 1.664 5.952 3.98933 7.744 6.976 1.835 2.9867 2.752 6.4 2.752 10.24 0 5.12-1.195 9.728-3.584 13.824-2.347 4.096-5.653 7.296-9.92 9.6-4.224 2.304-9.045 3.456-14.464 3.456zm1.088-10.496c2.816 0 5.291-.704 7.424-2.112 2.133-1.408 3.776-3.2853 4.928-5.632 1.152-2.3893 1.728-5.0133 1.728-7.872 0-3.0293-.939-5.44-2.816-7.232-1.835-1.8347-4.416-2.752-7.744-2.752-2.816 0-5.291.704-7.424 2.112-2.133 1.408-3.776 3.3067-4.928 5.696-1.152 2.3467-1.728 4.9493-1.728 7.808 0 3.0293.917 5.4613 2.752 7.296 1.877 1.792 4.48 2.688 7.808 2.688z",
						fill: "url(#paint13_linear)"
					}), o.a.createElement("path", {
						d: "M307.466 46.8962c-4.523 0-8.469-.832-11.84-2.496-3.328-1.664-5.909-3.9893-7.744-6.976-1.792-2.9867-2.688-6.4-2.688-10.24 0-5.12 1.173-9.728 3.52-13.824 2.389-4.096 5.696-7.296 9.92-9.6 4.267-2.304 9.109-3.456001 14.528-3.456001 4.523 0 8.448.832001 11.776 2.496001 3.371 1.664 5.952 3.98933 7.744 6.976 1.835 2.9867 2.752 6.4 2.752 10.24 0 5.12-1.195 9.728-3.584 13.824-2.347 4.096-5.653 7.296-9.92 9.6-4.224 2.304-9.045 3.456-14.464 3.456zm1.088-10.496c2.816 0 5.291-.704 7.424-2.112 2.133-1.408 3.776-3.2853 4.928-5.632 1.152-2.3893 1.728-5.0133 1.728-7.872 0-3.0293-.939-5.44-2.816-7.232-1.835-1.8347-4.416-2.752-7.744-2.752-2.816 0-5.291.704-7.424 2.112-2.133 1.408-3.776 3.3067-4.928 5.696-1.152 2.3467-1.728 4.9493-1.728 7.808 0 3.0293.917 5.4613 2.752 7.296 1.877 1.792 4.48 2.688 7.808 2.688z",
						fill: "url(#pattern6)",
						fillOpacity: ".5"
					}), o.a.createElement("path", {
						d: "M346.359 1.2002h12.672l-6.912 34.752h21.376l-2.048 10.048h-34.048l8.96-44.8z",
						fill: "url(#paint14_linear)"
					}), o.a.createElement("path", {
						d: "M346.359 1.2002h12.672l-6.912 34.752h21.376l-2.048 10.048h-34.048l8.96-44.8z",
						fill: "url(#paint15_linear)"
					}), o.a.createElement("path", {
						d: "M346.359 1.2002h12.672l-6.912 34.752h21.376l-2.048 10.048h-34.048l8.96-44.8z",
						fill: "url(#pattern7)",
						fillOpacity: ".5"
					}), o.a.createElement("path", {
						d: "M385.422 1.2002h19.456c4.608 0 8.597.768 11.968 2.304 3.37 1.49333 5.952 3.66933 7.744 6.528 1.834 2.816 2.752 6.144 2.752 9.984 0 5.2053-1.195 9.7707-3.584 13.696-2.347 3.9253-5.632 6.9547-9.856 9.088-4.224 2.1333-9.067 3.2-14.528 3.2h-22.912l8.96-44.8zm14.336 34.688c3.072 0 5.717-.64 7.936-1.92 2.261-1.3227 3.968-3.1147 5.12-5.376 1.152-2.304 1.728-4.9067 1.728-7.808 0-3.0293-.939-5.3547-2.816-6.976-1.878-1.664-4.63-2.496-8.256-2.496h-7.424l-4.864 24.576h8.576z",
						fill: "url(#paint16_linear)"
					}), o.a.createElement("path", {
						d: "M385.422 1.2002h19.456c4.608 0 8.597.768 11.968 2.304 3.37 1.49333 5.952 3.66933 7.744 6.528 1.834 2.816 2.752 6.144 2.752 9.984 0 5.2053-1.195 9.7707-3.584 13.696-2.347 3.9253-5.632 6.9547-9.856 9.088-4.224 2.1333-9.067 3.2-14.528 3.2h-22.912l8.96-44.8zm14.336 34.688c3.072 0 5.717-.64 7.936-1.92 2.261-1.3227 3.968-3.1147 5.12-5.376 1.152-2.304 1.728-4.9067 1.728-7.808 0-3.0293-.939-5.3547-2.816-6.976-1.878-1.664-4.63-2.496-8.256-2.496h-7.424l-4.864 24.576h8.576z",
						fill: "url(#paint17_linear)"
					}), o.a.createElement("path", {
						d: "M385.422 1.2002h19.456c4.608 0 8.597.768 11.968 2.304 3.37 1.49333 5.952 3.66933 7.744 6.528 1.834 2.816 2.752 6.144 2.752 9.984 0 5.2053-1.195 9.7707-3.584 13.696-2.347 3.9253-5.632 6.9547-9.856 9.088-4.224 2.1333-9.067 3.2-14.528 3.2h-22.912l8.96-44.8zm14.336 34.688c3.072 0 5.717-.64 7.936-1.92 2.261-1.3227 3.968-3.1147 5.12-5.376 1.152-2.304 1.728-4.9067 1.728-7.808 0-3.0293-.939-5.3547-2.816-6.976-1.878-1.664-4.63-2.496-8.256-2.496h-7.424l-4.864 24.576h8.576z",
						fill: "url(#pattern8)",
						fillOpacity: ".5"
					}), o.a.createElement("defs", null, o.a.createElement("linearGradient", {
						id: "paint0_linear",
						x1: "226.171",
						y1: "3.02904",
						x2: "226.171",
						y2: "49.067",
						gradientUnits: "userSpaceOnUse"
					}, o.a.createElement("stop", {
						offset: ".541667",
						stopColor: "#F3D056"
					}), o.a.createElement("stop", {
						offset: ".541767",
						stopColor: "#D7AC39"
					}), o.a.createElement("stop", {
						offset: ".927083",
						stopColor: "#FFC904"
					})), o.a.createElement("linearGradient", {
						id: "paint1_linear",
						x1: "289",
						y1: "-33.4",
						x2: "329.053",
						y2: "59.9926",
						gradientUnits: "userSpaceOnUse"
					}, o.a.createElement("stop", {
						offset: ".176983",
						stopColor: "#fff",
						stopOpacity: "0"
					}), o.a.createElement("stop", {
						offset: ".177083",
						stopColor: "#fff",
						stopOpacity: ".21"
					}), o.a.createElement("stop", {
						offset: ".640525",
						stopColor: "#FFEBAA",
						stopOpacity: ".6"
					}), o.a.createElement("stop", {
						offset: ".640625",
						stopColor: "#fff",
						stopOpacity: "0"
					})), o.a.createElement("linearGradient", {
						id: "paint2_linear",
						x1: "226.171",
						y1: "3.02904",
						x2: "226.171",
						y2: "49.067",
						gradientUnits: "userSpaceOnUse"
					}, o.a.createElement("stop", {
						offset: ".541667",
						stopColor: "#F3D056"
					}), o.a.createElement("stop", {
						offset: ".541767",
						stopColor: "#D7AC39"
					}), o.a.createElement("stop", {
						offset: ".927083",
						stopColor: "#FFC904"
					})), o.a.createElement("linearGradient", {
						id: "paint3_linear",
						x1: "289",
						y1: "-33.4",
						x2: "329.053",
						y2: "59.9926",
						gradientUnits: "userSpaceOnUse"
					}, o.a.createElement("stop", {
						offset: ".176983",
						stopColor: "#fff",
						stopOpacity: "0"
					}), o.a.createElement("stop", {
						offset: ".177083",
						stopColor: "#fff",
						stopOpacity: ".21"
					}), o.a.createElement("stop", {
						offset: ".640525",
						stopColor: "#FFEBAA",
						stopOpacity: ".6"
					}), o.a.createElement("stop", {
						offset: ".640625",
						stopColor: "#fff",
						stopOpacity: "0"
					})), o.a.createElement("linearGradient", {
						id: "paint4_linear",
						x1: "226.171",
						y1: "3.02904",
						x2: "226.171",
						y2: "49.067",
						gradientUnits: "userSpaceOnUse"
					}, o.a.createElement("stop", {
						offset: ".541667",
						stopColor: "#F3D056"
					}), o.a.createElement("stop", {
						offset: ".541767",
						stopColor: "#D7AC39"
					}), o.a.createElement("stop", {
						offset: ".927083",
						stopColor: "#FFC904"
					})), o.a.createElement("linearGradient", {
						id: "paint5_linear",
						x1: "289",
						y1: "-33.4",
						x2: "329.053",
						y2: "59.9926",
						gradientUnits: "userSpaceOnUse"
					}, o.a.createElement("stop", {
						offset: ".176983",
						stopColor: "#fff",
						stopOpacity: "0"
					}), o.a.createElement("stop", {
						offset: ".177083",
						stopColor: "#fff",
						stopOpacity: ".21"
					}), o.a.createElement("stop", {
						offset: ".640525",
						stopColor: "#FFEBAA",
						stopOpacity: ".6"
					}), o.a.createElement("stop", {
						offset: ".640625",
						stopColor: "#fff",
						stopOpacity: "0"
					})), o.a.createElement("linearGradient", {
						id: "paint6_linear",
						x1: "226.171",
						y1: "3.02904",
						x2: "226.171",
						y2: "49.067",
						gradientUnits: "userSpaceOnUse"
					}, o.a.createElement("stop", {
						offset: ".541667",
						stopColor: "#F3D056"
					}), o.a.createElement("stop", {
						offset: ".541767",
						stopColor: "#D7AC39"
					}), o.a.createElement("stop", {
						offset: ".927083",
						stopColor: "#FFC904"
					})), o.a.createElement("linearGradient", {
						id: "paint7_linear",
						x1: "289",
						y1: "-33.4",
						x2: "329.053",
						y2: "59.9926",
						gradientUnits: "userSpaceOnUse"
					}, o.a.createElement("stop", {
						offset: ".176983",
						stopColor: "#fff",
						stopOpacity: "0"
					}), o.a.createElement("stop", {
						offset: ".177083",
						stopColor: "#fff",
						stopOpacity: ".21"
					}), o.a.createElement("stop", {
						offset: ".640525",
						stopColor: "#FFEBAA",
						stopOpacity: ".6"
					}), o.a.createElement("stop", {
						offset: ".640625",
						stopColor: "#fff",
						stopOpacity: "0"
					})), o.a.createElement("linearGradient", {
						id: "paint8_linear",
						x1: "226.171",
						y1: "3.02904",
						x2: "226.171",
						y2: "49.067",
						gradientUnits: "userSpaceOnUse"
					}, o.a.createElement("stop", {
						offset: ".541667",
						stopColor: "#F3D056"
					}), o.a.createElement("stop", {
						offset: ".541767",
						stopColor: "#D7AC39"
					}), o.a.createElement("stop", {
						offset: ".927083",
						stopColor: "#FFC904"
					})), o.a.createElement("linearGradient", {
						id: "paint9_linear",
						x1: "289",
						y1: "-33.4",
						x2: "329.053",
						y2: "59.9926",
						gradientUnits: "userSpaceOnUse"
					}, o.a.createElement("stop", {
						offset: ".176983",
						stopColor: "#fff",
						stopOpacity: "0"
					}), o.a.createElement("stop", {
						offset: ".177083",
						stopColor: "#fff",
						stopOpacity: ".21"
					}), o.a.createElement("stop", {
						offset: ".640525",
						stopColor: "#FFEBAA",
						stopOpacity: ".6"
					}), o.a.createElement("stop", {
						offset: ".640625",
						stopColor: "#fff",
						stopOpacity: "0"
					})), o.a.createElement("linearGradient", {
						id: "paint10_linear",
						x1: "226.171",
						y1: "3.02904",
						x2: "226.171",
						y2: "49.067",
						gradientUnits: "userSpaceOnUse"
					}, o.a.createElement("stop", {
						offset: ".541667",
						stopColor: "#F3D056"
					}), o.a.createElement("stop", {
						offset: ".541767",
						stopColor: "#D7AC39"
					}), o.a.createElement("stop", {
						offset: ".927083",
						stopColor: "#FFC904"
					})), o.a.createElement("linearGradient", {
						id: "paint11_linear",
						x1: "289",
						y1: "-33.4",
						x2: "329.053",
						y2: "59.9926",
						gradientUnits: "userSpaceOnUse"
					}, o.a.createElement("stop", {
						offset: ".176983",
						stopColor: "#fff",
						stopOpacity: "0"
					}), o.a.createElement("stop", {
						offset: ".177083",
						stopColor: "#fff",
						stopOpacity: ".21"
					}), o.a.createElement("stop", {
						offset: ".640525",
						stopColor: "#FFEBAA",
						stopOpacity: ".6"
					}), o.a.createElement("stop", {
						offset: ".640625",
						stopColor: "#fff",
						stopOpacity: "0"
					})), o.a.createElement("linearGradient", {
						id: "paint12_linear",
						x1: "226.171",
						y1: "3.02904",
						x2: "226.171",
						y2: "49.067",
						gradientUnits: "userSpaceOnUse"
					}, o.a.createElement("stop", {
						offset: ".541667",
						stopColor: "#F3D056"
					}), o.a.createElement("stop", {
						offset: ".541767",
						stopColor: "#D7AC39"
					}), o.a.createElement("stop", {
						offset: ".927083",
						stopColor: "#FFC904"
					})), o.a.createElement("linearGradient", {
						id: "paint13_linear",
						x1: "289",
						y1: "-33.4",
						x2: "329.053",
						y2: "59.9926",
						gradientUnits: "userSpaceOnUse"
					}, o.a.createElement("stop", {
						offset: ".176983",
						stopColor: "#fff",
						stopOpacity: "0"
					}), o.a.createElement("stop", {
						offset: ".177083",
						stopColor: "#fff",
						stopOpacity: ".21"
					}), o.a.createElement("stop", {
						offset: ".640525",
						stopColor: "#FFEBAA",
						stopOpacity: ".6"
					}), o.a.createElement("stop", {
						offset: ".640625",
						stopColor: "#fff",
						stopOpacity: "0"
					})), o.a.createElement("linearGradient", {
						id: "paint14_linear",
						x1: "226.171",
						y1: "3.02904",
						x2: "226.171",
						y2: "49.067",
						gradientUnits: "userSpaceOnUse"
					}, o.a.createElement("stop", {
						offset: ".541667",
						stopColor: "#F3D056"
					}), o.a.createElement("stop", {
						offset: ".541767",
						stopColor: "#D7AC39"
					}), o.a.createElement("stop", {
						offset: ".927083",
						stopColor: "#FFC904"
					})), o.a.createElement("linearGradient", {
						id: "paint15_linear",
						x1: "289",
						y1: "-33.4",
						x2: "329.053",
						y2: "59.9926",
						gradientUnits: "userSpaceOnUse"
					}, o.a.createElement("stop", {
						offset: ".176983",
						stopColor: "#fff",
						stopOpacity: "0"
					}), o.a.createElement("stop", {
						offset: ".177083",
						stopColor: "#fff",
						stopOpacity: ".21"
					}), o.a.createElement("stop", {
						offset: ".640525",
						stopColor: "#FFEBAA",
						stopOpacity: ".6"
					}), o.a.createElement("stop", {
						offset: ".640625",
						stopColor: "#fff",
						stopOpacity: "0"
					})), o.a.createElement("linearGradient", {
						id: "paint16_linear",
						x1: "226.171",
						y1: "3.02904",
						x2: "226.171",
						y2: "49.067",
						gradientUnits: "userSpaceOnUse"
					}, o.a.createElement("stop", {
						offset: ".541667",
						stopColor: "#F3D056"
					}), o.a.createElement("stop", {
						offset: ".541767",
						stopColor: "#D7AC39"
					}), o.a.createElement("stop", {
						offset: ".927083",
						stopColor: "#FFC904"
					})), o.a.createElement("linearGradient", {
						id: "paint17_linear",
						x1: "289",
						y1: "-33.4",
						x2: "329.053",
						y2: "59.9926",
						gradientUnits: "userSpaceOnUse"
					}, o.a.createElement("stop", {
						offset: ".176983",
						stopColor: "#fff",
						stopOpacity: "0"
					}), o.a.createElement("stop", {
						offset: ".177083",
						stopColor: "#fff",
						stopOpacity: ".21"
					}), o.a.createElement("stop", {
						offset: ".640525",
						stopColor: "#FFEBAA",
						stopOpacity: ".6"
					}), o.a.createElement("stop", {
						offset: ".640625",
						stopColor: "#fff",
						stopOpacity: "0"
					})), o.a.createElement("pattern", {
						id: "pattern0",
						patternContentUnits: "objectBoundingBox",
						width: ".117009",
						height: "1.07315"
					}, o.a.createElement("use", {
						xlinkHref: "#image0",
						transform: "scale(.00117 .01073)"
					})), o.a.createElement("pattern", {
						id: "pattern1",
						patternContentUnits: "objectBoundingBox",
						width: ".117009",
						height: "1.07315"
					}, o.a.createElement("use", {
						xlinkHref: "#image0",
						transform: "scale(.00117 .01073)"
					})), o.a.createElement("pattern", {
						id: "pattern2",
						patternContentUnits: "objectBoundingBox",
						width: ".117009",
						height: "1.07315"
					}, o.a.createElement("use", {
						xlinkHref: "#image0",
						transform: "scale(.00117 .01073)"
					})), o.a.createElement("pattern", {
						id: "pattern3",
						patternContentUnits: "objectBoundingBox",
						width: ".117009",
						height: "1.07315"
					}, o.a.createElement("use", {
						xlinkHref: "#image0",
						transform: "scale(.00117 .01073)"
					})), o.a.createElement("pattern", {
						id: "pattern4",
						patternContentUnits: "objectBoundingBox",
						width: ".117009",
						height: "1.07315"
					}, o.a.createElement("use", {
						xlinkHref: "#image0",
						transform: "scale(.00117 .01073)"
					})), o.a.createElement("pattern", {
						id: "pattern5",
						patternContentUnits: "objectBoundingBox",
						width: ".117009",
						height: "1.07315"
					}, o.a.createElement("use", {
						xlinkHref: "#image0",
						transform: "scale(.00117 .01073)"
					})), o.a.createElement("pattern", {
						id: "pattern6",
						patternContentUnits: "objectBoundingBox",
						width: ".117009",
						height: "1.07315"
					}, o.a.createElement("use", {
						xlinkHref: "#image0",
						transform: "scale(.00117 .01073)"
					})), o.a.createElement("pattern", {
						id: "pattern7",
						patternContentUnits: "objectBoundingBox",
						width: ".117009",
						height: "1.07315"
					}, o.a.createElement("use", {
						xlinkHref: "#image0",
						transform: "scale(.00117 .01073)"
					})), o.a.createElement("pattern", {
						id: "pattern8",
						patternContentUnits: "objectBoundingBox",
						width: ".117009",
						height: "1.07315"
					}, o.a.createElement("use", {
						xlinkHref: "#image0",
						transform: "scale(.00117 .01073)"
					})), o.a.createElement("image", {
						id: "image0",
						width: "100",
						height: "100",
						xlinkHref: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAUVBMVEVhYWEAAAAxMTHn5+dJSUnb29t5eXnCwsLz8/M9PT0YGBhtbW3///8kJCTOzs6FhYUMDAyenp6qqqqSkpJVVVXa2toAAAC2trYlJSWGhoZ6enqBvCfaAAAAG3RSTlMVABUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRU5+CtJAAAIeklEQVR4AbyTCarDMBDFLGezY9dx1v77n/QL6BnSx5toVAoMpCEQGRiZmFlIZFaCZkZP0U26+PNV/2GksRFtJ+l26ZCyDdJM02ZrCOaFT4icTHSKHWlUFj4c2kiRqr6ZTCCxMnGZmW5uCg9ft+qsRNbfL/8IPjfpsO9c0phJDLaYaAKdk0ta5ZnMgdcxkpyNU1tYifpsb31zVreZgSg3OiPeidtLl2QC1R7GSxhYnIndStqNrl2Z5BVJW9G5J2nglrozOqN8m8xOofI171yy8xDYGDhNlwKZRGQmu09Ujd+6HbqN7BZ+7+LlvE23m2xY5MzFw+FW2V+6ZCX83ufKRCLYJO1MZmQjs9A5pEIys9xY3S7dSdB8pcjult2iWRhN9Zlf+59ENvswcBDNzEjn8hmlD7tUNZliJ04WIk3+0zxS4GZlpDiT8783e0FOFAjCAJwKK/IwJOILvf9Bd76/+gxTlsoCqe2e/l+DEDfmbYpTp07OxVSrBzu4sLRqp1b7T9C+RNnmzGDIZPbSKtq1BT1zO7+ZF7RZm3Z04BuEdUMXtK/Bw7N931rljqJahbu9FAGH8WClVKV1JuA8jTpbg3S2tfv21svUvo9OnVBUVZ+iSz9t/S+qtZbFa5OgVj+lTafqWIVTMHZp72dNIFMq3TtntnunTv5hahz+q32q9hQkXQpHCyUrBi2uYjKdC45uUa4r3rTvkQa4q3QYg9zRayYDhmTl/1pNW1gxtiM6erHKvL69fnEn99LoI9U+6QE/SWI52gvvzI5qPE2zG7pO7f/+anX8tM+FEnFCfAhH5nbmzA1NLGdK6Vr19/JMjFC7DiYaVslGegh7OnVyl0NSwymd0E0TwV6YwyDMkC/POeKSpsdDhszw4JLt7Oi8Hvh+VkaCXLrN5C/qhZvwJSHCCpeMA3I/M6ocPLf32s7BEu3mJXqR1/gI96RcpkK7Ht38ZOcB6rV+dNdk2plXO74FN6es/4TXaucw3JFKmUpqfUW9dpkL2rArndLrrVMnUKMLe4qXFCwHQ4s3v5AS25nFPFSOHXSJWntRBpxon0v6eCXZzDRYr91y11bYX2VWdVJeKlwToa/ukeBxSadBP+anJ4ymVDfsz12PzOhoPcwdO5FQfqJdN3Wk6iRjGav87gn7qXvlObQ3PRxYTR3oWGanc7OSjcvzuyVIOoULcM8vpBX5XBI0jyHXTulXZbI97cIO+mTHKLtMjqqbaADvx69uKnzjerUHnGku97CjNyF+KFfai3PIchp4i4vLY5BW6XmvHDaWSsPh3C8LVxK/tpdcz1twfuUUYca3XvFalbULGZIGhqDqWm5iLfgobRvkFDohFXRD1067cJo3lnbpjB5JWae2uvxTpWuObqV1NOHcUPRLtzM16Dwy1ad8YI7dUj2OZvcO/VyjKhqgqq5BkRq/PFfBfT3hOf/DGXfhionIM5BZnKPWvfbxP3yMvuqmsJ6dLjRVulc9jYI4ncqM0rsjb1hSP++c9EfpKnMNvbIwFKmbl5Q/ftds7CxU6/OVbv4lVy2Vfafk+nc7r2LXTGqWj4PD0Yy6qbDK7FT1kh1sJRcpSqVraoSYRybBSyj2u/3NHlf5BI2feOdmHlyIGrY73tjXqZMntaRG5WZW3yw4WhJh1nWPM3zl3meS2DXJ8yPzhxHf7XjOubc7+b0EiX2dOlmpf2HKqj7CEc7ykmIgSTfOq7i4PKViruHerTTupBu67Zou9dot1UMM7HA3e0Q9YD6cORrimDPvwyQpHudbhafUq4dF1/bElcSWymd4LyN3SpBYUXuiczhAf3aZKt63BWWvnFHzN8+pdGzts2eshCXJm98nn+760IluHv9bmXWHK46GyTy+dDUdVE8y1dDqxxO1H5nlPb76SQI4xwvfEOceObObx/Nju3AcwY6k2XK7WzA3Fqdp3COz0NuW+dldwthcnJIQ4qT0Gkq7qfBg+iZS+8RFzYU2nMgxLcaA2uM7o3oq5QrdWjIrzBmSet7emc6nF+OLDzuU4Uz5hP6GzMn+lpby+3tyza6TzGbCCt6YlfiEJ7seM+lDJujGk3vS+bV9HqVVEov+TOO3nrHqYeKRrmMFxudOf3sPxrji2zXM0lu792Ne3XiyZm2Hyr+3YJ/fO8fbdvX7vaG8cqxU8gdhtbO5lupGtd0PjXWl10yg5eVpIk7E/w4KwE9k3qpf3Tp76jbZ6pZvaYDK6XfhlzJ96bk9Gw1bu80Ey9UMXdb5Xr8vXsrbpA1YGaO5D6yS7ylCJgg/B2f31zTXFUzREUR26iQuUYn+Wfy+1A6Yplp96prVr6zufsoEd/KInTL1PmVungy/81zsCP6e/X6dq/34d81mTHrZqVUYf695wJB/w1bcnZOEIZ9MSGdniJJc5LPKkltHnqhmVW39Zj3Xbyijdz3hlarG8PvKN+KfR+vhTwfp7OrTXOQ07q5nDOvIExkDYh6Ym9eWZwtbZTBapSM7MQicM4VTuPxJyl/S1ZkX8iFqwOHT470bT+CG7s7Wmztay9prQNuiCw5Bp3E4vc+YUxOis9z+Zk6eyZbn88ih20wudiFc3NuvJklWS3mGvjiIacx6KD57pncpZVO3b35I+WhHpiELQ1y33e8l2nrHFmkle5U/COMv3FwyNhVz0RF9rafxZhCtKH/VgfW45L2VMvTpBMvpPk5b/YlGVX6xw4Uvfo/PrlhxvL5lcq/scc/l5GthistA7Cf8v3RD11g6tAVZapD9VufrF/bMqhIJ1T7XEzn6y0d9zjqRaTDDXthV6afbEwke8ac26oXRmMHJpRBZVmaMAg2yWao9wu96Upq9yVTHUnxSS2bkr1/dOsHbR1AFT/bpKoapV/1yhR2wZxYjjzcxqURKLsyp+V0eLzWaxKmeWnTiyX+Zf47wb5mV/gAAAABJRU5ErkJggg=="
					}))), o.a.createElement("div", {
						className: "h4 tar tsi tc-i tlh-1"
					}, "And INSTANTLY Unlock These Rewards"))), o.a.createElement("div", {
						className: "takeoverTemp-inspector"
					}, o.a.createElement("div", {
						className: "takeoverTemp-rewards is-animated",
						style: {
							"--rewardsTotal": "".concat(t.length)
						}
					}, t)), o.a.createElement("div", {
						className: "takeoverTemp-actions"
					}, o.a.createElement("div", {
						className: "takeoverTemp-actionsBtns g g--flag g--c"
					}, o.a.createElement("div", {
						className: "g-b g-b--6of12"
					}, o.a.createElement("button", {
						type: "button",
						className: "btn btn--light btn--outline btn--fw",
						onClick: e.claim
					}, "Close")), o.a.createElement("div", {
						className: "g-b g-b--6of12"
					}, o.a.createElement("a", {
						href: "/store/gold",
						className: "btn btn--gold btn--fw"
					}, "Upgrade Now")))))
				}, e
			}
			return t = i, (n = [{
				key: "componentDidMount",
				value: function() {
					var e = this;
					setTimeout((function() {
						e.props.remove()
					}), 3e3)
				}
			}, {
				key: "renderItemInfo",
				value: function(e, t, n, r) {
					return o.a.createElement("div", {
						className: "takeoverTemp--item-details"
					}, !r && o.a.createElement("h3", {
						className: "tc-i tsxxl mbxs tbs"
					}, e), o.a.createElement(kn.a, {
						size: "large",
						rarity: t,
						suffix: n
					}))
				}
			}, {
				key: "renderReward",
				value: function(e) {
					var t = this.props.getItemRarity(e);
					if ("money" === e.type) return o.a.createElement("div", null, o.a.createElement("div", {
						className: "seasonInspector-takeover",
						style: {
							height: "300px"
						}
					}, o.a.createElement("div", {
						className: "seasonInspector-cashAmt"
					}, o.a.createElement("span", {
						className: "seasonInspector-cashAmtSign as-nitro-cash"
					}, "$"), o.a.createElement("span", {
						className: "seasonInspector-cashAmtVal"
					}, Object(ne.g)(e.value))), o.a.createElement("div", {
						className: "seasonInspector-cashBills"
					}, o.a.createElement("img", {
						src: "/dist/site/images/pages/season/season-insp-cash.2.jpg",
						className: "seasonInspector-cashBill seasonInspector-cashBill--1"
					}), o.a.createElement("img", {
						src: "/dist/site/images/pages/season/season-insp-cash.2.jpg",
						className: "seasonInspector-cashBill seasonInspector-cashBill--2"
					}), o.a.createElement("img", {
						src: "/dist/site/images/pages/season/season-insp-cash.2.jpg",
						className: "seasonInspector-cashBill seasonInspector-cashBill--3"
					}), o.a.createElement("img", {
						src: "/dist/site/images/pages/season/season-insp-cash.2.jpg",
						className: "seasonInspector-cashBill seasonInspector-cashBill--4"
					}))), this.renderItemInfo(name, t, "Reward", !0));
					if ("car" === e.type) {
						var n = this.props.getCarName(e.value);
						return o.a.createElement("div", {
							className: "takeoverTemp--reward takeoverTemp--car-reward"
						}, o.a.createElement(nr.a, or({
							carID: e.value
						}, this.props, {
							className: "takeoverTemp--car-reward--preview"
						})), this.renderItemInfo(n, t, "Car"))
					}
					if ("loot" === e.type) {
						var r, a, i = this.props.loot.find((function(t) {
							return t.lootID === e.value
						}));
						if ("sticker" === (null == i ? void 0 : i.type)) return o.a.createElement("div", {
							className: "takeoverTemp--reward takeoverTemp--sticker-reward"
						}, o.a.createElement("img", {
							src: null === (r = i.options) || void 0 === r ? void 0 : r.src
						}), this.renderItemInfo(i.name, t, "Sticker"));
						if ("trail" === (null == i ? void 0 : i.type)) return o.a.createElement("div", {
							className: "takeoverTemp--reward takeoverTemp--trail-reward"
						}, o.a.createElement("img", {
							src: null === (a = i.options) || void 0 === a ? void 0 : a.src
						}), this.renderItemInfo(i.name, t, "Trail"));
						if ("title" === (null == i ? void 0 : i.type)) {
							var s = "".concat(this.props.tag ? "[".concat(String(this.props.tag).toUpperCase(), "]") : "").concat(this.props.displayName || this.props.username);
							return o.a.createElement("div", {
								className: "takeoverTemp--reward takeoverTemp--title-reward"
							}, o.a.createElement("div", {
								className: "takeoverTemp--title-reward--preview"
							}, o.a.createElement("div", {
								className: "takeoverTemp--title-reward--preview-title"
							}, '"', i.name, '"'), o.a.createElement("div", {
								className: "takeoverTemp--title-reward--preview-racer"
							}, s)), this.renderItemInfo("", t, "Title"))
						}
						this.claim()
					} else this.claim()
				}
			}, {
				key: "render",
				value: function() {
					var e, t = this.props.rewards[this.state.activeRewardIndex],
						n = this.props.getItemRarity(null == t ? void 0 : t.reward),
						r = o.a.createElement("img", {
							src: "/dist/site/images/pages/season/season-modal-medal-bonus.png",
							className: "seasonMedal-fore"
						});
					if (!t.hidden) {
						var a = t.name;
						t.extraTier && (a = "∞" + (this.props.level - this.props.currentSeason.totalRewards - 1)), r = o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
							className: "seasonMedal-num"
						}, o.a.createElement(tr.a, null, a)), o.a.createElement("img", {
							src: "/dist/site/images/pages/season/season-modal-medal.png",
							className: "seasonMedal-fore"
						}))
					}
					return o.a.createElement("div", {
						className: qe()("takeoverTemp", "rarity-background--".concat(n), {
							"is-upgrade": this.state.showingLockedRewards
						}, {
							"is-entering": !this.state.closing
						}, {
							"is-exiting": this.state.closing
						})
					}, o.a.createElement("div", {
						className: qe()("takeoverTemp-fg takeoverTemp-fg--reward", {
							dn: this.state.showingLockedRewards
						})
					}, o.a.createElement("div", {
						className: "takeoverTemp-header bucket bucket--c bucket--f mhc"
					}, o.a.createElement("div", {
						className: "bucket-media"
					}, o.a.createElement("div", {
						className: "takeoverTemp-medal seasonMedal seasonMedal--a"
					}, r, o.a.createElement("img", {
						src: "/dist/site/images/pages/season/season-modal-medal-echo.png",
						className: "seasonMedal-back"
					}))), o.a.createElement("div", {
						className: "bucket-content"
					}, o.a.createElement("div", {
						className: "h4 tc-i ttu mls"
					}, (null === (e = this.props.currentSeason) || void 0 === e ? void 0 : e.name) || "Season Reward"), o.a.createElement("img", {
						className: "",
						src: "/dist/site/images/pages/season/season-modal-rankup-title.png"
					}))), o.a.createElement("div", {
						className: "takeoverTemp-inspector"
					}, this.renderReward(t.reward), o.a.createElement("div", {
						className: "takeoverTemp-sparkle takeoverTemp-sparkle--1"
					}, o.a.createElement("img", {
						src: "/dist/site/images/pages/season/season-modal-sparkle.png"
					})), o.a.createElement("div", {
						className: "takeoverTemp-sparkle takeoverTemp-sparkle--2"
					}, o.a.createElement("img", {
						src: "/dist/site/images/pages/season/season-modal-sparkle.png"
					})), o.a.createElement("div", {
						className: "takeoverTemp-sparkle takeoverTemp-sparkle--3"
					}, o.a.createElement("img", {
						src: "/dist/site/images/pages/season/season-modal-sparkle.png"
					}))), o.a.createElement("div", {
						className: "takeoverTemp-actions"
					}, this.renderEquipArea())), this.renderLockedRewards(), o.a.createElement("div", {
						className: "takeoverTemp-bg"
					}, o.a.createElement("svg", {
						className: "icon icon-double-arrows-giga takeoverTemp-bgItem"
					}, o.a.createElement("use", {
						xmlnsXlink: "http://www.w3.org/1999/xlink",
						xlinkHref: "/dist/site/images/icons/icons.css.svg#icon-double-arrows"
					})), o.a.createElement("svg", {
						className: "icon icon-double-arrows-giga takeoverTemp-bgItem"
					}, o.a.createElement("use", {
						xmlnsXlink: "http://www.w3.org/1999/xlink",
						xlinkHref: "/dist/site/images/icons/icons.css.svg#icon-double-arrows"
					})), o.a.createElement("svg", {
						className: "icon icon-double-arrows-giga takeoverTemp-bgItem"
					}, o.a.createElement("use", {
						xmlnsXlink: "http://www.w3.org/1999/xlink",
						xlinkHref: "/dist/site/images/icons/icons.css.svg#icon-double-arrows"
					})), o.a.createElement("svg", {
						className: "icon icon-double-arrows-giga takeoverTemp-bgItem"
					}, o.a.createElement("use", {
						xmlnsXlink: "http://www.w3.org/1999/xlink",
						xlinkHref: "/dist/site/images/icons/icons.css.svg#icon-double-arrows"
					})), o.a.createElement("svg", {
						className: "icon icon-double-arrows-giga takeoverTemp-bgItem"
					}, o.a.createElement("use", {
						xmlnsXlink: "http://www.w3.org/1999/xlink",
						xlinkHref: "/dist/site/images/icons/icons.css.svg#icon-double-arrows"
					})), o.a.createElement("svg", {
						className: "icon icon-double-arrows-giga takeoverTemp-bgItem"
					}, o.a.createElement("use", {
						xmlnsXlink: "http://www.w3.org/1999/xlink",
						xlinkHref: "/dist/site/images/icons/icons.css.svg#icon-double-arrows"
					})), o.a.createElement("svg", {
						className: "icon icon-double-arrows-giga takeoverTemp-bgItem"
					}, o.a.createElement("use", {
						xmlnsXlink: "http://www.w3.org/1999/xlink",
						xlinkHref: "/dist/site/images/icons/icons.css.svg#icon-double-arrows"
					})), o.a.createElement("svg", {
						className: "icon icon-double-arrows-giga takeoverTemp-bgItem"
					}, o.a.createElement("use", {
						xmlnsXlink: "http://www.w3.org/1999/xlink",
						xlinkHref: "/dist/site/images/icons/icons.css.svg#icon-double-arrows"
					})), o.a.createElement("svg", {
						className: "icon icon-double-arrows-giga takeoverTemp-bgItem"
					}, o.a.createElement("use", {
						xmlnsXlink: "http://www.w3.org/1999/xlink",
						xlinkHref: "/dist/site/images/icons/icons.css.svg#icon-double-arrows"
					})), o.a.createElement("svg", {
						className: "icon icon-double-arrows-giga takeoverTemp-bgItem"
					}, o.a.createElement("use", {
						xmlnsXlink: "http://www.w3.org/1999/xlink",
						xlinkHref: "/dist/site/images/icons/icons.css.svg#icon-double-arrows"
					})), o.a.createElement("svg", {
						className: "icon icon-double-arrows-giga takeoverTemp-bgItem"
					}, o.a.createElement("use", {
						xmlnsXlink: "http://www.w3.org/1999/xlink",
						xlinkHref: "/dist/site/images/icons/icons.css.svg#icon-double-arrows"
					}))))
				}
			}]) && ir(t.prototype, n), r && ir(t, r), i
		}(o.a.PureComponent);
		pr.defaultProps = {
			rewards: []
		};
		var fr = n(29),
			dr = Object(a.b)((function(e) {
				return {
					username: e.user.username,
					displayName: e.user.displayName,
					tag: e.user.tag,
					seasonRaces: e.user.seasonField4,
					loggedIn: e.user.loggedIn,
					level: e.user.level,
					membership: e.user.membership,
					lootDisplayNames: Object(fr.getLootNames)(e),
					loot: e.globals.LOOT,
					currentSeason: In.a.getCurrentSeason(e.globals.ACTIVE_SEASONS),
					earnedButLockedRewards: In.a.getEarnedButLockedRewards(e.user, H.b.getCurrentSeasonRewards(e)),
					getItemRarity: function() {
						for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
						return B.b.getItemRarity.apply(B.b, [e].concat(n))
					},
					getCarName: function(t) {
						return B.b.getCarName(e, t)
					},
					getCarUrl: function(t, n, r, o) {
						return B.b.getCarUrl(e, t, n, r, o)
					},
					getCarMetaData: function(t) {
						return B.b.getCarMetaData(e, t)
					},
					getPlayerSelectedCar: function() {
						return B.b.getPlayerSelectedCar(e)
					}
				}
			}), (function(e) {
				return {
					equipLoot: function(t) {
						return e(Vn.a.equipLoot(t))
					}
				}
			}))(pr);

		function mr(e) {
			return (mr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}

		function hr(e) {
			return function(e) {
				if (Array.isArray(e)) return yr(e)
			}(e) || function(e) {
				if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
			}(e) || function(e, t) {
				if (!e) return;
				if ("string" == typeof e) return yr(e, t);
				var n = Object.prototype.toString.call(e).slice(8, -1);
				"Object" === n && e.constructor && (n = e.constructor.name);
				if ("Map" === n || "Set" === n) return Array.from(e);
				if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return yr(e, t)
			}(e) || function() {
				throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
			}()
		}

		function yr(e, t) {
			(null == t || t > e.length) && (t = e.length);
			for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
			return r
		}

		function gr(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
			}
		}

		function vr(e, t) {
			return (vr = Object.setPrototypeOf || function(e, t) {
				return e.__proto__ = t, e
			})(e, t)
		}

		function br(e) {
			var t = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
				} catch (e) {
					return !1
				}
			}();
			return function() {
				var n, r = Er(e);
				if (t) {
					var o = Er(this).constructor;
					n = Reflect.construct(r, arguments, o)
				} else n = r.apply(this, arguments);
				return wr(this, n)
			}
		}

		function wr(e, t) {
			return !t || "object" !== mr(t) && "function" != typeof t ? function(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}(e) : t
		}

		function Er(e) {
			return (Er = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
				return e.__proto__ || Object.getPrototypeOf(e)
			})(e)
		}
		var Or = function(e) {
				! function(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							writable: !0,
							configurable: !0
						}
					}), t && vr(e, t)
				}(i, e);
				var t, n, r, a = br(i);

				function i(e) {
					var t;
					return function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, i), (t = a.call(this, e)).state = {
						notification: {}
					}, t._timeout = null, t.notifications = [], t.onNavigateToFriends = function() {
						switch (t.state.notification.friendType) {
							case "teammate":
								window.__navigateTo("/team/" + t.props.user.tag);
								break;
							case "classmate":
								return void window.__navigateTo("/class");
							default:
								window.__navigateTo("/friends")
						}
					}, t.showNext = function() {
						var e, n = null === (e = t.notifications) || void 0 === e ? void 0 : e.find((function(e) {
							return !e.seen
						}));
						if (!n) return t._timeout = null, void t.setState({
							notification: null
						});
						n.seen = !0, t.setState({
							notification: n.data
						}), t._timeout = setTimeout(t.showNext, 5e3)
					}, t.handleClickMute = function() {
						clearTimeout(t._timeout), t.props.mute(), t.props.close()
					}, t.notifications = hr(e.notifications), t
				}
				return t = i, (n = [{
					key: "componentDidUpdate",
					value: function(e, t, n) {
						var r = this,
							o = this.props.notifications.filter((function(e) {
								return !r.notifications.some((function(t) {
									return t.id === e.id
								}))
							}));
						o.length > 0 && (this.notifications = this.notifications.concat(o), this.props.remove(), this._timeout || this.showNext())
					}
				}, {
					key: "componentDidMount",
					value: function() {
						this.props.remove(), this.showNext()
					}
				}, {
					key: "render",
					value: function() {
						var e = this.state.notification;
						if (!e || !e.userID) return null;
						var t = this.props.getCarUrl(e.carID, !1, e.carHueAngle);
						return o.a.createElement("div", {
							className: qe()("notification--friend-online", {
								show: !0
							})
						}, o.a.createElement("div", {
							className: "notification--friend-online--mute-container"
						}, o.a.createElement("div", {
							className: "notification--friend-online--mute-label",
							onClick: this.handleClickMute
						}, "Mute notifications")), o.a.createElement("img", {
							className: "notification--friend-online--car",
							src: t
						}), o.a.createElement("div", {
							className: "notification--friend-online--info",
							onClick: this.onNavigateToFriends
						}, o.a.createElement("div", {
							className: "notification--friend-online--player"
						}, e.tag && o.a.createElement("div", {
							className: "notification--friend-online--team",
							style: {
								color: "#".concat(e.tagColor)
							}
						}, "[", e.tag, "]"), o.a.createElement("div", {
							className: "notification--friend-online--name"
						}, e.displayName || e.username)), o.a.createElement("div", {
							className: "notification--friend-online--message"
						}, "Your ", e.friendType || "friend", " is online!")))
					}
				}]) && gr(t.prototype, n), r && gr(t, r), i
			}(o.a.PureComponent),
			Sr = Object(a.b)((function(e) {
				return {
					getCarUrl: function(t, n, r) {
						return B.b.getCarUrl(e, t, n, r)
					}
				}
			}), (function(e) {
				return {}
			}))(Or);

		function _r(e) {
			return (_r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}

		function Tr(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function Nr(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
			}
		}

		function Cr(e, t) {
			return (Cr = Object.setPrototypeOf || function(e, t) {
				return e.__proto__ = t, e
			})(e, t)
		}

		function Ar(e) {
			var t = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
				} catch (e) {
					return !1
				}
			}();
			return function() {
				var n, r = kr(e);
				if (t) {
					var o = kr(this).constructor;
					n = Reflect.construct(r, arguments, o)
				} else n = r.apply(this, arguments);
				return Ir(this, n)
			}
		}

		function Ir(e, t) {
			return !t || "object" !== _r(t) && "function" != typeof t ? function(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}(e) : t
		}

		function kr(e) {
			return (kr = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
				return e.__proto__ || Object.getPrototypeOf(e)
			})(e)
		}
		var Rr = function(e) {
				! function(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							writable: !0,
							configurable: !0
						}
					}), t && Cr(e, t)
				}(i, e);
				var t, n, r, a = Ar(i);

				function i() {
					var e;
					Tr(this, i);
					for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
					return (e = a.call.apply(a, [this].concat(n))).goldOnly = !1, e.id = "nitro-city", e.url = "/news/read/234/nitro-city-and-item-rarity-launching-today", e.cta = "Read More", e.copy = o.a.createElement(o.a.Fragment, null, o.a.createElement("p", {
						className: "twb tsxxl tc-lemon modal--new-track-launch--title"
					}, "Taking the Race to the Streets"), o.a.createElement("p", {
						className: "tc-i"
					}, "In Nitro City, there's just one rule -- ", o.a.createElement("strong", null, "type fast, go fast"), ". Do you have what it takes to be the champion on the rainy streets of ", o.a.createElement("strong", null, "Nitro City"), "?"), o.a.createElement("p", {
						className: "tc-i"
					}, o.a.createElement("strong", null, "Nitro City"), " is now available as a randomly selected track for all racers!")), e.navigateTo = function(t, n) {
						t && t.preventDefault(), e.props.close(), setTimeout((function() {
							location.href = n
						}), 0)
					}, e.onUpgradeToNitroGold = function(t) {
						e.navigateTo(t, "/store/gold")
					}, e.close = function(t) {
						e.navigateTo(t, e.url)
					}, e
				}
				return t = i, (n = [{
					key: "componentDidMount",
					value: function() {
						localStorage.seenNewTrackModal = !0, this.props.remove()
					}
				}, {
					key: "render",
					value: function() {
						var e, t = this.id,
							n = this.copy,
							r = this.cta,
							a = this.goldOnly,
							i = {
								backgroundImage: "url(/dist/site/images/modals/newTrackLaunch/".concat(t, "-bg.jpg)")
							},
							s = "/dist/site/images/modals/newTrackLaunch/".concat(t, "-img.png"),
							c = "gold" === (null === (e = this.props.user) || void 0 === e ? void 0 : e.membership);
						return o.a.createElement("div", {
							className: "modal-body ptm pbm"
						}, o.a.createElement("div", {
							className: "modal--new-track-launch"
						}, a && !c && o.a.createElement("div", {
							className: "modal--new-track-launch--gold-exclusive",
							onClick: this.onUpgradeToNitroGold
						}, o.a.createElement("div", {
							className: "modal--new-track-launch--gold-exclusive-title"
						}, "Nitro Gold Exclusive Preview"), o.a.createElement("div", {
							className: "modal--new-track-launch--gold-exclusive-cta"
						}, "Upgrade to Nitro Gold →")), o.a.createElement("div", {
							className: "modal--new-track-launch--bg",
							style: i
						}), o.a.createElement("div", {
							className: "modal--new-track-launch--content"
						}, o.a.createElement("div", {
							className: "modal--new-track-launch--logo"
						}, o.a.createElement("img", {
							src: s
						})), o.a.createElement("div", {
							className: "modal--new-track-launch--copy"
						}, n), o.a.createElement("div", {
							className: "modal--new-track-launch--action"
						}, o.a.createElement("button", {
							className: "btn btn--primary btn--fw",
							onClick: this.close
						}, r || "Read More")))))
					}
				}]) && Nr(t.prototype, n), r && Nr(t, r), i
			}(o.a.PureComponent),
			Pr = Object(Et.a)(Rr);

		function jr(e) {
			return (jr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}

		function Dr(e, t) {
			var n = Object.keys(e);
			if (Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(e);
				t && (r = r.filter((function(t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				}))), n.push.apply(n, r)
			}
			return n
		}

		function xr(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = null != arguments[t] ? arguments[t] : {};
				t % 2 ? Dr(Object(n), !0).forEach((function(t) {
					Lr(e, t, n[t])
				})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Dr(Object(n)).forEach((function(t) {
					Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
				}))
			}
			return e
		}

		function Lr(e, t, n) {
			return t in e ? Object.defineProperty(e, t, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = n, e
		}

		function Mr(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
			}
		}

		function Ur(e, t) {
			return (Ur = Object.setPrototypeOf || function(e, t) {
				return e.__proto__ = t, e
			})(e, t)
		}

		function Fr(e) {
			var t = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
				} catch (e) {
					return !1
				}
			}();
			return function() {
				var n, r = qr(e);
				if (t) {
					var o = qr(this).constructor;
					n = Reflect.construct(r, arguments, o)
				} else n = r.apply(this, arguments);
				return Br(this, n)
			}
		}

		function Br(e, t) {
			return !t || "object" !== jr(t) && "function" != typeof t ? function(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}(e) : t
		}

		function qr(e) {
			return (qr = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
				return e.__proto__ || Object.getPrototypeOf(e)
			})(e)
		}
		var Hr = function(e) {
			! function(e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						writable: !0,
						configurable: !0
					}
				}), t && Ur(e, t)
			}(i, e);
			var t, n, r, a = Fr(i);

			function i(e) {
				var t;
				return function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, i), (t = a.call(this, e)).state = {
					notifications: {}
				}, t.paused = !1, t.pauseQueue = [], t.pause = function() {
					t.paused = !0
				}, t.unpause = function() {
					t.paused = !1, t.setState({
						notifications: t.addNotificationsToGroup(t.state.notifications, t.pauseQueue)
					}), t.pauseQueue = []
				}, t.addNotificationsToGroup = function() {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
						t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
						n = xr({}, e);
					return t.forEach((function(e) {
						n[e.type] || (n[e.type] = []), n[e.type].push(e)
					})), n
				}, t.close = function(e) {
					t.removeNotifications(e);
					var n = xr({}, t.state.notifications);
					delete n[e], t.setState({
						notifications: n
					})
				}, t.removeNotifications = function(e) {
					t.props.removeNotifications(e)
				}, t.state = xr(xr({}, t.state), {}, {
					notifications: t.addNotificationsToGroup({}, t.props.notifications)
				}), t.props.isDevelopment && (window.openNotification = function(e, n) {
					t.props.addNotifications([{
						type: e,
						data: n
					}])
				}), t
			}
			return t = i, (n = [{
				key: "componentDidUpdate",
				value: function(e, t, n) {
					var r = Object(ue.d)(e.notifications),
						o = Object(ue.d)(this.props.notifications);
					if (r.length !== o.length) {
						var a = [],
							i = Object(ue.d)(Object(ue.w)(this.state.notifications));
						o.forEach((function(e) {
							i.find((function(t) {
								return t.id === e.id
							})) || a.push(e)
						})), a.length && (this.paused ? this.pauseQueue = this.pauseQueue.concat(a) : this.setState({
							notifications: this.addNotificationsToGroup(this.state.notifications, a)
						}))
					}
					"racing" !== e.raceStatus && "racing" === this.props.raceStatus ? this.pause() : "racing" === e.raceStatus && "racing" !== this.props.raceStatus && this.unpause()
				}
			}, {
				key: "render",
				value: function() {
					var e, t, n = this;
					if (Object.keys(this.state.notifications).length) {
						var r = Object.keys(this.state.notifications).sort((function(e) {
								return "captcha" === e ? -1 : 0
							}))[0],
							a = this.state.notifications[r],
							i = function() {
								return n.removeNotifications(r)
							},
							s = function() {
								return n.close(r)
							},
							c = function() {
								return n.props.muteNotificationGroup(r)
							};
						switch (r) {
							case "realtime":
								return o.a.createElement(on, {
									notifications: a,
									remove: i,
									close: s
								});
							case "autologout":
								return o.a.createElement(an, {
									remove: i
								});
							case "captcha":
								return o.a.createElement(sn.a, {
									autovalidate: !0,
									hideClose: !0,
									disableBackgroundClickHide: !0,
									remove: i,
									teardown: s,
									disableHideDelay: !0,
									captchaStatus: a[0].captchaStatus
								});
							case "achievements":
								return o.a.createElement(An, {
									remove: i,
									close: s,
									achievementsToShow: a
								});
							case "seasonAnnouncement":
								var l = null !== (e = a[0]) && void 0 !== e && e.persist ? function() {} : c;
								return o.a.createElement(er, {
									remove: i,
									teardown: s,
									disableHideDelay: !0,
									mute: l
								});
							case "friend-online":
								return o.a.createElement(Sr, {
									remove: i,
									close: s,
									mute: c,
									user: this.props.user,
									notifications: a
								});
							case "seasonRewardsEarned":
								var u = null === (t = a[0]) || void 0 === t ? void 0 : t.data;
								return o.a.createElement(dr, {
									remove: i,
									close: s,
									rewards: u
								});
							case "newTrackLaunchModal":
								return o.a.createElement(Pr, {
									remove: i,
									disableHideDelay: !0,
									close: s,
									user: this.props.user,
									teardown: s,
									size: "m"
								});
							case "goldSaleModal":
								return o.a.createElement(Gn, {
									remove: i,
									disableHideDelay: !0,
									close: s,
									user: this.props.user,
									teardown: s,
									size: "l"
								});
							default:
								console.error("Attempting to display notification type: " + r)
						}
					}
					return null
				}
			}]) && Mr(t.prototype, n), r && Mr(t, r), i
		}(o.a.PureComponent);
		Hr.defaultProps = {
			notifications: []
		};
		var Gr = Object(a.b)((function(e, t) {
			return {
				user: e.user,
				notifications: e.notifications.notifications,
				isDevelopment: "local" === e.globals.ENV,
				raceStatus: e.race.status,
				site: e.globals.SITE,
				sites: e.globals.SITES
			}
		}), (function(e) {
			return {
				addNotifications: function() {
					var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
					return e($.b.addNotifications(t))
				},
				removeNotifications: function(t) {
					return e($.b.removeNotifications(t))
				},
				muteNotificationGroup: function(t) {
					return e($.b.muteNotificationGroup(t))
				}
			}
		}))(Hr);

		function Vr(e) {
			return (Vr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}

		function zr(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function Wr(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
			}
		}

		function Yr(e, t) {
			return (Yr = Object.setPrototypeOf || function(e, t) {
				return e.__proto__ = t, e
			})(e, t)
		}

		function Xr(e) {
			var t = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
				} catch (e) {
					return !1
				}
			}();
			return function() {
				var n, r = Jr(e);
				if (t) {
					var o = Jr(this).constructor;
					n = Reflect.construct(r, arguments, o)
				} else n = r.apply(this, arguments);
				return Kr(this, n)
			}
		}

		function Kr(e, t) {
			return !t || "object" !== Vr(t) && "function" != typeof t ? function(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}(e) : t
		}

		function Jr(e) {
			return (Jr = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
				return e.__proto__ || Object.getPrototypeOf(e)
			})(e)
		}
		var Qr = function(e) {
				! function(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							writable: !0,
							configurable: !0
						}
					}), t && Yr(e, t)
				}(a, e);
				var t, n, r, o = Xr(a);

				function a() {
					var e;
					zr(this, a);
					for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
					return (e = o.call.apply(o, [this].concat(n))).seasonAnnouncementModal = function() {
						var t, n, r = Math.round(Date.now() / 1e3);
						e.props.user.loggedIn && e.props.user.memberDays > 1 && (null === (t = e.props.currentSeason) || void 0 === t ? void 0 : t.startStamp) > e.props.user.lastLogin && (null === (n = e.props.currentSeason) || void 0 === n ? void 0 : n.startStamp) <= r && e.props.addNotifications([{
							type: "seasonAnnouncement"
						}])
					}, e.goldSaleModal = function() {
						var t = parseInt(localStorage.nextGoldSaleModal) || 0;
						e.props.user.loggedIn && e.props.user.memberDays > 2 && "gold" !== e.props.user.membership && Date.now() > t && e.props.addNotifications([{
							type: "goldSaleModal"
						}])
					}, e
				}
				return t = a, (n = [{
					key: "componentDidMount",
					value: function() {
						var e = window.__getPath();
						["/garage"].includes(e) && (this.seasonAnnouncementModal(), this.newTrackLaunchModal(), this.goldSaleModal())
					}
				}, {
					key: "newTrackLaunchModal",
					value: function() {
						var e = Date.now();
						this.props.user.loggedIn && e > 1637646505e3 && 1e3 * this.props.user.lastLogin < 1637646505e3 && !localStorage.seenNewTrackModal && this.props.addNotifications([{
							type: "newTrackLaunchModal"
						}])
					}
				}, {
					key: "render",
					value: function() {
						return null
					}
				}]) && Wr(t.prototype, n), r && Wr(t, r), a
			}(o.a.PureComponent),
			Zr = Object(a.b)((function(e, t) {
				return {
					user: e.user,
					isDevelopment: "local" === e.globals.ENV,
					currentSeason: In.a.getCurrentSeason(e.globals.ACTIVE_SEASONS),
					site: e.globals.SITE,
					sites: e.globals.SITES
				}
			}), (function(e) {
				return {
					addNotifications: function() {
						var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
						return e($.b.addNotifications(t))
					}
				}
			}))(Qr);

		function $r(e) {
			return ($r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}

		function eo(e) {
			return function(e) {
				if (Array.isArray(e)) return to(e)
			}(e) || function(e) {
				if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
			}(e) || function(e, t) {
				if (!e) return;
				if ("string" == typeof e) return to(e, t);
				var n = Object.prototype.toString.call(e).slice(8, -1);
				"Object" === n && e.constructor && (n = e.constructor.name);
				if ("Map" === n || "Set" === n) return Array.from(e);
				if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return to(e, t)
			}(e) || function() {
				throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
			}()
		}

		function to(e, t) {
			(null == t || t > e.length) && (t = e.length);
			for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
			return r
		}

		function no(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
			}
		}

		function ro(e, t) {
			return (ro = Object.setPrototypeOf || function(e, t) {
				return e.__proto__ = t, e
			})(e, t)
		}

		function oo(e) {
			var t = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
				} catch (e) {
					return !1
				}
			}();
			return function() {
				var n, r = io(e);
				if (t) {
					var o = io(this).constructor;
					n = Reflect.construct(r, arguments, o)
				} else n = r.apply(this, arguments);
				return ao(this, n)
			}
		}

		function ao(e, t) {
			return !t || "object" !== $r(t) && "function" != typeof t ? function(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}(e) : t
		}

		function io(e) {
			return (io = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
				return e.__proto__ || Object.getPrototypeOf(e)
			})(e)
		}
		var so = function(e) {
			! function(e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						writable: !0,
						configurable: !0
					}
				}), t && ro(e, t)
			}(l, e);
			var t, n, r, c = oo(l);

			function l(e) {
				var t, n, r, a;
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, l), (a = c.call(this, e)).routes = [], a.BugWrapper = void 0, a.filterRoutesBySite = function(e) {
					e && (a.routes = a.routes.filter((function(t) {
						var n = t.props,
							r = void 0 === n ? {} : n;
						if (!("site" in r) && !("sites" in r)) return !0;
						for (var o = [], a = 0, i = ["site", "sites"]; a < i.length; a++) {
							var s = r[i[a]];
							Object(ue.e)(s) ? o.push.apply(o, eo(s)) : Object(ue.j)(s) && o.push(s)
						}
						return 0 === o.length ? (console.warn("Empty site filter on route"), !0) : o.includes(e)
					})))
				}, a.routes = e.routes;
				var i = localStorage.TEST || "local" === (null === (t = window.NTGLOBALS) || void 0 === t ? void 0 : t.ENV);
				a.BugWrapper = i ? function(e) {
					return o.a.createElement(o.a.Fragment, null, e.children)
				} : function(e) {
					return o.a.createElement(I, {
						FallbackComponent: ot
					}, e.children)
				}, null !== (n = window.NTGLOBALS) && void 0 !== n && n.ERROR_TYPE ? a.routes = [o.a.createElement(Fe.a, {
					noAds: !0,
					component: function() {
						return o.a.createElement(Je, {
							errorType: NTGLOBALS.ERROR_TYPE,
							key: "error"
						})
					},
					key: "error"
				})] : a.routes.push(o.a.createElement(Fe.a, {
					noAds: !0,
					component: function() {
						return o.a.createElement(Je, {
							errorType: "404"
						})
					},
					key: "error"
				}));
				var s = Me.getState();
				return a.filterRoutesBySite(null == s || null === (r = s.globals) || void 0 === r ? void 0 : r.SITE), a
			}
			return t = l, (n = [{
				key: "render",
				value: function() {
					var e = this.BugWrapper;
					return o.a.createElement(e, null, o.a.createElement(a.a, {
						store: Me
					}, o.a.createElement(Ft, null, o.a.createElement(s.a, {
						i18n: d
					}, o.a.createElement(k.a, {
						loading: o.a.createElement(Bt.a, {
							text: "Loading..."
						}),
						persistor: Ue
					}, o.a.createElement(Zr, null), o.a.createElement(Gr, null), o.a.createElement(i.a, null, o.a.createElement(wt, null, o.a.createElement(i.c, null, this.routes))))))))
				}
			}]) && no(t.prototype, n), r && no(t, r), l
		}(o.a.PureComponent);
		t.a = so
	},
	40: function(e, t, n) {
		"use strict";
		var r = n(6),
			o = n(0),
			a = n.n(o),
			i = n(28),
			s = n.n(i),
			c = (n(1), n(74)),
			l = n(21);

		function u(e) {
			return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}

		function p(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function f(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
			}
		}

		function d(e, t) {
			return (d = Object.setPrototypeOf || function(e, t) {
				return e.__proto__ = t, e
			})(e, t)
		}

		function m(e) {
			var t = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
				} catch (e) {
					return !1
				}
			}();
			return function() {
				var n, r = y(e);
				if (t) {
					var o = y(this).constructor;
					n = Reflect.construct(r, arguments, o)
				} else n = r.apply(this, arguments);
				return h(this, n)
			}
		}

		function h(e, t) {
			return !t || "object" !== u(t) && "function" != typeof t ? function(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}(e) : t
		}

		function y(e) {
			return (y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
				return e.__proto__ || Object.getPrototypeOf(e)
			})(e)
		}
		var g = function(e) {
				! function(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							writable: !0,
							configurable: !0
						}
					}), t && d(e, t)
				}(i, e);
				var t, n, r, o = m(i);

				function i() {
					var e;
					p(this, i);
					for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
					return (e = o.call.apply(o, [this].concat(n))).state = {
						showMathProblemTypeSelector: !1
					}, e.onCloseMathProblemTypeSelector = function() {
						e.setState({
							showMathProblemTypeSelector: !1
						})
					}, e.onShowProblemTypeSelector = function() {
						e.setState({
							showMathProblemTypeSelector: !0
						})
					}, e.onSelectMathProblemType = function(t) {
						e.props.setSelectedMathProblemType(t), e.navigateToRace()
					}, e.onRequestRace = function() {
						e.navigateToRace()
					}, e.navigateToRace = function() {
						var t = e.isNitroMath ? "/play" : "/race";
						e.isFriendsRace && (t += "/".concat(e.props.user.username)), e.props.onClick && e.props.onClick(), window.__navigateTo(t)
					}, e
				}
				return t = i, (n = [{
					key: "isNitroMath",
					get: function() {
						return "nitromath" === this.props.site
					}
				}, {
					key: "isFriendsRace",
					get: function() {
						return ["friends-race", "friend-race"].includes(this.props.type)
					}
				}, {
					key: "defaultLabel",
					get: function() {
						return this.isNitroMath ? "Play" : "Race"
					}
				}, {
					key: "renderIcon",
					value: function() {
						return this.props.icon ? this.isFriendsRace ? a.a.createElement("svg", {
							className: "icon icon-friends btn-icon"
						}, a.a.createElement("use", {
							xmlnsXlink: "http://www.w3.org/1999/xlink",
							xlinkHref: "/dist/site/images/icons/icons.css.svg#icon-friends"
						})) : a.a.createElement("svg", {
							className: "icon icon-double-arrows btn-icon"
						}, a.a.createElement("use", {
							xmlnsXlink: "http://www.w3.org/1999/xlink",
							xlinkHref: "/dist/site/images/icons/icons.css.svg#icon-double-arrows"
						})) : null
					}
				}, {
					key: "renderMathProblemTypeSelector",
					value: function() {
						var e = this.onCloseMathProblemTypeSelector;
						return s.a.createPortal(a.a.createElement(c.a, {
							teardown: e,
							size: "m",
							visible: !!this.state.showMathProblemTypeSelector,
							onSelectMathProblemType: this.onSelectMathProblemType
						}), document.body)
					}
				}, {
					key: "renderButton",
					value: function() {
						var e = "back" === this.props.iconPosition,
							t = a.a.createElement(a.a.Fragment, null, !e && this.renderIcon(), this.props.label || this.props.children || "".concat(this.defaultLabel, " Now"), e && this.renderIcon());
						return a.a.createElement(a.a.Fragment, null, a.a.createElement(l.b, null, a.a.createElement("a", {
							onClick: this.onRequestRace,
							className: this.props.className
						}, t)), a.a.createElement(l.a, null, a.a.createElement("a", {
							onClick: this.onShowProblemTypeSelector,
							className: this.props.className
						}, t)))
					}
				}, {
					key: "render",
					value: function() {
						return a.a.createElement(a.a.Fragment, null, this.renderMathProblemTypeSelector(), this.renderButton())
					}
				}]) && f(t.prototype, n), r && f(t, r), i
			}(a.a.PureComponent),
			v = n(16),
			b = n(11),
			w = n(35);
		t.a = Object(r.b)((function(e) {
			return {
				user: e.user,
				site: e.globals.SITE,
				selectedMathProblemType: Object(w.getSelectedMathProblemTypeId)(e)
			}
		}), (function(e) {
			return {
				setSelectedMathProblemType: function(t) {
					e(Object(b.n)(t))
				},
				showMathProblemTypeSelector: function() {
					e(v.b.addNotifications([{
						type: "mathProblemTypeSelector"
					}]))
				}
			}
		}))(g)
	},
	41: function(e, t, n) {
		"use strict";
		n.d(t, "a", (function() {
			return d
		}));
		var r = n(0),
			o = n.n(r);
		n(1);

		function a(e) {
			return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}

		function i() {
			return (i = Object.assign || function(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = arguments[t];
					for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
				}
				return e
			}).apply(this, arguments)
		}

		function s(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function c(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
			}
		}

		function l(e, t) {
			return (l = Object.setPrototypeOf || function(e, t) {
				return e.__proto__ = t, e
			})(e, t)
		}

		function u(e) {
			var t = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
				} catch (e) {
					return !1
				}
			}();
			return function() {
				var n, r = f(e);
				if (t) {
					var o = f(this).constructor;
					n = Reflect.construct(r, arguments, o)
				} else n = r.apply(this, arguments);
				return p(this, n)
			}
		}

		function p(e, t) {
			return !t || "object" !== a(t) && "function" != typeof t ? function(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}(e) : t
		}

		function f(e) {
			return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
				return e.__proto__ || Object.getPrototypeOf(e)
			})(e)
		}
		var d = function(e) {
			! function(e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						writable: !0,
						configurable: !0
					}
				}), t && l(e, t)
			}(p, e);
			var t, n, r, a = u(p);

			function p() {
				var e;
				s(this, p);
				for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
				return (e = a.call.apply(a, [this].concat(n))).selfRef = o.a.createRef(), e.containerRef = o.a.createRef(), e
			}
			return t = p, (n = [{
				key: "componentDidMount",
				value: function() {
					this.calculateFit()
				}
			}, {
				key: "componentDidUpdate",
				value: function(e, t, n) {
					this.calculateFit()
				}
			}, {
				key: "calculateFit",
				value: function() {
					var e = this.selfRef.current,
						t = this.containerRef.current,
						n = null == t ? void 0 : t.parentElement;
					if (t && e && n) {
						for (var r; n;) {
							if (n.clientWidth > 0) {
								r = n.clientWidth;
								break
							}
							n = n.parentElement
						}
						var o = Math.min(1, r / e.clientWidth);
						"left" === this.props.align ? (e.style.transform = "translate(-".concat((1 - o) / 2 * 100, "%, 0) scale(").concat(o, ", 1)"), e.style.left = "0") : "right" === this.props.align ? (e.style.transform = "translate(-100%, 0) scale(".concat(o, ", 1)"), e.style.left = "100%") : (e.style.transform = "translate(-50%, 0) scale(".concat(o, ", 1)"), e.style.left = "50%"), t.style.height = "".concat(e.clientHeight, "px")
					}
				}
			}, {
				key: "render",
				value: function() {
					return o.a.createElement("div", {
						ref: this.containerRef
					}, o.a.createElement("div", i({}, this.props, {
						style: {
							whiteSpace: "nowrap",
							position: "absolute"
						},
						ref: this.selfRef
					}), this.props.text || this.props.children))
				}
			}]) && c(t.prototype, n), r && c(t, r), p
		}(o.a.PureComponent)
	},
	42: function(e, t, n) {
		"use strict";
		n.d(t, "a", (function() {
			return i
		}));
		var r = n(0),
			o = n.n(r),
			a = n(2);

		function i(e) {
			return o.a.createElement("span", {
				className: "as-nitro-cash--prefix"
			}, "$", Object(a.g)(e.amount))
		}
	},
	43: function(e, t, n) {
		"use strict";
		n.d(t, "b", (function() {
			return o
		})), n.d(t, "c", (function() {
			return r
		}));
		var r = {};
		n.r(r), n.d(r, "SET_STATS_CHART_DATA", (function() {
			return a
		})), n.d(r, "CLEAR_CHART_DATA", (function() {
			return i
		})), n.d(r, "SET_RACE_LOGS", (function() {
			return s
		})), n.d(r, "SET_RACING_STATS", (function() {
			return c
		})), n.d(r, "FETCH_RACE_DATA", (function() {
			return l
		})), n.d(r, "CLEAR_RACE_DATA", (function() {
			return u
		}));
		var o = {};
		n.r(o), n.d(o, "fetchStatsChartData", (function() {
			return O
		})), n.d(o, "fetchRaceLogs", (function() {
			return S
		})), n.d(o, "fetchRacingStats", (function() {
			return _
		})), n.d(o, "fetchRaceData", (function() {
			return T
		})), n.d(o, "clearRaceData", (function() {
			return N
		}));
		var a = "nitrotype/stats/SET_STATS_CHART_DATA",
			i = "nitrotype/stats/CLEAR_CHART_DATA",
			s = "nitrotype/stats/SET_RACE_LOGS",
			c = "nitrotype/stats/SET_RACING_STATS",
			l = "nitrotype/stats/FETCH_RACE_DATA",
			u = "nitrotype/stats/CLEAR_RACE_DATA";

		function p(e, t) {
			var n = Object.keys(e);
			if (Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(e);
				t && (r = r.filter((function(t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				}))), n.push.apply(n, r)
			}
			return n
		}

		function f(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = null != arguments[t] ? arguments[t] : {};
				t % 2 ? p(Object(n), !0).forEach((function(t) {
					d(e, t, n[t])
				})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach((function(t) {
					Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
				}))
			}
			return e
		}

		function d(e, t, n) {
			return t in e ? Object.defineProperty(e, t, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = n, e
		}
		var m = {
				chartData: null,
				raceLogs: null,
				totalRecords: null,
				raceData: null
			},
			h = function(e, t) {
				return f(f({}, e), {}, {
					chartData: t
				})
			},
			y = function(e, t) {
				return f(f({}, e), {}, {
					raceLogs: t.logs || null,
					totalRecords: t.totalRecords || 0
				})
			},
			g = function(e, t) {
				return f(f({}, e), {}, {
					raceData: t
				})
			},
			v = function(e) {
				return f(f({}, e), {}, {
					raceData: null
				})
			},
			b = function() {
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case a:
						return h(e, t.payload);
					case i:
						return f({}, m);
					case s:
						return y(e, t.payload);
					case l:
						return g(e, t.payload);
					case u:
						return v(e, t.payload)
				}
				return e
			},
			w = function(e) {
				return {
					type: s,
					payload: e
				}
			},
			E = n(2),
			O = function(e) {
				return function(t) {
					var n = "/api/v2/stats/graphs/".concat(e);
					Object(E.b)(n, {
						method: "get",
						apiScope: "fetchStatsChart"
					}, t).then((function(e) {
						t(function(e) {
							return {
								type: a,
								payload: e
							}
						}(e))
					}), (function(e) {
						console.error("error fetching racelog", e)
					}))
				}
			},
			S = function(e) {
				var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
					n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 30;
				return function(r) {
					var o = "/api/v2/stats/data/".concat(e, "?page=").concat(t, "&limit=").concat(n);
					Object(E.b)(o, {
						method: "get",
						apiScope: "fetchRaceLogs"
					}, r).then((function(e) {
						r(w(e))
					}), (function(e) {
						console.error("error fetching racelog", e)
					}))
				}
			},
			_ = function() {
				return function(e) {
					Object(E.b)("/api/v2/stats/summary", {}, e).then((function(t) {
						e({
							type: c,
							payload: t
						})
					}), (function(e) {
						console.warn(e)
					}), (function() {}))
				}
			},
			T = function(e) {
				return function(t) {
					Object(E.b)("/api/v2/race/".concat(e), {
						method: "get",
						apiScope: "fetchRaceData"
					}, t).then((function(e) {
						t(function(e) {
							return {
								type: l,
								payload: e
							}
						}(e))
					}), (function() {}))
				}
			},
			N = function() {
				return {
					type: u
				}
			};
		n(81), t.a = b
	},
	44: function(e, t, n) {
		(function(r) {
			var o;

			function a(e) {
				return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
					return typeof e
				} : function(e) {
					return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
				})(e)
			}! function(r, a, i, s) {
				a[r] = i.call(a);
				for (var c = 0; c < s.length; c++) s[c](a[r]);
				e.exports ? e.exports = a[r] : void 0 === (o = function() {
					return a[r]
				}.call(t, n, t, e)) || (e.exports = o)
			}("Primus", this || {}, (function() {
				var e = function e(t, n, r) {
					function o(i, s) {
						if (!n[i]) {
							if (!t[i]) {
								if (a) return a(i, !0);
								var c = new Error("Cannot find module '" + i + "'");
								throw c.code = "MODULE_NOT_FOUND", c
							}
							var l = n[i] = {
								exports: {}
							};
							t[i][0].call(l.exports, (function(e) {
								return o(t[i][1][e] || e)
							}), l, l.exports, e, t, n, r)
						}
						return n[i].exports
					}
					for (var a = !1, i = 0; i < r.length; i++) o(r[i]);
					return o
				}({
					1: [function(e, t, n) {
						"use strict";
						t.exports = function(e, t) {
							var n = /[, ]+/;

							function r(e, r) {
								if (t[e]) {
									if ("string" == typeof t[e] && (t[e] = t[e].split(n)), "function" == typeof t[e]) return t[e].call(r);
									for (var o, i, s = 0; s < t[e].length; s++) "function" === (o = a(i = t[e][s])) ? i.call(r) : "string" === o && "function" == typeof r[i] && r[i]()
								}
							}
							return t = t || {}, "string" == typeof(e = e || []) && (e = e.split(n)),
								function() {
									var t, n = 0;
									if (null === this[e[0]]) return !1;
									for (r("before", this); n < e.length; n++) this[t = e[n]] && ("function" == typeof this[t].destroy && this[t].destroy(), this[t] = null);
									return this.emit && this.emit("destroy"), r("after", this), !0
								}
						}
					}, {}],
					2: [function(e, t, n) {
						"use strict";
						t.exports = function() {
							for (var e, t = this, n = 0, r = arguments.length, o = new Array(r); n < r; n++) o[n] = arguments[n];
							return "function" != typeof o[o.length - 1] ? function() {
								for (var e = 0, n = arguments.length, r = new Array(n); e < n; e++) r[e] = arguments[e];
								return t.emit.apply(t, o.concat(r))
							} : (e = o.pop(), function() {
								for (var n = 0, r = arguments.length, a = new Array(r + 1); n < r; n++) a[n + 1] = arguments[n];
								return a[0] = function(e, n) {
									if (e) return t.emit("error", e);
									a = void 0 === n ? a.slice(1) : null === n ? [] : n, t.emit.apply(t, o.concat(a))
								}, e.apply(t, a), !0
							})
						}
					}, {}],
					3: [function(e, t, n) {
						"use strict";
						var r = Object.prototype.hasOwnProperty,
							o = "~";

						function a() {}

						function i(e, t, n) {
							this.fn = e, this.context = t, this.once = n || !1
						}

						function s(e, t, n, r, a) {
							if ("function" != typeof n) throw new TypeError("The listener must be a function");
							var s = new i(n, r || e, a),
								c = o ? o + t : t;
							return e._events[c] ? e._events[c].fn ? e._events[c] = [e._events[c], s] : e._events[c].push(s) : (e._events[c] = s, e._eventsCount++), e
						}

						function c(e, t) {
							0 == --e._eventsCount ? e._events = new a : delete e._events[t]
						}

						function l() {
							this._events = new a, this._eventsCount = 0
						}
						Object.create && (a.prototype = Object.create(null), (new a).__proto__ || (o = !1)), l.prototype.eventNames = function() {
							var e, t, n = [];
							if (0 === this._eventsCount) return n;
							for (t in e = this._events) r.call(e, t) && n.push(o ? t.slice(1) : t);
							return Object.getOwnPropertySymbols ? n.concat(Object.getOwnPropertySymbols(e)) : n
						}, l.prototype.listeners = function(e) {
							var t = o ? o + e : e,
								n = this._events[t];
							if (!n) return [];
							if (n.fn) return [n.fn];
							for (var r = 0, a = n.length, i = new Array(a); r < a; r++) i[r] = n[r].fn;
							return i
						}, l.prototype.listenerCount = function(e) {
							var t = o ? o + e : e,
								n = this._events[t];
							return n ? n.fn ? 1 : n.length : 0
						}, l.prototype.emit = function(e, t, n, r, a, i) {
							var s = o ? o + e : e;
							if (!this._events[s]) return !1;
							var c, l, u = this._events[s],
								p = arguments.length;
							if (u.fn) {
								switch (u.once && this.removeListener(e, u.fn, void 0, !0), p) {
									case 1:
										return u.fn.call(u.context), !0;
									case 2:
										return u.fn.call(u.context, t), !0;
									case 3:
										return u.fn.call(u.context, t, n), !0;
									case 4:
										return u.fn.call(u.context, t, n, r), !0;
									case 5:
										return u.fn.call(u.context, t, n, r, a), !0;
									case 6:
										return u.fn.call(u.context, t, n, r, a, i), !0
								}
								for (l = 1, c = new Array(p - 1); l < p; l++) c[l - 1] = arguments[l];
								u.fn.apply(u.context, c)
							} else {
								var f, d = u.length;
								for (l = 0; l < d; l++) switch (u[l].once && this.removeListener(e, u[l].fn, void 0, !0), p) {
									case 1:
										u[l].fn.call(u[l].context);
										break;
									case 2:
										u[l].fn.call(u[l].context, t);
										break;
									case 3:
										u[l].fn.call(u[l].context, t, n);
										break;
									case 4:
										u[l].fn.call(u[l].context, t, n, r);
										break;
									default:
										if (!c)
											for (f = 1, c = new Array(p - 1); f < p; f++) c[f - 1] = arguments[f];
										u[l].fn.apply(u[l].context, c)
								}
							}
							return !0
						}, l.prototype.on = function(e, t, n) {
							return s(this, e, t, n, !1)
						}, l.prototype.once = function(e, t, n) {
							return s(this, e, t, n, !0)
						}, l.prototype.removeListener = function(e, t, n, r) {
							var a = o ? o + e : e;
							if (!this._events[a]) return this;
							if (!t) return c(this, a), this;
							var i = this._events[a];
							if (i.fn) i.fn !== t || r && !i.once || n && i.context !== n || c(this, a);
							else {
								for (var s = 0, l = [], u = i.length; s < u; s++)(i[s].fn !== t || r && !i[s].once || n && i[s].context !== n) && l.push(i[s]);
								l.length ? this._events[a] = 1 === l.length ? l[0] : l : c(this, a)
							}
							return this
						}, l.prototype.removeAllListeners = function(e) {
							var t;
							return e ? (t = o ? o + e : e, this._events[t] && c(this, t)) : (this._events = new a, this._eventsCount = 0), this
						}, l.prototype.off = l.prototype.removeListener, l.prototype.addListener = l.prototype.on, l.prefixed = o, l.EventEmitter = l, void 0 !== t && (t.exports = l)
					}, {}],
					4: [function(e, t, n) {
						"function" == typeof Object.create ? t.exports = function(e, t) {
							t && (e.super_ = t, e.prototype = Object.create(t.prototype, {
								constructor: {
									value: e,
									enumerable: !1,
									writable: !0,
									configurable: !0
								}
							}))
						} : t.exports = function(e, t) {
							if (t) {
								e.super_ = t;
								var n = function() {};
								n.prototype = t.prototype, e.prototype = new n, e.prototype.constructor = e
							}
						}
					}, {}],
					5: [function(e, t, n) {
						"use strict";
						var r = new RegExp("^((?:\\d+)?\\.?\\d+) *(" + ["milliseconds?", "msecs?", "ms", "seconds?", "secs?", "s", "minutes?", "mins?", "m", "hours?", "hrs?", "h", "days?", "d", "weeks?", "wks?", "w", "years?", "yrs?", "y"].join("|") + ")?$", "i"),
							o = 864e5;
						t.exports = function(e) {
							var t, n, i = a(e);
							if ("number" === i) return e;
							if ("string" !== i || "0" === e || !e) return 0;
							if (+e) return +e;
							if (e.length > 1e4 || !(n = r.exec(e))) return 0;
							switch (t = parseFloat(n[1]), n[2].toLowerCase()) {
								case "years":
								case "year":
								case "yrs":
								case "yr":
								case "y":
									return 31536e6 * t;
								case "weeks":
								case "week":
								case "wks":
								case "wk":
								case "w":
									return 6048e5 * t;
								case "days":
								case "day":
								case "d":
									return t * o;
								case "hours":
								case "hour":
								case "hrs":
								case "hr":
								case "h":
									return 36e5 * t;
								case "minutes":
								case "minute":
								case "mins":
								case "min":
								case "m":
									return 6e4 * t;
								case "seconds":
								case "second":
								case "secs":
								case "sec":
								case "s":
									return 1e3 * t;
								default:
									return t
							}
						}
					}, {}],
					6: [function(e, t, n) {
						"use strict";
						t.exports = function(e) {
							var t, n = 0;

							function r() {
								return n || (n = 1, t = e.apply(this, arguments), e = null), t
							}
							return r.displayName = e.displayName || e.name || r.displayName || r.name, r
						}
					}, {}],
					7: [function(e, t, n) {
						var r, o, a = t.exports = {};

						function i() {
							throw new Error("setTimeout has not been defined")
						}

						function s() {
							throw new Error("clearTimeout has not been defined")
						}

						function c(e) {
							if (r === setTimeout) return setTimeout(e, 0);
							if ((r === i || !r) && setTimeout) return r = setTimeout, setTimeout(e, 0);
							try {
								return r(e, 0)
							} catch (t) {
								try {
									return r.call(null, e, 0)
								} catch (t) {
									return r.call(this, e, 0)
								}
							}
						}! function() {
							try {
								r = "function" == typeof setTimeout ? setTimeout : i
							} catch (e) {
								r = i
							}
							try {
								o = "function" == typeof clearTimeout ? clearTimeout : s
							} catch (e) {
								o = s
							}
						}();
						var l, u = [],
							p = !1,
							f = -1;

						function d() {
							p && l && (p = !1, l.length ? u = l.concat(u) : f = -1, u.length && m())
						}

						function m() {
							if (!p) {
								var e = c(d);
								p = !0;
								for (var t = u.length; t;) {
									for (l = u, u = []; ++f < t;) l && l[f].run();
									f = -1, t = u.length
								}
								l = null, p = !1,
									function(e) {
										if (o === clearTimeout) return clearTimeout(e);
										if ((o === s || !o) && clearTimeout) return o = clearTimeout, clearTimeout(e);
										try {
											o(e)
										} catch (t) {
											try {
												return o.call(null, e)
											} catch (t) {
												return o.call(this, e)
											}
										}
									}(e)
							}
						}

						function h(e, t) {
							this.fun = e, this.array = t
						}

						function y() {}
						a.nextTick = function(e) {
							var t = new Array(arguments.length - 1);
							if (arguments.length > 1)
								for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
							u.push(new h(e, t)), 1 !== u.length || p || c(m)
						}, h.prototype.run = function() {
							this.fun.apply(null, this.array)
						}, a.title = "browser", a.browser = !0, a.env = {}, a.argv = [], a.version = "", a.versions = {}, a.on = y, a.addListener = y, a.once = y, a.off = y, a.removeListener = y, a.removeAllListeners = y, a.emit = y, a.prependListener = y, a.prependOnceListener = y, a.listeners = function(e) {
							return []
						}, a.binding = function(e) {
							throw new Error("process.binding is not supported")
						}, a.cwd = function() {
							return "/"
						}, a.chdir = function(e) {
							throw new Error("process.chdir is not supported")
						}, a.umask = function() {
							return 0
						}
					}, {}],
					8: [function(e, t, n) {
						"use strict";
						var r = Object.prototype.hasOwnProperty;

						function o(e) {
							try {
								return decodeURIComponent(e.replace(/\+/g, " "))
							} catch (e) {
								return null
							}
						}
						n.stringify = function(e, t) {
							t = t || "";
							var n, o, a = [];
							for (o in "string" != typeof t && (t = "?"), e)
								if (r.call(e, o)) {
									if ((n = e[o]) || null != n && !isNaN(n) || (n = ""), o = encodeURIComponent(o), n = encodeURIComponent(n), null === o || null === n) continue;
									a.push(o + "=" + n)
								} return a.length ? t + a.join("&") : ""
						}, n.parse = function(e) {
							for (var t, n = /([^=?&]+)=?([^&]*)/g, r = {}; t = n.exec(e);) {
								var a = o(t[1]),
									i = o(t[2]);
								null === a || null === i || a in r || (r[a] = i)
							}
							return r
						}
					}, {}],
					9: [function(e, t, n) {
						"use strict";
						var r = e("eventemitter3"),
							o = e("millisecond"),
							a = e("demolish"),
							i = e("tick-tock"),
							s = e("one-time");

						function c(e, t, n) {
							return o(e in n ? n[e] : e in t ? t[e] : l[e])
						}

						function l(e) {
							if (!(this instanceof l)) return new l(e);
							e = e || {}, this.attempt = null, this._fn = null, this["reconnect timeout"] = c("reconnect timeout", this, e), this.retries = c("retries", this, e), this.factor = c("factor", this, e), this.max = c("max", this, e), this.min = c("min", this, e), this.timers = new i(this)
						}
						l.prototype = new r, l.prototype.constructor = l, l["reconnect timeout"] = "30 seconds", l.max = 1 / 0, l.min = "500 ms", l.retries = 10, l.factor = 2, l.prototype.reconnect = function() {
							var e = this;
							return e.backoff((function(t, n) {
								if (n.duration = +new Date - n.start, t) return e.emit("reconnect failed", t, n);
								e.emit("reconnected", n)
							}), e.attempt)
						}, l.prototype.backoff = function(e, t) {
							var n = this;
							return (t = t || n.attempt || {}).backoff ? n : (t["reconnect timeout"] = c("reconnect timeout", n, t), t.retries = c("retries", n, t), t.factor = c("factor", n, t), t.max = c("max", n, t), t.min = c("min", n, t), t.start = +t.start || +new Date, t.duration = +t.duration || 0, t.attempt = +t.attempt || 0, t.attempt === t.retries ? (e.call(n, new Error("Unable to recover"), t), n) : (t.backoff = !0, t.attempt++, n.attempt = t, t.scheduled = 1 !== t.attempt ? Math.min(Math.round((Math.random() + 1) * t.min * Math.pow(t.factor, t.attempt - 1)), t.max) : t.min, n.timers.setTimeout("reconnect", (function() {
								t.duration = +new Date - t.start, t.backoff = !1, n.timers.clear("reconnect, timeout");
								var r = n._fn = s((function(r) {
									if (n.reset(), r) return n.backoff(e, t);
									e.call(n, void 0, t)
								}));
								n.emit("reconnect", t, r), n.timers.setTimeout("timeout", (function() {
									var e = new Error("Failed to reconnect in a timely manner");
									t.duration = +new Date - t.start, n.emit("reconnect timeout", e, t), r(e)
								}), t["reconnect timeout"])
							}), t.scheduled), n.emit("reconnect scheduled", t), n))
						}, l.prototype.reconnecting = function() {
							return !!this.attempt
						}, l.prototype.reconnected = function(e) {
							return this._fn && this._fn(e), this
						}, l.prototype.reset = function() {
							return this._fn = this.attempt = null, this.timers.clear("reconnect, timeout"), this
						}, l.prototype.destroy = a("timers attempt _fn"), t.exports = l
					}, {
						demolish: 1,
						eventemitter3: 10,
						millisecond: 5,
						"one-time": 6,
						"tick-tock": 12
					}],
					10: [function(e, t, n) {
						"use strict";
						var r = "function" != typeof Object.create && "~";

						function o(e, t, n) {
							this.fn = e, this.context = t, this.once = n || !1
						}

						function a() {}
						a.prototype._events = void 0, a.prototype.listeners = function(e, t) {
							var n = r ? r + e : e,
								o = this._events && this._events[n];
							if (t) return !!o;
							if (!o) return [];
							if (o.fn) return [o.fn];
							for (var a = 0, i = o.length, s = new Array(i); a < i; a++) s[a] = o[a].fn;
							return s
						}, a.prototype.emit = function(e, t, n, o, a, i) {
							var s = r ? r + e : e;
							if (!this._events || !this._events[s]) return !1;
							var c, l, u = this._events[s],
								p = arguments.length;
							if ("function" == typeof u.fn) {
								switch (u.once && this.removeListener(e, u.fn, void 0, !0), p) {
									case 1:
										return u.fn.call(u.context), !0;
									case 2:
										return u.fn.call(u.context, t), !0;
									case 3:
										return u.fn.call(u.context, t, n), !0;
									case 4:
										return u.fn.call(u.context, t, n, o), !0;
									case 5:
										return u.fn.call(u.context, t, n, o, a), !0;
									case 6:
										return u.fn.call(u.context, t, n, o, a, i), !0
								}
								for (l = 1, c = new Array(p - 1); l < p; l++) c[l - 1] = arguments[l];
								u.fn.apply(u.context, c)
							} else {
								var f, d = u.length;
								for (l = 0; l < d; l++) switch (u[l].once && this.removeListener(e, u[l].fn, void 0, !0), p) {
									case 1:
										u[l].fn.call(u[l].context);
										break;
									case 2:
										u[l].fn.call(u[l].context, t);
										break;
									case 3:
										u[l].fn.call(u[l].context, t, n);
										break;
									default:
										if (!c)
											for (f = 1, c = new Array(p - 1); f < p; f++) c[f - 1] = arguments[f];
										u[l].fn.apply(u[l].context, c)
								}
							}
							return !0
						}, a.prototype.on = function(e, t, n) {
							var a = new o(t, n || this),
								i = r ? r + e : e;
							return this._events || (this._events = r ? {} : Object.create(null)), this._events[i] ? this._events[i].fn ? this._events[i] = [this._events[i], a] : this._events[i].push(a) : this._events[i] = a, this
						}, a.prototype.once = function(e, t, n) {
							var a = new o(t, n || this, !0),
								i = r ? r + e : e;
							return this._events || (this._events = r ? {} : Object.create(null)), this._events[i] ? this._events[i].fn ? this._events[i] = [this._events[i], a] : this._events[i].push(a) : this._events[i] = a, this
						}, a.prototype.removeListener = function(e, t, n, o) {
							var a = r ? r + e : e;
							if (!this._events || !this._events[a]) return this;
							var i = this._events[a],
								s = [];
							if (t)
								if (i.fn)(i.fn !== t || o && !i.once || n && i.context !== n) && s.push(i);
								else
									for (var c = 0, l = i.length; c < l; c++)(i[c].fn !== t || o && !i[c].once || n && i[c].context !== n) && s.push(i[c]);
							return s.length ? this._events[a] = 1 === s.length ? s[0] : s : delete this._events[a], this
						}, a.prototype.removeAllListeners = function(e) {
							return this._events ? (e ? delete this._events[r ? r + e : e] : this._events = r ? {} : Object.create(null), this) : this
						}, a.prototype.off = a.prototype.removeListener, a.prototype.addListener = a.prototype.on, a.prototype.setMaxListeners = function() {
							return this
						}, a.prefixed = r, void 0 !== t && (t.exports = a)
					}, {}],
					11: [function(e, t, n) {
						"use strict";
						t.exports = function(e, t) {
							if (t = t.split(":")[0], !(e = +e)) return !1;
							switch (t) {
								case "http":
								case "ws":
									return 80 !== e;
								case "https":
								case "wss":
									return 443 !== e;
								case "ftp":
									return 21 !== e;
								case "gopher":
									return 70 !== e;
								case "file":
									return !1
							}
							return 0 !== e
						}
					}, {}],
					12: [function(e, t, n) {
						(function(n, r) {
							"use strict";
							var o = Object.prototype.hasOwnProperty,
								a = e("millisecond");

							function i(e, t, n, r) {
								this.start = +new Date, this.duration = n, this.clear = t, this.timer = e, this.fns = [r]
							}

							function s(e) {
								clearTimeout(e)
							}

							function c(e) {
								clearInterval(e)
							}

							function l(e) {
								r(e)
							}

							function u(e) {
								if (!(this instanceof u)) return new u(e);
								this.timers = {}, this.context = e || this
							}
							i.prototype.remaining = function() {
								return this.duration - this.taken()
							}, i.prototype.taken = function() {
								return +new Date - this.start
							}, u.prototype.tock = function(e, t) {
								var n = this;
								return function() {
									if (e in n.timers) {
										var r = n.timers[e].fns.slice(),
											o = r.length,
											a = 0;
										for (t ? n.clear(e) : n.start = +new Date; a < o; a++) r[a].call(n.context)
									}
								}
							}, u.prototype.setTimeout = function(e, t, n) {
								var r;
								return this.timers[e] ? (this.timers[e].fns.push(t), this) : (r = a(n), this.timers[e] = new i(setTimeout(this.tock(e, !0), a(n)), s, r, t), this)
							}, u.prototype.setInterval = function(e, t, n) {
								var r;
								return this.timers[e] ? (this.timers[e].fns.push(t), this) : (r = a(n), this.timers[e] = new i(setInterval(this.tock(e), a(n)), c, r, t), this)
							}, u.prototype.setImmediate = function(e, t) {
								return "function" != typeof n ? this.setTimeout(e, t, 0) : this.timers[e] ? (this.timers[e].fns.push(t), this) : (this.timers[e] = new i(n(this.tock(e, !0)), l, 0, t), this)
							}, u.prototype.active = function(e) {
								return e in this.timers
							}, u.prototype.clear = function() {
								var e, t, n, r = arguments.length ? arguments : [],
									a = this;
								if (1 === r.length && "string" == typeof r[0] && (r = r[0].split(/[, ]+/)), !r.length)
									for (e in a.timers) o.call(a.timers, e) && r.push(e);
								for (t = 0, n = r.length; t < n; t++)(e = a.timers[r[t]]) && (e.clear(e.timer), e.fns = e.timer = e.clear = null, delete a.timers[r[t]]);
								return a
							}, u.prototype.adjust = function(e, t) {
								var n, r = a(t),
									o = this.timers[e];
								return o ? (n = o.clear === c, o.clear(o.timer), o.start = +new Date, o.duration = r, o.timer = (n ? setInterval : setTimeout)(this.tock(e, !n), r), this) : this
							}, u.prototype.end = u.prototype.destroy = function() {
								return !!this.context && (this.clear(), this.context = this.timers = null, !0)
							}, u.Timer = i, t.exports = u
						}).call(this, e("timers").setImmediate, e("timers").clearImmediate)
					}, {
						millisecond: 5,
						timers: 13
					}],
					13: [function(e, t, n) {
						(function(t, r) {
							var o = e("process/browser.js").nextTick,
								a = Function.prototype.apply,
								i = Array.prototype.slice,
								s = {},
								c = 0;

							function l(e, t) {
								this._id = e, this._clearFn = t
							}
							n.setTimeout = function() {
								return new l(a.call(setTimeout, window, arguments), clearTimeout)
							}, n.setInterval = function() {
								return new l(a.call(setInterval, window, arguments), clearInterval)
							}, n.clearTimeout = n.clearInterval = function(e) {
								e.close()
							}, l.prototype.unref = l.prototype.ref = function() {}, l.prototype.close = function() {
								this._clearFn.call(window, this._id)
							}, n.enroll = function(e, t) {
								clearTimeout(e._idleTimeoutId), e._idleTimeout = t
							}, n.unenroll = function(e) {
								clearTimeout(e._idleTimeoutId), e._idleTimeout = -1
							}, n._unrefActive = n.active = function(e) {
								clearTimeout(e._idleTimeoutId);
								var t = e._idleTimeout;
								t >= 0 && (e._idleTimeoutId = setTimeout((function() {
									e._onTimeout && e._onTimeout()
								}), t))
							}, n.setImmediate = "function" == typeof t ? t : function(e) {
								var t = c++,
									r = !(arguments.length < 2) && i.call(arguments, 1);
								return s[t] = !0, o((function() {
									s[t] && (r ? e.apply(null, r) : e.call(null), n.clearImmediate(t))
								})), t
							}, n.clearImmediate = "function" == typeof r ? r : function(e) {
								delete s[e]
							}
						}).call(this, e("timers").setImmediate, e("timers").clearImmediate)
					}, {
						"process/browser.js": 7,
						timers: 13
					}],
					14: [function(e, t, n) {
						(function(n) {
							"use strict";
							var r = e("requires-port"),
								o = e("querystringify"),
								i = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
								s = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i,
								c = new RegExp("^[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]+");

							function l(e) {
								return (e || "").toString().replace(c, "")
							}
							var u = [
									["#", "hash"],
									["?", "query"],
									function(e) {
										return e.replace("\\", "/")
									},
									["/", "pathname"],
									["@", "auth", 1],
									[NaN, "host", void 0, 1, 1],
									[/:(\d+)$/, "port", void 0, 1],
									[NaN, "hostname", void 0, 1, 1]
								],
								p = {
									hash: 1,
									query: 1
								};

							function f(e) {
								var t, r = ("undefined" != typeof window ? window : void 0 !== n ? n : "undefined" != typeof self ? self : {}).location || {},
									o = {},
									s = a(e = e || r);
								if ("blob:" === e.protocol) o = new m(unescape(e.pathname), {});
								else if ("string" === s)
									for (t in o = new m(e, {}), p) delete o[t];
								else if ("object" === s) {
									for (t in e) t in p || (o[t] = e[t]);
									void 0 === o.slashes && (o.slashes = i.test(e.href))
								}
								return o
							}

							function d(e) {
								e = l(e);
								var t = s.exec(e);
								return {
									protocol: t[1] ? t[1].toLowerCase() : "",
									slashes: !!t[2],
									rest: t[3]
								}
							}

							function m(e, t, n) {
								if (e = l(e), !(this instanceof m)) return new m(e, t, n);
								var i, s, c, p, h, y, g = u.slice(),
									v = a(t),
									b = this,
									w = 0;
								for ("object" !== v && "string" !== v && (n = t, t = null), n && "function" != typeof n && (n = o.parse), t = f(t), i = !(s = d(e || "")).protocol && !s.slashes, b.slashes = s.slashes || i && t.slashes, b.protocol = s.protocol || t.protocol || "", e = s.rest, s.slashes || (g[3] = [/(.*)/, "pathname"]); w < g.length; w++) "function" != typeof(p = g[w]) ? (c = p[0], y = p[1], c != c ? b[y] = e : "string" == typeof c ? ~(h = e.indexOf(c)) && ("number" == typeof p[2] ? (b[y] = e.slice(0, h), e = e.slice(h + p[2])) : (b[y] = e.slice(h), e = e.slice(0, h))) : (h = c.exec(e)) && (b[y] = h[1], e = e.slice(0, h.index)), b[y] = b[y] || i && p[3] && t[y] || "", p[4] && (b[y] = b[y].toLowerCase())) : e = p(e);
								n && (b.query = n(b.query)), i && t.slashes && "/" !== b.pathname.charAt(0) && ("" !== b.pathname || "" !== t.pathname) && (b.pathname = function(e, t) {
									if ("" === e) return t;
									for (var n = (t || "/").split("/").slice(0, -1).concat(e.split("/")), r = n.length, o = n[r - 1], a = !1, i = 0; r--;) "." === n[r] ? n.splice(r, 1) : ".." === n[r] ? (n.splice(r, 1), i++) : i && (0 === r && (a = !0), n.splice(r, 1), i--);
									return a && n.unshift(""), "." !== o && ".." !== o || n.push(""), n.join("/")
								}(b.pathname, t.pathname)), r(b.port, b.protocol) || (b.host = b.hostname, b.port = ""), b.username = b.password = "", b.auth && (p = b.auth.split(":"), b.username = p[0] || "", b.password = p[1] || ""), b.origin = b.protocol && b.host && "file:" !== b.protocol ? b.protocol + "//" + b.host : "null", b.href = b.toString()
							}
							m.prototype = {
								set: function(e, t, n) {
									var a = this;
									switch (e) {
										case "query":
											"string" == typeof t && t.length && (t = (n || o.parse)(t)), a[e] = t;
											break;
										case "port":
											a[e] = t, r(t, a.protocol) ? t && (a.host = a.hostname + ":" + t) : (a.host = a.hostname, a[e] = "");
											break;
										case "hostname":
											a[e] = t, a.port && (t += ":" + a.port), a.host = t;
											break;
										case "host":
											a[e] = t, /:\d+$/.test(t) ? (t = t.split(":"), a.port = t.pop(), a.hostname = t.join(":")) : (a.hostname = t, a.port = "");
											break;
										case "protocol":
											a.protocol = t.toLowerCase(), a.slashes = !n;
											break;
										case "pathname":
										case "hash":
											if (t) {
												var i = "pathname" === e ? "/" : "#";
												a[e] = t.charAt(0) !== i ? i + t : t
											} else a[e] = t;
											break;
										default:
											a[e] = t
									}
									for (var s = 0; s < u.length; s++) {
										var c = u[s];
										c[4] && (a[c[1]] = a[c[1]].toLowerCase())
									}
									return a.origin = a.protocol && a.host && "file:" !== a.protocol ? a.protocol + "//" + a.host : "null", a.href = a.toString(), a
								},
								toString: function(e) {
									e && "function" == typeof e || (e = o.stringify);
									var t, n = this,
										r = n.protocol;
									r && ":" !== r.charAt(r.length - 1) && (r += ":");
									var i = r + (n.slashes ? "//" : "");
									return n.username && (i += n.username, n.password && (i += ":" + n.password), i += "@"), i += n.host + n.pathname, (t = "object" === a(n.query) ? e(n.query) : n.query) && (i += "?" !== t.charAt(0) ? "?" + t : t), n.hash && (i += n.hash), i
								}
							}, m.extractProtocol = d, m.location = f, m.trimLeft = l, m.qs = o, t.exports = m
						}).call(this, void 0 !== r ? r : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
					}, {
						querystringify: 8,
						"requires-port": 11
					}],
					15: [function(e, t, n) {
						"use strict";
						var r, o = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),
							a = {},
							i = 0,
							s = 0;

						function c(e) {
							var t = "";
							do {
								t = o[e % 64] + t, e = Math.floor(e / 64)
							} while (e > 0);
							return t
						}

						function l() {
							var e = c(+new Date);
							return e !== r ? (i = 0, r = e) : e + "." + c(i++)
						}
						for (; s < 64; s++) a[o[s]] = s;
						l.encode = c, l.decode = function(e) {
							var t = 0;
							for (s = 0; s < e.length; s++) t = 64 * t + a[e.charAt(s)];
							return t
						}, t.exports = l
					}, {}],
					16: [function(e, t, n) {
						"use strict";
						var r, o = e("eventemitter3"),
							i = e("tick-tock"),
							s = e("recovery"),
							c = e("querystringify"),
							l = e("inherits"),
							u = e("demolish"),
							p = e("yeast"),
							f = /\u2028/g,
							d = /\u2029/g;

						function m(e, t) {
							if (!(e instanceof h)) {
								var n = new Error("Primus#" + t + "'s context should called with a Primus instance");
								if ("function" != typeof e.listeners || !e.listeners("error").length) throw n;
								e.emit("error", n)
							}
						}
						try {
							r = location.origin ? location.origin : location.protocol + "//" + location.host
						} catch (e) {
							r = "http://127.0.0.1"
						}

						function h(e, t) {
							if (!(this instanceof h)) return new h(e, t);
							if (h.Stream.call(this), "function" != typeof this.client) return this.critical(new Error("The client library has not been compiled correctly, see https://github.com/primus/primus#client-library for more details"));
							if ("object" === a(e) ? e = (t = e).url || t.uri || r : t = t || {}, "ping" in t || "pong" in t) return this.critical(new Error("The `ping` and `pong` options have been removed"));
							var n = this;
							t.queueSize = "queueSize" in t ? t.queueSize : 1 / 0, t.timeout = "timeout" in t ? t.timeout : 1e4, t.reconnect = "reconnect" in t ? t.reconnect : {}, t.pingTimeout = "pingTimeout" in t ? t.pingTimeout : 45e3, t.strategy = "strategy" in t ? t.strategy : [], t.transport = "transport" in t ? t.transport : {}, n.buffer = [], n.writable = !0, n.readable = !0, n.url = n.parse(e || r), n.readyState = h.CLOSED, n.options = t, n.timers = new i(this), n.socket = null, n.disconnect = !1, n.transport = t.transport, n.transformers = {
								outgoing: [],
								incoming: []
							}, n.recovery = new s(t.reconnect), "string" == typeof t.strategy && (t.strategy = t.strategy.split(/\s?,\s?/g)), !1 === t.strategy ? t.strategy = [] : t.strategy.length || (t.strategy.push("disconnect", "online"), this.authorization || t.strategy.push("timeout")), t.strategy = t.strategy.join(",").toLowerCase(), "websockets" in t && (n.AVOID_WEBSOCKETS = !t.websockets), "network" in t && (n.NETWORK_EVENTS = t.network), t.manual || n.timers.setTimeout("open", (function() {
								n.timers.clear("open"), n.open()
							}), 0), n.initialise(t)
						}
						h.requires = h.require = function(t) {
							if ("function" == typeof e) return e(t)
						};
						try {
							h.Stream = h.requires("stream")
						} catch (e) {}
						h.Stream || (h.Stream = o), l(h, h.Stream), h.OPENING = 1, h.CLOSED = 2, h.OPEN = 3, h.prototype.AVOID_WEBSOCKETS = !1, h.prototype.NETWORK_EVENTS = !1, h.prototype.online = !0;
						try {
							(h.prototype.NETWORK_EVENTS = "onLine" in navigator && (window.addEventListener || document.body.attachEvent)) && (navigator.onLine || (h.prototype.online = !1))
						} catch (e) {}
						if (h.prototype.ark = {}, h.prototype.emits = e("emits"), h.prototype.plugin = function(e) {
								if (m(this, "plugin"), e) return this.ark[e];
								var t = {};
								for (e in this.ark) t[e] = this.ark[e];
								return t
							}, h.prototype.reserved = function(e) {
								return /^(incoming|outgoing)::/.test(e) || e in this.reserved.events
							}, h.prototype.reserved.events = {
								"reconnect scheduled": 1,
								"reconnect timeout": 1,
								readyStateChange: 1,
								"reconnect failed": 1,
								reconnected: 1,
								reconnect: 1,
								offline: 1,
								timeout: 1,
								destroy: 1,
								online: 1,
								error: 1,
								close: 1,
								open: 1,
								data: 1,
								end: 1
							}, h.prototype.initialise = function(e) {
								var t = this;
								for (var n in t.recovery.on("reconnected", t.emits("reconnected")).on("reconnect failed", t.emits("reconnect failed", (function(e) {
										t.emit("end"), e()
									}))).on("reconnect timeout", t.emits("reconnect timeout")).on("reconnect scheduled", t.emits("reconnect scheduled")).on("reconnect", t.emits("reconnect", (function(e) {
										t.emit("outgoing::reconnect"), e()
									}))), t.on("outgoing::open", (function() {
										var e = t.readyState;
										t.readyState = h.OPENING, e !== t.readyState && t.emit("readyStateChange", "opening")
									})), t.on("incoming::open", (function() {
										var e = t.readyState;
										if (t.recovery.reconnecting() && t.recovery.reconnected(), t.writable = !0, t.readable = !0, t.online || (t.online = !0, t.emit("online")), t.readyState = h.OPEN, e !== t.readyState && t.emit("readyStateChange", "open"), t.heartbeat(), t.buffer.length) {
											var n = t.buffer.slice(),
												r = n.length,
												o = 0;
											for (t.buffer.length = 0; o < r; o++) t._write(n[o])
										}
										t.emit("open")
									})), t.on("incoming::ping", (function(e) {
										t.online = !0, t.heartbeat(), t.emit("outgoing::pong", e), t._write("primus::pong::" + e)
									})), t.on("incoming::error", (function(e) {
										var n = t.timers.active("connect"),
											r = e;
										if ("string" == typeof e) r = new Error(e);
										else if (!(e instanceof Error) && "object" === a(e))
											for (var o in r = new Error(e.message || e.reason), e) Object.prototype.hasOwnProperty.call(e, o) && (r[o] = e[o]);
										if (t.recovery.reconnecting()) return t.recovery.reconnected(r);
										t.listeners("error").length && t.emit("error", r), n && (~t.options.strategy.indexOf("timeout") ? t.recovery.reconnect() : t.end())
									})), t.on("incoming::data", (function(e) {
										t.decoder(e, (function(n, r) {
											if (n) return t.listeners("error").length && t.emit("error", n);
											t.protocol(r) || t.transforms(t, t, "incoming", r, e)
										}))
									})), t.on("incoming::end", (function() {
										var e = t.readyState;
										return t.disconnect ? (t.disconnect = !1, t.end()) : (t.readyState = h.CLOSED, e !== t.readyState && t.emit("readyStateChange", "end"), t.timers.active("connect") && t.end(), e !== h.OPEN ? !!t.recovery.reconnecting() && t.recovery.reconnect() : (this.writable = !1, this.readable = !1, this.timers.clear(), t.emit("close"), ~t.options.strategy.indexOf("disconnect") ? t.recovery.reconnect() : (t.emit("outgoing::end"), void t.emit("end"))))
									})), t.client(), t.ark) t.ark[n].call(t, t, e);
								return t.NETWORK_EVENTS ? (t.offlineHandler = function() {
									t.online && (t.online = !1, t.emit("offline"), t.end(), t.recovery.reset())
								}, t.onlineHandler = function() {
									t.online || (t.online = !0, t.emit("online"), ~t.options.strategy.indexOf("online") && t.recovery.reconnect())
								}, window.addEventListener ? (window.addEventListener("offline", t.offlineHandler, !1), window.addEventListener("online", t.onlineHandler, !1)) : document.body.attachEvent && (document.body.attachEvent("onoffline", t.offlineHandler), document.body.attachEvent("ononline", t.onlineHandler)), t) : t
							}, h.prototype.protocol = function(e) {
								if ("string" != typeof e || 0 !== e.indexOf("primus::")) return !1;
								var t = e.indexOf(":", 8),
									n = e.slice(t + 2);
								switch (e.slice(8, t)) {
									case "ping":
										this.emit("incoming::ping", +n);
										break;
									case "server":
										"close" === n && (this.disconnect = !0);
										break;
									case "id":
										this.emit("incoming::id", n);
										break;
									default:
										return !1
								}
								return !0
							}, h.prototype.transforms = function(e, t, n, r, o) {
								var a = {
										data: r
									},
									i = e.transformers[n];
								return function e(n, r) {
									var o = i[n++];
									if (!o) return r();
									if (1 === o.length) {
										if (!1 === o.call(t, a)) return;
										return e(n, r)
									}
									o.call(t, a, (function(o, a) {
										if (o) return t.emit("error", o);
										!1 !== a && e(n, r)
									}))
								}(0, (function() {
									if ("incoming" === n) return t.emit("data", a.data, o);
									t._write(a.data)
								})), this
							}, h.prototype.id = function(e) {
								return this.socket && this.socket.id ? e(this.socket.id) : (this._write("primus::id::"), this.once("incoming::id", e))
							}, h.prototype.open = function() {
								return m(this, "open"), !this.recovery.reconnecting() && this.options.timeout && this.timeout(), this.emit("outgoing::open"), this
							}, h.prototype.write = function(e) {
								return m(this, "write"), this.transforms(this, this, "outgoing", e), !0
							}, h.prototype._write = function(e) {
								var t = this;
								return h.OPEN !== t.readyState ? (this.buffer.length === this.options.queueSize && this.buffer.splice(0, 1), this.buffer.push(e), !1) : (t.encoder(e, (function(e, n) {
									if (e) return t.listeners("error").length && t.emit("error", e);
									"string" == typeof n && (~n.indexOf("\u2028") && (n = n.replace(f, "\\u2028")), ~n.indexOf("\u2029") && (n = n.replace(d, "\\u2029"))), t.emit("outgoing::data", n)
								})), !0)
							}, h.prototype.heartbeat = function() {
								return this.options.pingTimeout ? (this.timers.clear("heartbeat"), this.timers.setTimeout("heartbeat", (function() {
									this.online && (this.online = !1, this.emit("offline"), this.emit("incoming::end"))
								}), this.options.pingTimeout), this) : this
							}, h.prototype.timeout = function() {
								var e = this;

								function t() {
									e.removeListener("error", t).removeListener("open", t).removeListener("end", t).timers.clear("connect")
								}
								return e.timers.setTimeout("connect", (function() {
									t(), e.readyState === h.OPEN || e.recovery.reconnecting() || (e.emit("timeout"), ~e.options.strategy.indexOf("timeout") ? e.recovery.reconnect() : e.end())
								}), e.options.timeout), e.on("error", t).on("open", t).on("end", t)
							}, h.prototype.end = function(e) {
								if (m(this, "end"), this.readyState === h.CLOSED && !this.timers.active("connect") && !this.timers.active("open")) return this.recovery.reconnecting() && (this.recovery.reset(), this.emit("end")), this;
								void 0 !== e && this.write(e), this.writable = !1, this.readable = !1;
								var t = this.readyState;
								return this.readyState = h.CLOSED, t !== this.readyState && this.emit("readyStateChange", "end"), this.timers.clear(), this.emit("outgoing::end"), this.emit("close"), this.emit("end"), this
							}, h.prototype.destroy = u("url timers options recovery socket transport transformers", {
								before: "end",
								after: ["removeAllListeners", function() {
									this.NETWORK_EVENTS && (window.addEventListener ? (window.removeEventListener("offline", this.offlineHandler), window.removeEventListener("online", this.onlineHandler)) : document.body.attachEvent && (document.body.detachEvent("onoffline", this.offlineHandler), document.body.detachEvent("ononline", this.onlineHandler)))
								}]
							}), h.prototype.clone = function(e) {
								return this.merge({}, e)
							}, h.prototype.merge = function(e) {
								for (var t, n, r = 1; r < arguments.length; r++)
									for (t in n = arguments[r]) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
								return e
							}, h.prototype.parse = e("url-parse"), h.prototype.querystring = c.parse, h.prototype.querystringify = c.stringify, h.prototype.uri = function(e) {
								var t = this.url,
									n = [],
									r = !1;
								e.query && (r = !0), (e = e || {}).protocol = "protocol" in e ? e.protocol : "http:", e.query = !(!t.query || !r) && t.query.slice(1), e.secure = "secure" in e ? e.secure : "https:" === t.protocol || "wss:" === t.protocol, e.auth = "auth" in e ? e.auth : t.auth, e.pathname = "pathname" in e ? e.pathname : this.pathname, e.port = "port" in e ? +e.port : +t.port || (e.secure ? 443 : 80);
								var o = this.querystring(e.query || "");
								return o._primuscb = p(), e.query = this.querystringify(o), this.emit("outgoing::url", e), n.push(e.secure ? e.protocol.replace(":", "s:") : e.protocol, ""), n.push(e.auth ? e.auth + "@" + t.host : t.host), e.pathname && n.push(e.pathname.slice(1)), r ? n[n.length - 1] += "?" + e.query : delete e.query, e.object ? e : n.join("/")
							}, h.prototype.transform = function(e, t) {
								return m(this, "transform"), e in this.transformers ? (this.transformers[e].push(t), this) : this.critical(new Error("Invalid transformer type"))
							}, h.prototype.critical = function(e) {
								if (this.emit("error", e)) return this;
								throw e
							}, h.connect = function(e, t) {
								return new h(e, t)
							}, h.EventEmitter = o, h.prototype.client = function() {
								var e, t = this.emits("incoming::data"),
									n = this.emits("incoming::error"),
									r = this.emits("incoming::open"),
									o = this.emits("incoming::end"),
									a = this,
									i = function() {
										if ("undefined" != typeof eio) return eio;
										try {
											return h.requires("engine.io-client")
										} catch (e) {}
									}();
								if (!i) return a.critical(new Error("Missing required `engine.io-client` module. Please run `npm install --save engine.io-client`"));
								a.on("outgoing::open", (function() {
									a.emit("outgoing::end"), a.socket = e = i(a.merge(a.transport, a.url, a.uri({
										protocol: "http:",
										query: !0,
										object: !0
									}), {
										rememberUpgrade: !1,
										forceBase64: !0,
										enablesXDR: !1,
										timestampRequests: !0,
										path: this.pathname,
										transports: a.AVOID_WEBSOCKETS ? ["polling"] : ["polling", "websocket"]
									})), i.sockets && i.sockets.length && (i.sockets.length = 0), e.on("message", t), e.on("error", n), e.on("close", o), e.on("open", r)
								})), a.on("outgoing::data", (function(t) {
									e && e.send(t)
								})), a.on("outgoing::reconnect", (function() {
									a.emit("outgoing::open")
								})), a.on("outgoing::end", (function() {
									e && (e.removeListener("message", t), e.removeListener("error", n), e.removeListener("close", o), e.removeListener("open", r), e.close(), e = null)
								}))
							}, h.prototype.authorization = !1, h.prototype.pathname = "/realtime", h.prototype.encoder = function(e, t) {
								var n;
								try {
									e = JSON.stringify(e)
								} catch (e) {
									n = e
								}
								t(n, e)
							}, h.prototype.decoder = function(e, t) {
								var n;
								if ("string" != typeof e) return t(n, e);
								try {
									e = JSON.parse(e)
								} catch (e) {
									n = e
								}
								t(n, e)
							}, h.prototype.version = "7.3.4", "undefined" != typeof document && "undefined" != typeof navigator) {
							document.addEventListener && document.addEventListener("keydown", (function(e) {
								27 === e.keyCode && e.preventDefault && e.preventDefault()
							}), !1);
							var y = (navigator.userAgent || "").toLowerCase(),
								g = y.match(/.+(?:rv|it|ra|ie)[/: ](\d+)\.(\d+)(?:\.(\d+))?/) || [],
								v = +[g[1], g[2]].join(".");
							!~y.indexOf("chrome") && ~y.indexOf("safari") && v < 534.54 && (h.prototype.AVOID_WEBSOCKETS = !0)
						}
						t.exports = h
					}, {
						demolish: 1,
						emits: 2,
						eventemitter3: 3,
						inherits: 4,
						querystringify: 8,
						recovery: 9,
						"tick-tock": 12,
						"url-parse": 14,
						yeast: 15
					}]
				}, {}, [16])(16);
				return e.prototype.ark["player-checkin"] = function(e) {}, e.prototype.ark["player-notifications"] = function(e) {}, e.prototype.ark["race-server"] = function(e) {}, e.prototype.ark["race-admin"] = function(e) {}, e.prototype.ark["math-admin"] = function(e) {}, e
			}), [function(e) {
				var t;
				"undefined" != typeof window ? t = window : "undefined" != typeof self && (t = self), t.eio = function e(t, n, r) {
					function o(i, s) {
						if (!n[i]) {
							if (!t[i]) {
								if (a) return a(i, !0);
								var c = new Error("Cannot find module '" + i + "'");
								throw c.code = "MODULE_NOT_FOUND", c
							}
							var l = n[i] = {
								exports: {}
							};
							t[i][0].call(l.exports, (function(e) {
								return o(t[i][1][e] || e)
							}), l, l.exports, e, t, n, r)
						}
						return n[i].exports
					}
					for (var a = !1, i = 0; i < r.length; i++) o(r[i]);
					return o
				}({
					1: [function(e, t, n) {}, {}],
					2: [function(e, t, n) {
						var r = e("./transports/index"),
							o = e("component-emitter"),
							i = e("indexof"),
							s = e("engine.io-parser"),
							c = e("parseuri"),
							l = e("parseqs");

						function u(e, t) {
							if (!(this instanceof u)) return new u(e, t);
							t = t || {}, e && "object" === a(e) && (t = e, e = null), e ? (e = c(e), t.hostname = e.host, t.secure = "https" === e.protocol || "wss" === e.protocol, t.port = e.port, e.query && (t.query = e.query)) : t.host && (t.hostname = c(t.host).host), this.secure = null != t.secure ? t.secure : "undefined" != typeof location && "https:" === location.protocol, t.hostname && !t.port && (t.port = this.secure ? "443" : "80"), this.agent = t.agent || !1, this.hostname = t.hostname || ("undefined" != typeof location ? location.hostname : "localhost"), this.port = t.port || ("undefined" != typeof location && location.port ? location.port : this.secure ? 443 : 80), this.query = t.query || {}, "string" == typeof this.query && (this.query = l.decode(this.query)), this.upgrade = !1 !== t.upgrade, this.path = (t.path || "/engine.io").replace(/\/$/, "") + "/", this.forceJSONP = !!t.forceJSONP, this.jsonp = !1 !== t.jsonp, this.forceBase64 = !!t.forceBase64, this.enablesXDR = !!t.enablesXDR, this.withCredentials = !1 !== t.withCredentials, this.timestampParam = t.timestampParam || "t", this.timestampRequests = t.timestampRequests, this.transports = t.transports || ["polling", "websocket"], this.transportOptions = t.transportOptions || {}, this.readyState = "", this.writeBuffer = [], this.prevBufferLen = 0, this.policyPort = t.policyPort || 843, this.rememberUpgrade = t.rememberUpgrade || !1, this.binaryType = null, this.onlyBinaryUpgrades = t.onlyBinaryUpgrades, this.perMessageDeflate = !1 !== t.perMessageDeflate && (t.perMessageDeflate || {}), !0 === this.perMessageDeflate && (this.perMessageDeflate = {}), this.perMessageDeflate && null == this.perMessageDeflate.threshold && (this.perMessageDeflate.threshold = 1024), this.pfx = t.pfx || null, this.key = t.key || null, this.passphrase = t.passphrase || null, this.cert = t.cert || null, this.ca = t.ca || null, this.ciphers = t.ciphers || null, this.rejectUnauthorized = void 0 === t.rejectUnauthorized || t.rejectUnauthorized, this.forceNode = !!t.forceNode, this.isReactNative = "undefined" != typeof navigator && "string" == typeof navigator.product && "reactnative" === navigator.product.toLowerCase(), ("undefined" == typeof self || this.isReactNative) && (t.extraHeaders && Object.keys(t.extraHeaders).length > 0 && (this.extraHeaders = t.extraHeaders), t.localAddress && (this.localAddress = t.localAddress)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingIntervalTimer = null, this.pingTimeoutTimer = null, this.open()
						}
						t.exports = u, u.priorWebsocketSuccess = !1, o(u.prototype), u.protocol = s.protocol, u.Socket = u, u.Transport = e("./transport"), u.transports = e("./transports/index"), u.parser = e("engine.io-parser"), u.prototype.createTransport = function(e) {
							var t = function(e) {
								var t = {};
								for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
								return t
							}(this.query);
							t.EIO = s.protocol, t.transport = e;
							var n = this.transportOptions[e] || {};
							return this.id && (t.sid = this.id), new r[e]({
								query: t,
								socket: this,
								agent: n.agent || this.agent,
								hostname: n.hostname || this.hostname,
								port: n.port || this.port,
								secure: n.secure || this.secure,
								path: n.path || this.path,
								forceJSONP: n.forceJSONP || this.forceJSONP,
								jsonp: n.jsonp || this.jsonp,
								forceBase64: n.forceBase64 || this.forceBase64,
								enablesXDR: n.enablesXDR || this.enablesXDR,
								withCredentials: n.withCredentials || this.withCredentials,
								timestampRequests: n.timestampRequests || this.timestampRequests,
								timestampParam: n.timestampParam || this.timestampParam,
								policyPort: n.policyPort || this.policyPort,
								pfx: n.pfx || this.pfx,
								key: n.key || this.key,
								passphrase: n.passphrase || this.passphrase,
								cert: n.cert || this.cert,
								ca: n.ca || this.ca,
								ciphers: n.ciphers || this.ciphers,
								rejectUnauthorized: n.rejectUnauthorized || this.rejectUnauthorized,
								perMessageDeflate: n.perMessageDeflate || this.perMessageDeflate,
								extraHeaders: n.extraHeaders || this.extraHeaders,
								forceNode: n.forceNode || this.forceNode,
								localAddress: n.localAddress || this.localAddress,
								requestTimeout: n.requestTimeout || this.requestTimeout,
								protocols: n.protocols || void 0,
								isReactNative: this.isReactNative
							})
						}, u.prototype.open = function() {
							var e;
							if (this.rememberUpgrade && u.priorWebsocketSuccess && -1 !== this.transports.indexOf("websocket")) e = "websocket";
							else {
								if (0 === this.transports.length) {
									var t = this;
									return void setTimeout((function() {
										t.emit("error", "No transports available")
									}), 0)
								}
								e = this.transports[0]
							}
							this.readyState = "opening";
							try {
								e = this.createTransport(e)
							} catch (e) {
								return this.transports.shift(), void this.open()
							}
							e.open(), this.setTransport(e)
						}, u.prototype.setTransport = function(e) {
							var t = this;
							this.transport && this.transport.removeAllListeners(), this.transport = e, e.on("drain", (function() {
								t.onDrain()
							})).on("packet", (function(e) {
								t.onPacket(e)
							})).on("error", (function(e) {
								t.onError(e)
							})).on("close", (function() {
								t.onClose("transport close")
							}))
						}, u.prototype.probe = function(e) {
							var t = this.createTransport(e, {
									probe: 1
								}),
								n = !1,
								r = this;

							function o() {
								if (r.onlyBinaryUpgrades) {
									var e = !this.supportsBinary && r.transport.supportsBinary;
									n = n || e
								}
								n || (t.send([{
									type: "ping",
									data: "probe"
								}]), t.once("packet", (function(e) {
									if (!n)
										if ("pong" === e.type && "probe" === e.data) {
											if (r.upgrading = !0, r.emit("upgrading", t), !t) return;
											u.priorWebsocketSuccess = "websocket" === t.name, r.transport.pause((function() {
												n || "closed" !== r.readyState && (p(), r.setTransport(t), t.send([{
													type: "upgrade"
												}]), r.emit("upgrade", t), t = null, r.upgrading = !1, r.flush())
											}))
										} else {
											var o = new Error("probe error");
											o.transport = t.name, r.emit("upgradeError", o)
										}
								})))
							}

							function a() {
								n || (n = !0, p(), t.close(), t = null)
							}

							function i(e) {
								var n = new Error("probe error: " + e);
								n.transport = t.name, a(), r.emit("upgradeError", n)
							}

							function s() {
								i("transport closed")
							}

							function c() {
								i("socket closed")
							}

							function l(e) {
								t && e.name !== t.name && a()
							}

							function p() {
								t.removeListener("open", o), t.removeListener("error", i), t.removeListener("close", s), r.removeListener("close", c), r.removeListener("upgrading", l)
							}
							u.priorWebsocketSuccess = !1, t.once("open", o), t.once("error", i), t.once("close", s), this.once("close", c), this.once("upgrading", l), t.open()
						}, u.prototype.onOpen = function() {
							if (this.readyState = "open", u.priorWebsocketSuccess = "websocket" === this.transport.name, this.emit("open"), this.flush(), "open" === this.readyState && this.upgrade && this.transport.pause)
								for (var e = 0, t = this.upgrades.length; e < t; e++) this.probe(this.upgrades[e])
						}, u.prototype.onPacket = function(e) {
							if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) switch (this.emit("packet", e), this.emit("heartbeat"), e.type) {
								case "open":
									this.onHandshake(JSON.parse(e.data));
									break;
								case "pong":
									this.setPing(), this.emit("pong");
									break;
								case "error":
									var t = new Error("server error");
									t.code = e.data, this.onError(t);
									break;
								case "message":
									this.emit("data", e.data), this.emit("message", e.data)
							}
						}, u.prototype.onHandshake = function(e) {
							this.emit("handshake", e), this.id = e.sid, this.transport.query.sid = e.sid, this.upgrades = this.filterUpgrades(e.upgrades), this.pingInterval = e.pingInterval, this.pingTimeout = e.pingTimeout, this.onOpen(), "closed" !== this.readyState && (this.setPing(), this.removeListener("heartbeat", this.onHeartbeat), this.on("heartbeat", this.onHeartbeat))
						}, u.prototype.onHeartbeat = function(e) {
							clearTimeout(this.pingTimeoutTimer);
							var t = this;
							t.pingTimeoutTimer = setTimeout((function() {
								"closed" !== t.readyState && t.onClose("ping timeout")
							}), e || t.pingInterval + t.pingTimeout)
						}, u.prototype.setPing = function() {
							var e = this;
							clearTimeout(e.pingIntervalTimer), e.pingIntervalTimer = setTimeout((function() {
								e.ping(), e.onHeartbeat(e.pingTimeout)
							}), e.pingInterval)
						}, u.prototype.ping = function() {
							var e = this;
							this.sendPacket("ping", (function() {
								e.emit("ping")
							}))
						}, u.prototype.onDrain = function() {
							this.writeBuffer.splice(0, this.prevBufferLen), this.prevBufferLen = 0, 0 === this.writeBuffer.length ? this.emit("drain") : this.flush()
						}, u.prototype.flush = function() {
							"closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length && (this.transport.send(this.writeBuffer), this.prevBufferLen = this.writeBuffer.length, this.emit("flush"))
						}, u.prototype.write = u.prototype.send = function(e, t, n) {
							return this.sendPacket("message", e, t, n), this
						}, u.prototype.sendPacket = function(e, t, n, r) {
							if ("function" == typeof t && (r = t, t = void 0), "function" == typeof n && (r = n, n = null), "closing" !== this.readyState && "closed" !== this.readyState) {
								(n = n || {}).compress = !1 !== n.compress;
								var o = {
									type: e,
									data: t,
									options: n
								};
								this.emit("packetCreate", o), this.writeBuffer.push(o), r && this.once("flush", r), this.flush()
							}
						}, u.prototype.close = function() {
							if ("opening" === this.readyState || "open" === this.readyState) {
								this.readyState = "closing";
								var e = this;
								this.writeBuffer.length ? this.once("drain", (function() {
									this.upgrading ? r() : t()
								})) : this.upgrading ? r() : t()
							}

							function t() {
								e.onClose("forced close"), e.transport.close()
							}

							function n() {
								e.removeListener("upgrade", n), e.removeListener("upgradeError", n), t()
							}

							function r() {
								e.once("upgrade", n), e.once("upgradeError", n)
							}
							return this
						}, u.prototype.onError = function(e) {
							u.priorWebsocketSuccess = !1, this.emit("error", e), this.onClose("transport error", e)
						}, u.prototype.onClose = function(e, t) {
							"opening" !== this.readyState && "open" !== this.readyState && "closing" !== this.readyState || (clearTimeout(this.pingIntervalTimer), clearTimeout(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), this.readyState = "closed", this.id = null, this.emit("close", e, t), this.writeBuffer = [], this.prevBufferLen = 0)
						}, u.prototype.filterUpgrades = function(e) {
							for (var t = [], n = 0, r = e.length; n < r; n++) ~i(this.transports, e[n]) && t.push(e[n]);
							return t
						}
					}, {
						"./transport": 3,
						"./transports/index": 4,
						"component-emitter": 13,
						"engine.io-parser": 15,
						indexof: 21,
						parseqs: 23,
						parseuri: 24
					}],
					3: [function(e, t, n) {
						var r = e("engine.io-parser"),
							o = e("component-emitter");

						function a(e) {
							this.path = e.path, this.hostname = e.hostname, this.port = e.port, this.secure = e.secure, this.query = e.query, this.timestampParam = e.timestampParam, this.timestampRequests = e.timestampRequests, this.readyState = "", this.agent = e.agent || !1, this.socket = e.socket, this.enablesXDR = e.enablesXDR, this.withCredentials = e.withCredentials, this.pfx = e.pfx, this.key = e.key, this.passphrase = e.passphrase, this.cert = e.cert, this.ca = e.ca, this.ciphers = e.ciphers, this.rejectUnauthorized = e.rejectUnauthorized, this.forceNode = e.forceNode, this.isReactNative = e.isReactNative, this.extraHeaders = e.extraHeaders, this.localAddress = e.localAddress
						}
						t.exports = a, o(a.prototype), a.prototype.onError = function(e, t) {
							var n = new Error(e);
							return n.type = "TransportError", n.description = t, this.emit("error", n), this
						}, a.prototype.open = function() {
							return "closed" !== this.readyState && "" !== this.readyState || (this.readyState = "opening", this.doOpen()), this
						}, a.prototype.close = function() {
							return "opening" !== this.readyState && "open" !== this.readyState || (this.doClose(), this.onClose()), this
						}, a.prototype.send = function(e) {
							if ("open" !== this.readyState) throw new Error("Transport not open");
							this.write(e)
						}, a.prototype.onOpen = function() {
							this.readyState = "open", this.writable = !0, this.emit("open")
						}, a.prototype.onData = function(e) {
							var t = r.decodePacket(e, this.socket.binaryType);
							this.onPacket(t)
						}, a.prototype.onPacket = function(e) {
							this.emit("packet", e)
						}, a.prototype.onClose = function() {
							this.readyState = "closed", this.emit("close")
						}
					}, {
						"component-emitter": 13,
						"engine.io-parser": 15
					}],
					4: [function(e, t, n) {
						var r = e("xmlhttprequest-ssl"),
							o = e("./polling-xhr"),
							a = e("./polling-jsonp"),
							i = e("./websocket");
						n.polling = function(e) {
							var t = !1,
								n = !1,
								i = !1 !== e.jsonp;
							if ("undefined" != typeof location) {
								var s = "https:" === location.protocol,
									c = location.port;
								c || (c = s ? 443 : 80), t = e.hostname !== location.hostname || c !== e.port, n = e.secure !== s
							}
							if (e.xdomain = t, e.xscheme = n, "open" in new r(e) && !e.forceJSONP) return new o(e);
							if (!i) throw new Error("JSONP disabled");
							return new a(e)
						}, n.websocket = i
					}, {
						"./polling-jsonp": 5,
						"./polling-xhr": 6,
						"./websocket": 8,
						"xmlhttprequest-ssl": 9
					}],
					5: [function(e, t, n) {
						(function(n) {
							var r = e("./polling"),
								o = e("component-inherit");
							t.exports = u;
							var a, i = /\n/g,
								s = /\\n/g;

							function c() {}

							function l() {
								return "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== n ? n : {}
							}

							function u(e) {
								if (r.call(this, e), this.query = this.query || {}, !a) {
									var t = l();
									a = t.___eio = t.___eio || []
								}
								this.index = a.length;
								var n = this;
								a.push((function(e) {
									n.onData(e)
								})), this.query.j = this.index, "function" == typeof addEventListener && addEventListener("beforeunload", (function() {
									n.script && (n.script.onerror = c)
								}), !1)
							}
							o(u, r), u.prototype.supportsBinary = !1, u.prototype.doClose = function() {
								this.script && (this.script.parentNode.removeChild(this.script), this.script = null), this.form && (this.form.parentNode.removeChild(this.form), this.form = null, this.iframe = null), r.prototype.doClose.call(this)
							}, u.prototype.doPoll = function() {
								var e = this,
									t = document.createElement("script");
								this.script && (this.script.parentNode.removeChild(this.script), this.script = null), t.async = !0, t.src = this.uri(), t.onerror = function(t) {
									e.onError("jsonp poll error", t)
								};
								var n = document.getElementsByTagName("script")[0];
								n ? n.parentNode.insertBefore(t, n) : (document.head || document.body).appendChild(t), this.script = t, "undefined" != typeof navigator && /gecko/i.test(navigator.userAgent) && setTimeout((function() {
									var e = document.createElement("iframe");
									document.body.appendChild(e), document.body.removeChild(e)
								}), 100)
							}, u.prototype.doWrite = function(e, t) {
								var n = this;
								if (!this.form) {
									var r, o = document.createElement("form"),
										a = document.createElement("textarea"),
										c = this.iframeId = "eio_iframe_" + this.index;
									o.className = "socketio", o.style.position = "absolute", o.style.top = "-1000px", o.style.left = "-1000px", o.target = c, o.method = "POST", o.setAttribute("accept-charset", "utf-8"), a.name = "d", o.appendChild(a), document.body.appendChild(o), this.form = o, this.area = a
								}

								function l() {
									u(), t()
								}

								function u() {
									if (n.iframe) try {
										n.form.removeChild(n.iframe)
									} catch (e) {
										n.onError("jsonp polling iframe removal error", e)
									}
									try {
										var e = '<iframe src="javascript:0" name="' + n.iframeId + '">';
										r = document.createElement(e)
									} catch (e) {
										(r = document.createElement("iframe")).name = n.iframeId, r.src = "javascript:0"
									}
									r.id = n.iframeId, n.form.appendChild(r), n.iframe = r
								}
								this.form.action = this.uri(), u(), e = e.replace(s, "\\\n"), this.area.value = e.replace(i, "\\n");
								try {
									this.form.submit()
								} catch (e) {}
								this.iframe.attachEvent ? this.iframe.onreadystatechange = function() {
									"complete" === n.iframe.readyState && l()
								} : this.iframe.onload = l
							}
						}).call(this, void 0 !== r ? r : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
					}, {
						"./polling": 7,
						"component-inherit": 14
					}],
					6: [function(e, t, n) {
						var r = e("xmlhttprequest-ssl"),
							o = e("./polling"),
							a = e("component-emitter"),
							i = e("component-inherit");

						function s() {}

						function c(e) {
							if (o.call(this, e), this.requestTimeout = e.requestTimeout, this.extraHeaders = e.extraHeaders, "undefined" != typeof location) {
								var t = "https:" === location.protocol,
									n = location.port;
								n || (n = t ? 443 : 80), this.xd = "undefined" != typeof location && e.hostname !== location.hostname || n !== e.port, this.xs = e.secure !== t
							}
						}

						function l(e) {
							this.method = e.method || "GET", this.uri = e.uri, this.xd = !!e.xd, this.xs = !!e.xs, this.async = !1 !== e.async, this.data = void 0 !== e.data ? e.data : null, this.agent = e.agent, this.isBinary = e.isBinary, this.supportsBinary = e.supportsBinary, this.enablesXDR = e.enablesXDR, this.withCredentials = e.withCredentials, this.requestTimeout = e.requestTimeout, this.pfx = e.pfx, this.key = e.key, this.passphrase = e.passphrase, this.cert = e.cert, this.ca = e.ca, this.ciphers = e.ciphers, this.rejectUnauthorized = e.rejectUnauthorized, this.extraHeaders = e.extraHeaders, this.create()
						}
						if (t.exports = c, t.exports.Request = l, i(c, o), c.prototype.supportsBinary = !0, c.prototype.request = function(e) {
								return (e = e || {}).uri = this.uri(), e.xd = this.xd, e.xs = this.xs, e.agent = this.agent || !1, e.supportsBinary = this.supportsBinary, e.enablesXDR = this.enablesXDR, e.withCredentials = this.withCredentials, e.pfx = this.pfx, e.key = this.key, e.passphrase = this.passphrase, e.cert = this.cert, e.ca = this.ca, e.ciphers = this.ciphers, e.rejectUnauthorized = this.rejectUnauthorized, e.requestTimeout = this.requestTimeout, e.extraHeaders = this.extraHeaders, new l(e)
							}, c.prototype.doWrite = function(e, t) {
								var n = "string" != typeof e && void 0 !== e,
									r = this.request({
										method: "POST",
										data: e,
										isBinary: n
									}),
									o = this;
								r.on("success", t), r.on("error", (function(e) {
									o.onError("xhr post error", e)
								})), this.sendXhr = r
							}, c.prototype.doPoll = function() {
								var e = this.request(),
									t = this;
								e.on("data", (function(e) {
									t.onData(e)
								})), e.on("error", (function(e) {
									t.onError("xhr poll error", e)
								})), this.pollXhr = e
							}, a(l.prototype), l.prototype.create = function() {
								var e = {
									agent: this.agent,
									xdomain: this.xd,
									xscheme: this.xs,
									enablesXDR: this.enablesXDR
								};
								e.pfx = this.pfx, e.key = this.key, e.passphrase = this.passphrase, e.cert = this.cert, e.ca = this.ca, e.ciphers = this.ciphers, e.rejectUnauthorized = this.rejectUnauthorized;
								var t = this.xhr = new r(e),
									n = this;
								try {
									t.open(this.method, this.uri, this.async);
									try {
										if (this.extraHeaders)
											for (var o in t.setDisableHeaderCheck && t.setDisableHeaderCheck(!0), this.extraHeaders) this.extraHeaders.hasOwnProperty(o) && t.setRequestHeader(o, this.extraHeaders[o])
									} catch (e) {}
									if ("POST" === this.method) try {
										this.isBinary ? t.setRequestHeader("Content-type", "application/octet-stream") : t.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
									} catch (e) {}
									try {
										t.setRequestHeader("Accept", "*/*")
									} catch (e) {}
									"withCredentials" in t && (t.withCredentials = this.withCredentials), this.requestTimeout && (t.timeout = this.requestTimeout), this.hasXDR() ? (t.onload = function() {
										n.onLoad()
									}, t.onerror = function() {
										n.onError(t.responseText)
									}) : t.onreadystatechange = function() {
										if (2 === t.readyState) try {
											var e = t.getResponseHeader("Content-Type");
											(n.supportsBinary && "application/octet-stream" === e || "application/octet-stream; charset=UTF-8" === e) && (t.responseType = "arraybuffer")
										} catch (e) {}
										4 === t.readyState && (200 === t.status || 1223 === t.status ? n.onLoad() : setTimeout((function() {
											n.onError("number" == typeof t.status ? t.status : 0)
										}), 0))
									}, t.send(this.data)
								} catch (e) {
									return void setTimeout((function() {
										n.onError(e)
									}), 0)
								}
								"undefined" != typeof document && (this.index = l.requestsCount++, l.requests[this.index] = this)
							}, l.prototype.onSuccess = function() {
								this.emit("success"), this.cleanup()
							}, l.prototype.onData = function(e) {
								this.emit("data", e), this.onSuccess()
							}, l.prototype.onError = function(e) {
								this.emit("error", e), this.cleanup(!0)
							}, l.prototype.cleanup = function(e) {
								if (void 0 !== this.xhr && null !== this.xhr) {
									if (this.hasXDR() ? this.xhr.onload = this.xhr.onerror = s : this.xhr.onreadystatechange = s, e) try {
										this.xhr.abort()
									} catch (e) {}
									"undefined" != typeof document && delete l.requests[this.index], this.xhr = null
								}
							}, l.prototype.onLoad = function() {
								var e;
								try {
									var t;
									try {
										t = this.xhr.getResponseHeader("Content-Type")
									} catch (e) {}
									e = ("application/octet-stream" === t || "application/octet-stream; charset=UTF-8" === t) && this.xhr.response || this.xhr.responseText
								} catch (e) {
									this.onError(e)
								}
								null != e && this.onData(e)
							}, l.prototype.hasXDR = function() {
								return "undefined" != typeof XDomainRequest && !this.xs && this.enablesXDR
							}, l.prototype.abort = function() {
								this.cleanup()
							}, l.requestsCount = 0, l.requests = {}, "undefined" != typeof document)
							if ("function" == typeof attachEvent) attachEvent("onunload", p);
							else if ("function" == typeof addEventListener) {
							var u = "onpagehide" in self ? "pagehide" : "unload";
							addEventListener(u, p, !1)
						}

						function p() {
							for (var e in l.requests) l.requests.hasOwnProperty(e) && l.requests[e].abort()
						}
					}, {
						"./polling": 7,
						"component-emitter": 13,
						"component-inherit": 14,
						"xmlhttprequest-ssl": 9
					}],
					7: [function(e, t, n) {
						var r = e("../transport"),
							o = e("parseqs"),
							a = e("engine.io-parser"),
							i = e("component-inherit"),
							s = e("yeast");
						t.exports = l;
						var c = null != new(e("xmlhttprequest-ssl"))({
							xdomain: !1
						}).responseType;

						function l(e) {
							var t = e && e.forceBase64;
							c && !t || (this.supportsBinary = !1), r.call(this, e)
						}
						i(l, r), l.prototype.name = "polling", l.prototype.doOpen = function() {
							this.poll()
						}, l.prototype.pause = function(e) {
							var t = this;

							function n() {
								t.readyState = "paused", e()
							}
							if (this.readyState = "pausing", this.polling || !this.writable) {
								var r = 0;
								this.polling && (r++, this.once("pollComplete", (function() {
									--r || n()
								}))), this.writable || (r++, this.once("drain", (function() {
									--r || n()
								})))
							} else n()
						}, l.prototype.poll = function() {
							this.polling = !0, this.doPoll(), this.emit("poll")
						}, l.prototype.onData = function(e) {
							var t = this;
							a.decodePayload(e, this.socket.binaryType, (function(e, n, r) {
								if ("opening" === t.readyState && t.onOpen(), "close" === e.type) return t.onClose(), !1;
								t.onPacket(e)
							})), "closed" !== this.readyState && (this.polling = !1, this.emit("pollComplete"), "open" === this.readyState && this.poll())
						}, l.prototype.doClose = function() {
							var e = this;

							function t() {
								e.write([{
									type: "close"
								}])
							}
							"open" === this.readyState ? t() : this.once("open", t)
						}, l.prototype.write = function(e) {
							var t = this;
							this.writable = !1;
							var n = function() {
								t.writable = !0, t.emit("drain")
							};
							a.encodePayload(e, this.supportsBinary, (function(e) {
								t.doWrite(e, n)
							}))
						}, l.prototype.uri = function() {
							var e = this.query || {},
								t = this.secure ? "https" : "http",
								n = "";
							return !1 !== this.timestampRequests && (e[this.timestampParam] = s()), this.supportsBinary || e.sid || (e.b64 = 1), e = o.encode(e), this.port && ("https" === t && 443 !== Number(this.port) || "http" === t && 80 !== Number(this.port)) && (n = ":" + this.port), e.length && (e = "?" + e), t + "://" + (-1 !== this.hostname.indexOf(":") ? "[" + this.hostname + "]" : this.hostname) + n + this.path + e
						}
					}, {
						"../transport": 3,
						"component-inherit": 14,
						"engine.io-parser": 15,
						parseqs: 23,
						"xmlhttprequest-ssl": 9,
						yeast: 25
					}],
					8: [function(e, t, n) {
						(function(n) {
							var r, o, a = e("../transport"),
								i = e("engine.io-parser"),
								s = e("parseqs"),
								c = e("component-inherit"),
								l = e("yeast");
							if ("undefined" != typeof WebSocket ? r = WebSocket : "undefined" != typeof self && (r = self.WebSocket || self.MozWebSocket), "undefined" == typeof window) try {
								o = e("ws")
							} catch (e) {}
							var u = r || o;

							function p(e) {
								e && e.forceBase64 && (this.supportsBinary = !1), this.perMessageDeflate = e.perMessageDeflate, this.usingBrowserWebSocket = r && !e.forceNode, this.protocols = e.protocols, this.usingBrowserWebSocket || (u = o), a.call(this, e)
							}
							t.exports = p, c(p, a), p.prototype.name = "websocket", p.prototype.supportsBinary = !0, p.prototype.doOpen = function() {
								if (this.check()) {
									var e = this.uri(),
										t = this.protocols,
										n = {
											agent: this.agent,
											perMessageDeflate: this.perMessageDeflate
										};
									n.pfx = this.pfx, n.key = this.key, n.passphrase = this.passphrase, n.cert = this.cert, n.ca = this.ca, n.ciphers = this.ciphers, n.rejectUnauthorized = this.rejectUnauthorized, this.extraHeaders && (n.headers = this.extraHeaders), this.localAddress && (n.localAddress = this.localAddress);
									try {
										this.ws = this.usingBrowserWebSocket && !this.isReactNative ? t ? new u(e, t) : new u(e) : new u(e, t, n)
									} catch (e) {
										return this.emit("error", e)
									}
									void 0 === this.ws.binaryType && (this.supportsBinary = !1), this.ws.supports && this.ws.supports.binary ? (this.supportsBinary = !0, this.ws.binaryType = "nodebuffer") : this.ws.binaryType = "arraybuffer", this.addEventListeners()
								}
							}, p.prototype.addEventListeners = function() {
								var e = this;
								this.ws.onopen = function() {
									e.onOpen()
								}, this.ws.onclose = function() {
									e.onClose()
								}, this.ws.onmessage = function(t) {
									e.onData(t.data)
								}, this.ws.onerror = function(t) {
									e.onError("websocket error", t)
								}
							}, p.prototype.write = function(e) {
								var t = this;
								this.writable = !1;
								for (var r = e.length, o = 0, a = r; o < a; o++) ! function(e) {
									i.encodePacket(e, t.supportsBinary, (function(o) {
										if (!t.usingBrowserWebSocket) {
											var a = {};
											e.options && (a.compress = e.options.compress), t.perMessageDeflate && ("string" == typeof o ? n.byteLength(o) : o.length) < t.perMessageDeflate.threshold && (a.compress = !1)
										}
										try {
											t.usingBrowserWebSocket ? t.ws.send(o) : t.ws.send(o, a)
										} catch (e) {}--r || (t.emit("flush"), setTimeout((function() {
											t.writable = !0, t.emit("drain")
										}), 0))
									}))
								}(e[o])
							}, p.prototype.onClose = function() {
								a.prototype.onClose.call(this)
							}, p.prototype.doClose = function() {
								void 0 !== this.ws && this.ws.close()
							}, p.prototype.uri = function() {
								var e = this.query || {},
									t = this.secure ? "wss" : "ws",
									n = "";
								return this.port && ("wss" === t && 443 !== Number(this.port) || "ws" === t && 80 !== Number(this.port)) && (n = ":" + this.port), this.timestampRequests && (e[this.timestampParam] = l()), this.supportsBinary || (e.b64 = 1), (e = s.encode(e)).length && (e = "?" + e), t + "://" + (-1 !== this.hostname.indexOf(":") ? "[" + this.hostname + "]" : this.hostname) + n + this.path + e
							}, p.prototype.check = function() {
								return !(!u || "__initialize" in u && this.name === p.prototype.name)
							}
						}).call(this, e("buffer").Buffer)
					}, {
						"../transport": 3,
						buffer: 1,
						"component-inherit": 14,
						"engine.io-parser": 15,
						parseqs: 23,
						ws: void 0,
						yeast: 25
					}],
					9: [function(e, t, n) {
						var r = e("has-cors");
						t.exports = function(e) {
							var t = e.xdomain,
								n = e.xscheme,
								o = e.enablesXDR;
							try {
								if ("undefined" != typeof XMLHttpRequest && (!t || r)) return new XMLHttpRequest
							} catch (e) {}
							try {
								if ("undefined" != typeof XDomainRequest && !n && o) return new XDomainRequest
							} catch (e) {}
							if (!t) try {
								return new(self[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")
							} catch (e) {}
						}
					}, {
						"has-cors": 20
					}],
					10: [function(e, t, n) {
						function r() {}
						t.exports = function(e, t, n) {
							var o = !1;
							return n = n || r, a.count = e, 0 === e ? t() : a;

							function a(e, r) {
								if (a.count <= 0) throw new Error("after called too many times");
								--a.count, e ? (o = !0, t(e), t = n) : 0 !== a.count || o || t(null, r)
							}
						}
					}, {}],
					11: [function(e, t, n) {
						t.exports = function(e, t, n) {
							var r = e.byteLength;
							if (t = t || 0, n = n || r, e.slice) return e.slice(t, n);
							if (t < 0 && (t += r), n < 0 && (n += r), n > r && (n = r), t >= r || t >= n || 0 === r) return new ArrayBuffer(0);
							for (var o = new Uint8Array(e), a = new Uint8Array(n - t), i = t, s = 0; i < n; i++, s++) a[s] = o[i];
							return a.buffer
						}
					}, {}],
					12: [function(e, t, n) {
						! function() {
							"use strict";
							for (var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", t = new Uint8Array(256), r = 0; r < e.length; r++) t[e.charCodeAt(r)] = r;
							n.encode = function(t) {
								var n, r = new Uint8Array(t),
									o = r.length,
									a = "";
								for (n = 0; n < o; n += 3) a += e[r[n] >> 2], a += e[(3 & r[n]) << 4 | r[n + 1] >> 4], a += e[(15 & r[n + 1]) << 2 | r[n + 2] >> 6], a += e[63 & r[n + 2]];
								return o % 3 == 2 ? a = a.substring(0, a.length - 1) + "=" : o % 3 == 1 && (a = a.substring(0, a.length - 2) + "=="), a
							}, n.decode = function(e) {
								var n, r, o, a, i, s = .75 * e.length,
									c = e.length,
									l = 0;
								"=" === e[e.length - 1] && (s--, "=" === e[e.length - 2] && s--);
								var u = new ArrayBuffer(s),
									p = new Uint8Array(u);
								for (n = 0; n < c; n += 4) r = t[e.charCodeAt(n)], o = t[e.charCodeAt(n + 1)], a = t[e.charCodeAt(n + 2)], i = t[e.charCodeAt(n + 3)], p[l++] = r << 2 | o >> 4, p[l++] = (15 & o) << 4 | a >> 2, p[l++] = (3 & a) << 6 | 63 & i;
								return u
							}
						}()
					}, {}],
					13: [function(e, t, n) {
						function r(e) {
							if (e) return function(e) {
								for (var t in r.prototype) e[t] = r.prototype[t];
								return e
							}(e)
						}
						void 0 !== t && (t.exports = r), r.prototype.on = r.prototype.addEventListener = function(e, t) {
							return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t), this
						}, r.prototype.once = function(e, t) {
							function n() {
								this.off(e, n), t.apply(this, arguments)
							}
							return n.fn = t, this.on(e, n), this
						}, r.prototype.off = r.prototype.removeListener = r.prototype.removeAllListeners = r.prototype.removeEventListener = function(e, t) {
							if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
							var n, r = this._callbacks["$" + e];
							if (!r) return this;
							if (1 == arguments.length) return delete this._callbacks["$" + e], this;
							for (var o = 0; o < r.length; o++)
								if ((n = r[o]) === t || n.fn === t) {
									r.splice(o, 1);
									break
								} return this
						}, r.prototype.emit = function(e) {
							this._callbacks = this._callbacks || {};
							var t = [].slice.call(arguments, 1),
								n = this._callbacks["$" + e];
							if (n)
								for (var r = 0, o = (n = n.slice(0)).length; r < o; ++r) n[r].apply(this, t);
							return this
						}, r.prototype.listeners = function(e) {
							return this._callbacks = this._callbacks || {}, this._callbacks["$" + e] || []
						}, r.prototype.hasListeners = function(e) {
							return !!this.listeners(e).length
						}
					}, {}],
					14: [function(e, t, n) {
						t.exports = function(e, t) {
							var n = function() {};
							n.prototype = t.prototype, e.prototype = new n, e.prototype.constructor = e
						}
					}, {}],
					15: [function(e, t, n) {
						var r, o = e("./keys"),
							a = e("has-binary2"),
							i = e("arraybuffer.slice"),
							s = e("after"),
							c = e("./utf8");
						"undefined" != typeof ArrayBuffer && (r = e("base64-arraybuffer"));
						var l = "undefined" != typeof navigator && /Android/i.test(navigator.userAgent),
							u = "undefined" != typeof navigator && /PhantomJS/i.test(navigator.userAgent),
							p = l || u;
						n.protocol = 3;
						var f = n.packets = {
								open: 0,
								close: 1,
								ping: 2,
								pong: 3,
								message: 4,
								upgrade: 5,
								noop: 6
							},
							d = o(f),
							m = {
								type: "error",
								data: "parser error"
							},
							h = e("blob");

						function y(e, t, n) {
							for (var r = new Array(e.length), o = s(e.length, n), a = function(e, n, o) {
									t(n, (function(t, n) {
										r[e] = n, o(t, r)
									}))
								}, i = 0; i < e.length; i++) a(i, e[i], o)
						}
						n.encodePacket = function(e, t, r, o) {
							"function" == typeof t && (o = t, t = !1), "function" == typeof r && (o = r, r = null);
							var a = void 0 === e.data ? void 0 : e.data.buffer || e.data;
							if ("undefined" != typeof ArrayBuffer && a instanceof ArrayBuffer) return function(e, t, r) {
								if (!t) return n.encodeBase64Packet(e, r);
								var o = e.data,
									a = new Uint8Array(o),
									i = new Uint8Array(1 + o.byteLength);
								i[0] = f[e.type];
								for (var s = 0; s < a.length; s++) i[s + 1] = a[s];
								return r(i.buffer)
							}(e, t, o);
							if (void 0 !== h && a instanceof h) return function(e, t, r) {
								if (!t) return n.encodeBase64Packet(e, r);
								if (p) return function(e, t, r) {
									if (!t) return n.encodeBase64Packet(e, r);
									var o = new FileReader;
									return o.onload = function() {
										n.encodePacket({
											type: e.type,
											data: o.result
										}, t, !0, r)
									}, o.readAsArrayBuffer(e.data)
								}(e, t, r);
								var o = new Uint8Array(1);
								o[0] = f[e.type];
								var a = new h([o.buffer, e.data]);
								return r(a)
							}(e, t, o);
							if (a && a.base64) return function(e, t) {
								var r = "b" + n.packets[e.type] + e.data.data;
								return t(r)
							}(e, o);
							var i = f[e.type];
							return void 0 !== e.data && (i += r ? c.encode(String(e.data), {
								strict: !1
							}) : String(e.data)), o("" + i)
						}, n.encodeBase64Packet = function(e, t) {
							var r, o = "b" + n.packets[e.type];
							if (void 0 !== h && e.data instanceof h) {
								var a = new FileReader;
								return a.onload = function() {
									var e = a.result.split(",")[1];
									t(o + e)
								}, a.readAsDataURL(e.data)
							}
							try {
								r = String.fromCharCode.apply(null, new Uint8Array(e.data))
							} catch (t) {
								for (var i = new Uint8Array(e.data), s = new Array(i.length), c = 0; c < i.length; c++) s[c] = i[c];
								r = String.fromCharCode.apply(null, s)
							}
							return o += btoa(r), t(o)
						}, n.decodePacket = function(e, t, r) {
							if (void 0 === e) return m;
							if ("string" == typeof e) {
								if ("b" === e.charAt(0)) return n.decodeBase64Packet(e.substr(1), t);
								if (r && !1 === (e = function(e) {
										try {
											e = c.decode(e, {
												strict: !1
											})
										} catch (e) {
											return !1
										}
										return e
									}(e))) return m;
								var o = e.charAt(0);
								return Number(o) == o && d[o] ? e.length > 1 ? {
									type: d[o],
									data: e.substring(1)
								} : {
									type: d[o]
								} : m
							}
							o = new Uint8Array(e)[0];
							var a = i(e, 1);
							return h && "blob" === t && (a = new h([a])), {
								type: d[o],
								data: a
							}
						}, n.decodeBase64Packet = function(e, t) {
							var n = d[e.charAt(0)];
							if (!r) return {
								type: n,
								data: {
									base64: !0,
									data: e.substr(1)
								}
							};
							var o = r.decode(e.substr(1));
							return "blob" === t && h && (o = new h([o])), {
								type: n,
								data: o
							}
						}, n.encodePayload = function(e, t, r) {
							"function" == typeof t && (r = t, t = null);
							var o = a(e);
							return t && o ? h && !p ? n.encodePayloadAsBlob(e, r) : n.encodePayloadAsArrayBuffer(e, r) : e.length ? void y(e, (function(e, r) {
								n.encodePacket(e, !!o && t, !1, (function(e) {
									r(null, function(e) {
										return e.length + ":" + e
									}(e))
								}))
							}), (function(e, t) {
								return r(t.join(""))
							})) : r("0:")
						}, n.decodePayload = function(e, t, r) {
							if ("string" != typeof e) return n.decodePayloadAsBinary(e, t, r);
							var o;
							if ("function" == typeof t && (r = t, t = null), "" === e) return r(m, 0, 1);
							for (var a, i, s = "", c = 0, l = e.length; c < l; c++) {
								var u = e.charAt(c);
								if (":" === u) {
									if ("" === s || s != (a = Number(s))) return r(m, 0, 1);
									if (s != (i = e.substr(c + 1, a)).length) return r(m, 0, 1);
									if (i.length) {
										if (o = n.decodePacket(i, t, !1), m.type === o.type && m.data === o.data) return r(m, 0, 1);
										if (!1 === r(o, c + a, l)) return
									}
									c += a, s = ""
								} else s += u
							}
							return "" !== s ? r(m, 0, 1) : void 0
						}, n.encodePayloadAsArrayBuffer = function(e, t) {
							if (!e.length) return t(new ArrayBuffer(0));
							y(e, (function(e, t) {
								n.encodePacket(e, !0, !0, (function(e) {
									return t(null, e)
								}))
							}), (function(e, n) {
								var r = n.reduce((function(e, t) {
										var n;
										return e + (n = "string" == typeof t ? t.length : t.byteLength).toString().length + n + 2
									}), 0),
									o = new Uint8Array(r),
									a = 0;
								return n.forEach((function(e) {
									var t = "string" == typeof e,
										n = e;
									if (t) {
										for (var r = new Uint8Array(e.length), i = 0; i < e.length; i++) r[i] = e.charCodeAt(i);
										n = r.buffer
									}
									o[a++] = t ? 0 : 1;
									var s = n.byteLength.toString();
									for (i = 0; i < s.length; i++) o[a++] = parseInt(s[i]);
									for (o[a++] = 255, r = new Uint8Array(n), i = 0; i < r.length; i++) o[a++] = r[i]
								})), t(o.buffer)
							}))
						}, n.encodePayloadAsBlob = function(e, t) {
							y(e, (function(e, t) {
								n.encodePacket(e, !0, !0, (function(e) {
									var n = new Uint8Array(1);
									if (n[0] = 1, "string" == typeof e) {
										for (var r = new Uint8Array(e.length), o = 0; o < e.length; o++) r[o] = e.charCodeAt(o);
										e = r.buffer, n[0] = 0
									}
									var a = (e instanceof ArrayBuffer ? e.byteLength : e.size).toString(),
										i = new Uint8Array(a.length + 1);
									for (o = 0; o < a.length; o++) i[o] = parseInt(a[o]);
									if (i[a.length] = 255, h) {
										var s = new h([n.buffer, i.buffer, e]);
										t(null, s)
									}
								}))
							}), (function(e, n) {
								return t(new h(n))
							}))
						}, n.decodePayloadAsBinary = function(e, t, r) {
							"function" == typeof t && (r = t, t = null);
							for (var o = e, a = []; o.byteLength > 0;) {
								for (var s = new Uint8Array(o), c = 0 === s[0], l = "", u = 1; 255 !== s[u]; u++) {
									if (l.length > 310) return r(m, 0, 1);
									l += s[u]
								}
								o = i(o, 2 + l.length), l = parseInt(l);
								var p = i(o, 0, l);
								if (c) try {
									p = String.fromCharCode.apply(null, new Uint8Array(p))
								} catch (e) {
									var f = new Uint8Array(p);
									for (p = "", u = 0; u < f.length; u++) p += String.fromCharCode(f[u])
								}
								a.push(p), o = i(o, l)
							}
							var d = a.length;
							a.forEach((function(e, o) {
								r(n.decodePacket(e, t, !0), o, d)
							}))
						}
					}, {
						"./keys": 16,
						"./utf8": 17,
						after: 10,
						"arraybuffer.slice": 11,
						"base64-arraybuffer": 12,
						blob: 18,
						"has-binary2": 19
					}],
					16: [function(e, t, n) {
						t.exports = Object.keys || function(e) {
							var t = [],
								n = Object.prototype.hasOwnProperty;
							for (var r in e) n.call(e, r) && t.push(r);
							return t
						}
					}, {}],
					17: [function(e, t, n) {
						/*! https://mths.be/utf8js v2.1.2 by @mathias */
						var r, o, a, i = String.fromCharCode;

						function s(e) {
							for (var t, n, r = [], o = 0, a = e.length; o < a;)(t = e.charCodeAt(o++)) >= 55296 && t <= 56319 && o < a ? 56320 == (64512 & (n = e.charCodeAt(o++))) ? r.push(((1023 & t) << 10) + (1023 & n) + 65536) : (r.push(t), o--) : r.push(t);
							return r
						}

						function c(e, t) {
							if (e >= 55296 && e <= 57343) {
								if (t) throw Error("Lone surrogate U+" + e.toString(16).toUpperCase() + " is not a scalar value");
								return !1
							}
							return !0
						}

						function l(e, t) {
							return i(e >> t & 63 | 128)
						}

						function u(e, t) {
							if (0 == (4294967168 & e)) return i(e);
							var n = "";
							return 0 == (4294965248 & e) ? n = i(e >> 6 & 31 | 192) : 0 == (4294901760 & e) ? (c(e, t) || (e = 65533), n = i(e >> 12 & 15 | 224), n += l(e, 6)) : 0 == (4292870144 & e) && (n = i(e >> 18 & 7 | 240), n += l(e, 12), n += l(e, 6)), n += i(63 & e | 128)
						}

						function p() {
							if (a >= o) throw Error("Invalid byte index");
							var e = 255 & r[a];
							if (a++, 128 == (192 & e)) return 63 & e;
							throw Error("Invalid continuation byte")
						}

						function f(e) {
							var t, n;
							if (a > o) throw Error("Invalid byte index");
							if (a == o) return !1;
							if (t = 255 & r[a], a++, 0 == (128 & t)) return t;
							if (192 == (224 & t)) {
								if ((n = (31 & t) << 6 | p()) >= 128) return n;
								throw Error("Invalid continuation byte")
							}
							if (224 == (240 & t)) {
								if ((n = (15 & t) << 12 | p() << 6 | p()) >= 2048) return c(n, e) ? n : 65533;
								throw Error("Invalid continuation byte")
							}
							if (240 == (248 & t) && (n = (7 & t) << 18 | p() << 12 | p() << 6 | p()) >= 65536 && n <= 1114111) return n;
							throw Error("Invalid UTF-8 detected")
						}
						t.exports = {
							version: "2.1.2",
							encode: function(e, t) {
								for (var n = !1 !== (t = t || {}).strict, r = s(e), o = r.length, a = -1, i = ""; ++a < o;) i += u(r[a], n);
								return i
							},
							decode: function(e, t) {
								var n = !1 !== (t = t || {}).strict;
								r = s(e), o = r.length, a = 0;
								for (var c, l = []; !1 !== (c = f(n));) l.push(c);
								return function(e) {
									for (var t, n = e.length, r = -1, o = ""; ++r < n;)(t = e[r]) > 65535 && (o += i((t -= 65536) >>> 10 & 1023 | 55296), t = 56320 | 1023 & t), o += i(t);
									return o
								}(l)
							}
						}
					}, {}],
					18: [function(e, t, n) {
						var r = void 0 !== r ? r : "undefined" != typeof WebKitBlobBuilder ? WebKitBlobBuilder : "undefined" != typeof MSBlobBuilder ? MSBlobBuilder : "undefined" != typeof MozBlobBuilder && MozBlobBuilder,
							o = function() {
								try {
									return 2 === new Blob(["hi"]).size
								} catch (e) {
									return !1
								}
							}(),
							a = o && function() {
								try {
									return 2 === new Blob([new Uint8Array([1, 2])]).size
								} catch (e) {
									return !1
								}
							}(),
							i = r && r.prototype.append && r.prototype.getBlob;

						function s(e) {
							return e.map((function(e) {
								if (e.buffer instanceof ArrayBuffer) {
									var t = e.buffer;
									if (e.byteLength !== t.byteLength) {
										var n = new Uint8Array(e.byteLength);
										n.set(new Uint8Array(t, e.byteOffset, e.byteLength)), t = n.buffer
									}
									return t
								}
								return e
							}))
						}

						function c(e, t) {
							t = t || {};
							var n = new r;
							return s(e).forEach((function(e) {
								n.append(e)
							})), t.type ? n.getBlob(t.type) : n.getBlob()
						}

						function l(e, t) {
							return new Blob(s(e), t || {})
						}
						"undefined" != typeof Blob && (c.prototype = Blob.prototype, l.prototype = Blob.prototype), t.exports = o ? a ? Blob : l : i ? c : void 0
					}, {}],
					19: [function(e, t, n) {
						(function(n) {
							var r = e("isarray"),
								o = Object.prototype.toString,
								i = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === o.call(Blob),
								s = "function" == typeof File || "undefined" != typeof File && "[object FileConstructor]" === o.call(File);
							t.exports = function e(t) {
								if (!t || "object" !== a(t)) return !1;
								if (r(t)) {
									for (var o = 0, c = t.length; o < c; o++)
										if (e(t[o])) return !0;
									return !1
								}
								if ("function" == typeof n && n.isBuffer && n.isBuffer(t) || "function" == typeof ArrayBuffer && t instanceof ArrayBuffer || i && t instanceof Blob || s && t instanceof File) return !0;
								if (t.toJSON && "function" == typeof t.toJSON && 1 === arguments.length) return e(t.toJSON(), !0);
								for (var l in t)
									if (Object.prototype.hasOwnProperty.call(t, l) && e(t[l])) return !0;
								return !1
							}
						}).call(this, e("buffer").Buffer)
					}, {
						buffer: 1,
						isarray: 22
					}],
					20: [function(e, t, n) {
						try {
							t.exports = "undefined" != typeof XMLHttpRequest && "withCredentials" in new XMLHttpRequest
						} catch (e) {
							t.exports = !1
						}
					}, {}],
					21: [function(e, t, n) {
						var r = [].indexOf;
						t.exports = function(e, t) {
							if (r) return e.indexOf(t);
							for (var n = 0; n < e.length; ++n)
								if (e[n] === t) return n;
							return -1
						}
					}, {}],
					22: [function(e, t, n) {
						var r = {}.toString;
						t.exports = Array.isArray || function(e) {
							return "[object Array]" == r.call(e)
						}
					}, {}],
					23: [function(e, t, n) {
						n.encode = function(e) {
							var t = "";
							for (var n in e) e.hasOwnProperty(n) && (t.length && (t += "&"), t += encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
							return t
						}, n.decode = function(e) {
							for (var t = {}, n = e.split("&"), r = 0, o = n.length; r < o; r++) {
								var a = n[r].split("=");
								t[decodeURIComponent(a[0])] = decodeURIComponent(a[1])
							}
							return t
						}
					}, {}],
					24: [function(e, t, n) {
						var r = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
							o = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
						t.exports = function(e) {
							var t = e,
								n = e.indexOf("["),
								a = e.indexOf("]"); - 1 != n && -1 != a && (e = e.substring(0, n) + e.substring(n, a).replace(/:/g, ";") + e.substring(a, e.length));
							for (var i = r.exec(e || ""), s = {}, c = 14; c--;) s[o[c]] = i[c] || "";
							return -1 != n && -1 != a && (s.source = t, s.host = s.host.substring(1, s.host.length - 1).replace(/;/g, ":"), s.authority = s.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), s.ipv6uri = !0), s
						}
					}, {}],
					25: [function(e, t, n) {
						"use strict";
						var r, o = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),
							a = {},
							i = 0,
							s = 0;

						function c(e) {
							var t = "";
							do {
								t = o[e % 64] + t, e = Math.floor(e / 64)
							} while (e > 0);
							return t
						}

						function l() {
							var e = c(+new Date);
							return e !== r ? (i = 0, r = e) : e + "." + c(i++)
						}
						for (; s < 64; s++) a[o[s]] = s;
						l.encode = c, l.decode = function(e) {
							var t = 0;
							for (s = 0; s < e.length; s++) t = 64 * t + a[e.charAt(s)];
							return t
						}, t.exports = l
					}, {}],
					26: [function(e, t, n) {
						t.exports = e("./socket"), t.exports.parser = e("engine.io-parser")
					}, {
						"./socket": 2,
						"engine.io-parser": 15
					}]
				}, {}, [26])(26)
			}])
		}).call(this, n(92))
	},
	46: function(e, t, n) {
		"use strict";
		var r = n(0),
			o = n.n(r),
			a = (n(1), n(3)),
			i = n.n(a);

		function s(e) {
			var t, n;
			e.country;
			"raceWinner" === e.theme && (e.tagColor = "FFFFFF");
			var r = (null === (t = e.rankingBadges) || void 0 === t ? void 0 : t.user) || (null === (n = e.rankingBadges) || void 0 === n ? void 0 : n.team);
			return o.a.createElement("div", {
				className: i()("df df--align-center", "".concat(e.customClass), {
					"tooltip tooltip--a tooltip--left tooltip--static is-limited": e.isFounder
				}),
				"data-ttcopy": e.isFounder ? "Corndog and Travis created Nitro Type! Add them as friends and join them on the track!" : null
			}, "gold" === e.membership && o.a.createElement("div", {
				className: i()("prxxs", {
					mtxxs: "profile" === e.theme || "profileBare" === e.theme
				})
			}, o.a.createElement("img", {
				alt: "Nitro Gold",
				className: i()("icon", "profile" === e.theme || "profileBare" === e.theme || "userHover" === e.theme ? "icon-nt-gold-xl" : "icon-nt-gold-s"),
				src: "/dist/site/images/themes/profiles/gold/nt-gold-icon-xl.png"
			})), o.a.createElement("div", {
				className: "prxxs df df--align-center",
				title: e.displayName || e.username
			}, !!e.tag && o.a.createElement("a", {
				href: e.disableTeamLink ? null : "/team/".concat(String(e.tag).toUpperCase()),
				onClick: function(t) {
					t && t.preventDefault(), e.clickable && (e.disableTeamLink || (t && t.stopPropagation(), window.__navigateTo("/team/".concat(String(e.tag).toUpperCase()))))
				},
				className: i()("link link--bare  mrxxs", {
					tsl: "raceWinner" === e.theme
				}, {
					twb: "raceWinner" !== e.theme
				}),
				style: {
					color: "#".concat(e.tagColor)
				}
			}, "[", e.tag, "]"), "profile" === e.theme ? o.a.createElement("a", {
				href: e.clickable ? "/profile" : null,
				className: "link link--bare"
			}, " ", o.a.createElement("span", {
				className: "type-ellip"
			}, " ", e.displayName || e.username, " ")) : o.a.createElement("span", {
				className: i()("type-ellip ", {
					"type-gold": "gold" === e.membership && "profileBare" !== e.theme
				}, {
					"tsl tlh-1": "userHover" === e.theme,
					tss: "default" === e.theme,
					tsl: "raceWinner" === e.theme
				})
			}, " ", e.displayName || e.username, " ")), !!e.friend && o.a.createElement("div", {
				className: "prxxs",
				title: "You are friends!"
			}, o.a.createElement("svg", {
				className: "icon icon-friends-s tc-lemon"
			}, o.a.createElement("use", {
				xmlnsXlink: "http://www.w3.org/1999/xlink",
				xlinkHref: "/dist/site/images/icons/icons.css.svg#icon-friends"
			}))), !!r && "profile" !== e.theme && "profileBare" !== e.theme && o.a.createElement("div", {
				className: "prxxs"
			}, o.a.createElement("img", {
				className: "db",
				src: "/dist/site/images/pages/race/race-results-top".concat(r, "-alt.png")
			})), e.isNewMember && o.a.createElement("div", {
				className: "prxxs tooltip tooltip--a tooltip--c tooltip--xs",
				"data-ttcopy": "New member to your team!"
			}, o.a.createElement("span", {
				className: "tsxxs tc-emerald tsi ttu twb"
			}, "New!")))
		}
		s.defaultProps = {
			theme: "default",
			country: "_unknown",
			customClass: "",
			clickable: !0,
			isNewMember: !1
		}, t.a = Object(r.memo)(s)
	},
	47: function(e, t, n) {
		"use strict";
		n.d(t, "a", (function() {
			return o
		})), n.d(t, "c", (function() {
			return r
		})), n.d(t, "b", (function() {
			return d
		}));
		var r = {};
		n.r(r), n.d(r, "BUY_PRODUCT_SUCCESSFUL", (function() {
			return s
		}));
		var o = {};
		n.r(o), n.d(o, "shopPurchase", (function() {
			return f
		}));
		var a = n(89),
			i = n.n(a),
			s = "nitrotype/shop/BUY_PRODUCT_SUCCESSFUL";

		function c(e, t) {
			var n = Object.keys(e);
			if (Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(e);
				t && (r = r.filter((function(t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				}))), n.push.apply(n, r)
			}
			return n
		}

		function l(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = null != arguments[t] ? arguments[t] : {};
				t % 2 ? c(Object(n), !0).forEach((function(t) {
					u(e, t, n[t])
				})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function(t) {
					Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
				}))
			}
			return e
		}

		function u(e, t, n) {
			return t in e ? Object.defineProperty(e, t, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = n, e
		}
		var p = n(2),
			f = function(e, t) {
				var n = e.dlID ? "/api/v2/loot/dealership/".concat(e.dlID, "/buy") : "/api/v2/loot/shop/".concat(e.srlID, "/buy");
				return function(e, r) {
					Object(p.b)(n, {
						method: "post",
						params: {
							password: t,
							accountType: r().user.accountType,
							debug: t
						},
						apiScope: "shopPurchase"
					}, e).then((function(t) {
						var n, r;
						e((n = t.type, r = t.id, {
							type: s,
							payload: l(l({}, t), {}, {
								type: n,
								id: r
							})
						}))
					}), (function() {
						return null
					}))
				}
			},
			d = n(70);
		i.a
	},
	48: function(e, t, n) {
		"use strict";
		n.r(t), n.d(t, "getSortedGroups", (function() {
			return c
		})), n.d(t, "sortAchievements", (function() {
			return l
		})), n.d(t, "getAchievementNameByID", (function() {
			return u
		})), n.d(t, "parseAchievements", (function() {
			return p
		})), n.d(t, "parseAchievementGroups", (function() {
			return f
		})), n.d(t, "parseAchievementText", (function() {
			return d
		})), n.d(t, "getSponsorshipGroup", (function() {
			return m
		})), n.d(t, "geAchievementsByGroupId", (function() {
			return h
		})), n.d(t, "convertAchievementsToSeasonRewards", (function() {
			return y
		})), n.d(t, "getUnclaimedRewardIDs", (function() {
			return g
		})), n.d(t, "getClaimedAchievementIDs", (function() {
			return v
		})), n.d(t, "removeSeasonAchievements", (function() {
			return b
		})), n.d(t, "removeSeasonAchievementGroups", (function() {
			return w
		})), n.d(t, "removeSeasonRewardsFromUnclaimedAchievements", (function() {
			return E
		})), n.d(t, "addProgressToRewards", (function() {
			return O
		})), n.d(t, "getCurrentSeasonRewards", (function() {
			return S
		}));
		var r = n(4),
			o = n(2);

		function a(e, t) {
			var n = Object.keys(e);
			if (Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(e);
				t && (r = r.filter((function(t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				}))), n.push.apply(n, r)
			}
			return n
		}

		function i(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = null != arguments[t] ? arguments[t] : {};
				t % 2 ? a(Object(n), !0).forEach((function(t) {
					s(e, t, n[t])
				})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function(t) {
					Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
				}))
			}
			return e
		}

		function s(e, t, n) {
			return t in e ? Object.defineProperty(e, t, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = n, e
		}
		var c = function(e, t, n) {
				var r = Math.floor((new Date).getTime() / 1e3);
				e = e.map((function(e) {
					return !e.seasonID || !e.active || e.startStamp <= r && e.endStamp > r || (e.active = 0), e
				}));
				var o = t.sort((function(e, t) {
					var n = 0;
					return e.order < t.order ? n = -1 : e.order > t.order ? n = 1 : e.name > t.name ? n = -1 : e.name < t.name && (n = 1), n
				}));
				if (n.achievementsUnclaimed && n.achievementsUnclaimed.length || n.achievements && n.achievements.length) {
					var a = [],
						i = [];
					n.achievementsUnclaimed.forEach((function(e) {
						a.push(e[0])
					})), n.achievements.forEach((function(e) {
						i.push(e[0])
					})), o = o.map((function(t) {
						t.numberUnclaimed = e.filter((function(e) {
							return t.id === e.gid && -1 !== a.indexOf(e.achievementID)
						})).length, t.numberClaimed = e.filter((function(e) {
							return t.id === e.gid && -1 !== i.indexOf(e.achievementID)
						})).length;
						var n = 0;
						return e.filter((function(e) {
							return e.gid === t.id
						})).map((function(e) {
							var t = -1 !== a.indexOf(e.achievementID),
								r = -1 !== i.indexOf(e.achievementID);
							if ((!e.active || e.hidden) && !r && !t) return null;
							n += 1
						})), t.totalAchievements = n, t
					}))
				} else o = o.map((function(t) {
					var n = 0;
					return e.filter((function(e) {
						return e.gid === t.id
					})).map((function(e) {
						if (!e.active || e.hidden) return null;
						n += 1
					})), t.totalAchievements = n, t
				}));
				return (o = o.map((function(t) {
					return t.numberActive = e.filter((function(e) {
						return e.gid === t.id && e.active && !e.hidden
					})).length, t
				}))).map((function(t) {
					return e.filter((function(e) {
						return e.gid === t.id
					})).length && (t.numberActive || t.numberUnclaimed || t.numberClaimed) ? t : null
				})).filter((function(e) {
					return e
				}))
			},
			l = function(e) {
				return e = p(e), Object(r.p)(e, (function(e) {
					return e.ruleGroup + "-" + ("00000" + e.points).slice(-5) + "-" + e.name
				}))
			},
			u = function(e, t) {
				var n = e.find((function(e) {
					return e.achievementID === t
				}));
				return n ? n.name : ""
			},
			p = function(e) {
				return e || []
			},
			f = function(e) {
				return e || []
			},
			d = function(e) {
				return e || []
			},
			m = function(e) {
				return e.find((function(e) {
					return "sponsorship" === e.type
				}))
			},
			h = function(e, t) {
				return t.filter((function(t) {
					return t.gid === e
				}))
			},
			y = function() {
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
					t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
					n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
					r = t.find((function(e) {
						return e.seasonID === n.seasonID
					}));
				if (!r) return [];
				var a = e.filter((function(e) {
					return e.gid === r.achievementGroupID
				}));
				return a.sort((function(e, t) {
					return e.points - t.points
				})), a = a.map((function(e) {
					var t = e.rules;
					return e.bonus = !!e.hidden, e.experience = e.bonus ? 0 : Object(o.k)(parseInt(t.find((function(e) {
						return "level" === e.field
					})).value)), e.free = !t.find((function(e) {
						return "membership" === e.field
					})), e.extraTier = !!e.extraTier, e
				}))
			},
			g = function() {
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
				return e.map((function(e) {
					return e[0]
				}))
			},
			v = function() {
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
				return e.map((function(e) {
					return e[0]
				}))
			},
			b = function() {
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
				return e.filter((function(e) {
					return !e.seasonID
				}))
			},
			w = function() {
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
				return e.filter((function(e) {
					return !e.seasonID
				}))
			},
			E = function() {
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
					t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
					n = e.map((function(e) {
						return e[0]
					}));
				return n.filter((function(e) {
					var n = t.find((function(t) {
						return t.achievementID === e
					}));
					return !!n && !n.seasonID
				}))
			},
			O = function() {
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
					t = arguments.length > 1 ? arguments[1] : void 0,
					n = 0;
				return t = t.map((function(t) {
					var r;
					t = i({}, t);
					var a = parseInt(null === (r = t.rules.find((function(e) {
							return "level" === e.field
						}))) || void 0 === r ? void 0 : r.value),
						s = Object(o.k)(a);
					if (t.hidden || !a) return t;
					var c = s - n,
						l = e - n;
					return t.progress = e < n ? 0 : Math.min(100, Math.round(l / c * 100)), n = s, t
				}))
			},
			S = function(e) {
				var t, n, r = l(null === (t = e.globals.ACHIEVEMENTS) || void 0 === t ? void 0 : t.LIST),
					a = f(null === (n = e.globals.ACHIEVEMENTS) || void 0 === n ? void 0 : n.GROUPS),
					i = Object(o.j)(e.globals.ACTIVE_SEASONS),
					s = O(e.user.experience, y(r, a, i)),
					c = s.find((function(e) {
						return e.extraTier
					}));
				if (c) {
					var u = Math.max(1, e.user.level - i.totalRewards);
					c.name = String(u), c.progress = e.user.level >= i.totalRewards + 1 ? 100 : 0, c.rules[0].value = Math.max(c.rules[0].value, (e.user.lastExtraLevel || e.user.level) + 1)
				}
				return s
			}
	},
	49: function(e, t, n) {
		"use strict";
		var r = n(2);

		function o(e) {
			return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}

		function a(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function i(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
			}
		}

		function s(e, t) {
			return (s = Object.setPrototypeOf || function(e, t) {
				return e.__proto__ = t, e
			})(e, t)
		}

		function c(e) {
			var t = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
				} catch (e) {
					return !1
				}
			}();
			return function() {
				var n, r = p(e);
				if (t) {
					var o = p(this).constructor;
					n = Reflect.construct(r, arguments, o)
				} else n = r.apply(this, arguments);
				return l(this, n)
			}
		}

		function l(e, t) {
			return !t || "object" !== o(t) && "function" != typeof t ? u(e) : t
		}

		function u(e) {
			if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return e
		}

		function p(e) {
			return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
				return e.__proto__ || Object.getPrototypeOf(e)
			})(e)
		}
		var f = function(e) {
			! function(e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						writable: !0,
						configurable: !0
					}
				}), t && s(e, t)
			}(p, e);
			var t, n, o, l = c(p);

			function p(e, t) {
				var n, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
					retries: 0,
					pathname: "/ws"
				};
				return a(this, p), (n = l.call(this))._url = void 0, n._protocols = void 0, n._options = void 0, n._socket = void 0, n._pingTimeout = void 0, n._reconnectAttempt = 0, n._reconnectTimer = 500, n._reconnectTimeout = void 0, n._initialize = function() {
					n._socket = new WebSocket(n._url + n._options.pathname, n._protocols), n._socket.addEventListener("open", n._handleOpen), n._socket.addEventListener("error", n._handleError)
				}, n.write = function(e) {
					try {
						n._socket.send(Object(r.h)(e))
					} catch (e) {
						console.error("Error encoding and sending message to WebSocket", e)
					}
				}, n.on = function(e, t) {
					return n.addEventListener(e, t)
				}, n.end = function() {
					n._socket.close()
				}, n._handleOpen = function(e) {
					console.log("WebSocket: OPEN", e), n.dispatchEvent("open", e), n._socket.addEventListener("message", n._handleMessage), n._socket.addEventListener("close", n._handleClose), clearTimeout(n._reconnectTimeout), n._heartbeat()
				}, n._handleError = function(e) {
					n.dispatchEvent("error", e)
				}, n._handleMessage = function(e) {
					if ("1PING" === e.data) return n._heartbeat(), void n._socket.send("1PONG");
					var t = Object(r.s)(e.data);
					n.dispatchEvent("data", t)
				}, n._handleClose = function(e) {
					console.log("WebSocket: CLOSE", e), clearTimeout(n._pingTimeout), n._socket.removeEventListener("open", n._heartbeat, !0), n._socket.removeEventListener("error", n._handleError, !0), n._socket.removeEventListener("message", n._handleMessage, !0), n._socket.removeEventListener("close", n._handleClose, !0), e.wasClean || n._reconnect()
				}, n._heartbeat = function() {
					clearTimeout(n._pingTimeout), n._pingTimeout = setTimeout(function() {
						console.error("WebSocket ping timeout"), this._socket.close()
					}.bind(u(n)), 33e3)
				}, n._reconnect = function() {
					n._socket.readyState === WebSocket.OPEN ? console.log("WebSocket reconnection successful") : n._reconnectTimeout = setTimeout((function() {
						n._socket.readyState === WebSocket.CLOSED || n._socket.readyState === WebSocket.CLOSING ? (console.log("WebSocket reconnect still closed"), n._initialize(), n._reconnectAttempt += 1, n._reconnectTimer *= 2, n._reconnectAttempt < 5 && n._reconnect()) : n._socket.readyState === WebSocket.CONNECTING && (console.log("WebSocket reconnect still connecting"), n._reconnect())
					}), n._reconnectTimer)
				}, n._url = e, n._protocols = t, n._options = o, n._initialize(), n
			}
			return t = p, (n = [{
				key: "readyState",
				get: function() {
					var e;
					return (null === (e = this._socket) || void 0 === e ? void 0 : e.readyState) || WebSocket.CLOSED
				}
			}]) && i(t.prototype, n), o && i(t, o), p
		}(r.a);
		t.a = f
	},
	5: function(e, t, n) {
		"use strict";
		n.r(t), n.d(t, "SET_LEVEL", (function() {
			return r
		})), n.d(t, "CLEAR_TEAM_NOTIFICATIONS", (function() {
			return o
		})), n.d(t, "CLEAR_NEWLY_JOINED_TEAM_ID", (function() {
			return a
		})), n.d(t, "UPDATE_WITH_TYPING_RACE_RESULTS", (function() {
			return i
		})), n.d(t, "UPDATE_WITH_MATH_RACE_RESULTS", (function() {
			return s
		})), n.d(t, "SET_QUALIFYING_INFO", (function() {
			return c
		})), n.d(t, "UPDATE_SOUND_PREFERENCES", (function() {
			return l
		})), n.d(t, "UPDATE_LINE_TYPE", (function() {
			return u
		})), n.d(t, "ADD_DQ", (function() {
			return p
		})), n.d(t, "SET_UPGRADED_TO_GOLD", (function() {
			return f
		})), n.d(t, "SET_SEND_CASH_SUCCESSFUL", (function() {
			return d
		})), n.d(t, "SET_CASH_GIFT_RECEIVED", (function() {
			return m
		})), n.d(t, "USER_PURCHASED_CASH", (function() {
			return h
		})), n.d(t, "REFRESH_USER_SESSION_AFTER_STRIPE_PURCHASE", (function() {
			return y
		})), n.d(t, "SAVE_QUALIFYING_RESULTS", (function() {
			return g
		})), n.d(t, "SET_USER_EMAIL_VALID", (function() {
			return v
		})), n.d(t, "SET_EVENT_MODAL_VISIBILITY", (function() {
			return b
		})), n.d(t, "UPDATE_USERNAME", (function() {
			return w
		})), n.d(t, "CAPTCHA_SUCCESSFUL", (function() {
			return E
		})), n.d(t, "VISITED_NEWS", (function() {
			return O
		})), n.d(t, "VISITED_SHOP", (function() {
			return S
		})), n.d(t, "BACK_OFF_ACHIEVEMENTS_CHECK", (function() {
			return _
		})), n.d(t, "TRACK_CHECKINS", (function() {
			return T
		})), n.d(t, "ONLINE_NOTIFICATION_SEEN", (function() {
			return N
		})), n.d(t, "STORE_LAST_PURCHASE", (function() {
			return C
		})), n.d(t, "NEW_REALTIME_MESSAGE", (function() {
			return A
		})), n.d(t, "CLAIM_EXTRA_LEVEL_REWARD", (function() {
			return I
		})), n.d(t, "UPDATE_DAILY_CHALLENGES", (function() {
			return k
		})), n.d(t, "SET_SELECTED_MATH_PROBLEM_TYPE", (function() {
			return R
		}));
		var r = "nitrotype/user/SET_LEVEL",
			o = "nitrotype/user/CLEAR_TEAM_NOTIFICATIONS",
			a = "nitrotype/user/CLEAR_NEWLY_JOINED_TEAM_ID",
			i = "nitrotype/user/UPDATE_WITH_TYPING_RACE_RESULTS",
			s = "nitrotype/user/UPDATE_WITH_MATH_RACE_RESULTS",
			c = "nitrotype/user/SET_QUALIFYING_INFO",
			l = "nitrotype/user/UPDATE_SOUND_PREFERENCES",
			u = "nitrotype/users/UPDATE_LINE_TYPE",
			p = "nitrotype/users/ADD_DQ",
			f = "nitrotype/users/SET_UPGRADED_TO_GOLD",
			d = "nitrotype/users/SET_SEND_CASH_SUCCESSFUL",
			m = "nitrotype/users/SET_CASH_GIFT_RECEIVED",
			h = "nitrotype/users/USER_PURCHASED_CASH",
			y = "nitrotype/users/REFRESH_USER_SESSION_AFTER_STRIPE_PURCHASE",
			g = "nitrotype/users/SAVE_QUALIFYING_RESULTS",
			v = "nitrotype/users/SET_USER_EMAIL_VALID",
			b = "nitrotype/users/SET_EVENT_MODAL_VISIBILITY",
			w = "nitrotype/users/UPDATE_USERNAME",
			E = "nitrotype/users/CAPTCHA_SUCCESSFUL",
			O = "nitrotype/users/VISITED_NEWS",
			S = "nitrotype/users/VISITED_SHOP",
			_ = "nitrotype/users/BACK_OFF_ACHIEVEMENTS_CHECK",
			T = "nitrotype/users/TRACK_CHECKINS",
			N = "nitrotype/user/ONLINE_NOTIFICATION_SEEN",
			C = "nitrotype/user/STORE_LAST_PURCHASE",
			A = "nitrotype/user/NEW_REALTIME_MESSAGE",
			I = "nitrotype/user/CLAIM_EXTRA_LEVEL_REWARD",
			k = "nitrotype/user/UPDATE_DAILY_CHALLENGES",
			R = "nitromath/user/SET_SELECTED_MATH_PROBLEM_TYPE"
	},
	50: function(e, t, n) {
		"use strict";
		var r = n(2);

		function o(e) {
			return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}

		function a(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
			}
		}

		function i(e, t) {
			return (i = Object.setPrototypeOf || function(e, t) {
				return e.__proto__ = t, e
			})(e, t)
		}

		function s(e) {
			var t = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
				} catch (e) {
					return !1
				}
			}();
			return function() {
				var n, r = l(e);
				if (t) {
					var o = l(this).constructor;
					n = Reflect.construct(r, arguments, o)
				} else n = r.apply(this, arguments);
				return c(this, n)
			}
		}

		function c(e, t) {
			return !t || "object" !== o(t) && "function" != typeof t ? function(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}(e) : t
		}

		function l(e) {
			return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
				return e.__proto__ || Object.getPrototypeOf(e)
			})(e)
		}
		var u = function(e) {
			! function(e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						writable: !0,
						configurable: !0
					}
				}), t && i(e, t)
			}(l, e);
			var t, n, o, c = s(l);

			function l(e, t, n) {
				var o, a, i, s;
				(function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, l), (i = c.call(this))._loader = void 0, i._wsURL = void 0, i._user = void 0, i._globals = void 0, i._canvas = void 0, i._client = void 0, i._loaded = !1, i._connected = !1, i._handleLoaderLoaded = function() {
					i._loader = !!window.createUnityInstance, i._createUnityInstance()
				}, i._createUnityInstance = function() {
					i._canvas && i._loader && window.createUnityInstance(i._canvas, i._globals.UNITY_CONFIG, i._handleLoaderProgress).then(i._handleLoaded).catch(i._handleError)
				}, i._handleLoaderProgress = function(e) {
					i.dispatchEvent("loading", e)
				}, i.setCanvas = function(e) {
					console.log("UnityClient: CANVAS SET"), i._canvas = e, i._createUnityInstance()
				}, i.write = function(e) {
					var t = Object(r.h)(e);
					try {
						i._client.SendMessage("JavascriptManager", "ForwardToRealtime", t)
					} catch (n) {
						console.error("Error encoding and sending message to UnityClient", {
							e: n,
							message: e,
							encoded: t
						})
					}
				}, i.on = function(e, t) {
					return i.addEventListener(e, t)
				}, i.end = function() {}, i._handleLoaded = function(e) {
					console.log("UnityClient: LOADED"), i._loaded = !0, i._client = e
				}, i._handleClientInitialized = function() {
					i._initialized = !0;
					var e = JSON.stringify({
						wsURL: i._wsURL,
						assetOrigin: location.origin,
						user: {
							userID: i._user.userID,
							stickers: i._user.loot.filter((function(e) {
								return "sticker" === e.type && e.equipped
							})).map((function(e) {
								return e.lootID
							})),
							friends: i._user.friends.map((function(e) {
								return e.userID
							}))
						},
						bootstrap: {
							carsPath: i._globals.CAR_URL,
							carsPaintedPath: i._globals.CAR_PAINTED_URL,
							stickers: i._globals.LOOT.filter((function(e) {
								return "sticker" === e.type
							})).map((function(e) {
								var t;
								return {
									lootID: e.lootID,
									src: (null === (t = e.options) || void 0 === t ? void 0 : t.src) || ""
								}
							})),
							lessonDescriptions: i._globals.LESSON_DESCRIPTIONS.map((function(e) {
								return {
									lessonID: e.lessonID,
									title: e.title || ""
								}
							}))
						}
					});
					i._client.SendMessage("JavascriptManager", "InitClient", e), console.log("UnityClient: INITIALIZED"), window.__unityFullScreen = function() {
						var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
						i._client.SetFullscreen(e)
					}
				}, i._handleClientConnected = function() {
					i._connected = !0, console.log("UnityClient: CONNECTED"), i.dispatchEvent("open")
				}, i._handleError = function(e) {
					console.log("UnityClient: ERROR", e), i.dispatchEvent("error", e)
				}, i._handleMessage = function(e) {
					i.dispatchEvent("data", Object(r.s)(e))
				}, i._wsURL = e, i._user = t, i._globals = n, window.unityClientInitialized = i._handleClientInitialized, window.unityClientConnected = i._handleClientConnected, window.unityMessageFromRealtime = i._handleMessage, window.unityError = i._handleError, null !== (o = window) && void 0 !== o && null !== (a = o.unityScriptTag) && void 0 !== a && a.loaded) ? i._handleLoaderLoaded(): null === (s = window.unityScriptTag) || void 0 === s || s.addEventListener("load", i._handleLoaderLoaded);
				return i
			}
			return t = l, (n = [{
				key: "isConnected",
				get: function() {
					return this._connected
				}
			}]) && a(t.prototype, n), o && a(t, o), l
		}(r.a);
		t.a = u
	},
	51: function(e, t, n) {
		"use strict";
		n.d(t, "a", (function() {
			return v
		}));
		var r = n(0),
			o = n.n(r),
			a = (n(1), n(3)),
			i = n.n(a),
			s = n(58),
			c = n(32);

		function l(e) {
			return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}

		function u() {
			return (u = Object.assign || function(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = arguments[t];
					for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
				}
				return e
			}).apply(this, arguments)
		}

		function p(e, t, n, r, o, a, i) {
			try {
				var s = e[a](i),
					c = s.value
			} catch (e) {
				return void n(e)
			}
			s.done ? t(c) : Promise.resolve(c).then(r, o)
		}

		function f(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function d(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
			}
		}

		function m(e, t) {
			return (m = Object.setPrototypeOf || function(e, t) {
				return e.__proto__ = t, e
			})(e, t)
		}

		function h(e) {
			var t = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
				} catch (e) {
					return !1
				}
			}();
			return function() {
				var n, r = g(e);
				if (t) {
					var o = g(this).constructor;
					n = Reflect.construct(r, arguments, o)
				} else n = r.apply(this, arguments);
				return y(this, n)
			}
		}

		function y(e, t) {
			return !t || "object" !== l(t) && "function" != typeof t ? function(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}(e) : t
		}

		function g(e) {
			return (g = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
				return e.__proto__ || Object.getPrototypeOf(e)
			})(e)
		}
		var v = function(e) {
			! function(e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						writable: !0,
						configurable: !0
					}
				}), t && m(e, t)
			}(g, e);
			var t, n, r, a, l, y = h(g);

			function g() {
				var e;
				f(this, g);
				for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
				return (e = y.call.apply(y, [this].concat(n))).containerRef = o.a.createRef(), e
			}
			return t = g, (n = [{
				key: "componentDidMount",
				value: function() {
					this.createView()
				}
			}, {
				key: "componentDidUpdate",
				value: function(e, t, n) {
					this.garage && (e.animate !== this.props.animate && (this.props.animate ? this.garage.startAutoRender() : this.garage.stopAutoRender()), this.updateCar())
				}
			}, {
				key: "updateCar",
				value: function() {
					var e = this.props,
						t = e.carID,
						n = e.hue,
						r = e.trailKey,
						o = e.scale,
						a = e.offsetX,
						i = e.offsetY,
						s = this.props.metaData || this.props.getCarMetaData(t),
						c = s.assetKey,
						l = s.tweaks,
						u = s.isAnimated;
					this.garage.updateCar({
						type: c,
						hue: n,
						tweaks: l,
						isAnimated: u,
						trail: r,
						scale: o,
						offsetX: a,
						offsetY: i
					})
				}
			}, {
				key: "createView",
				value: (a = regeneratorRuntime.mark((function e() {
					var t, n = this;
					return regeneratorRuntime.wrap((function(e) {
						for (;;) switch (e.prev = e.next) {
							case 0:
								return t = new s.Garage, this.garage = t, e.next = 4, t.init({
									container: this.containerRef.current,
									manifest: c.b,
									baseUrl: c.a,
									transparent: !!this.props.transparent,
									backgroundColor: this.props.backgroundColor,
									getCarUrl: function() {
										return n.props.getCarUrl(n.props.carID, !0, 0)
									},
									tweaks: this.props.tweaks,
									useWebGL: this.props.useWebGL,
									mode: this.props.mode
								});
							case 4:
								this.props.animate || t.stopAutoRender(), this.updateCar();
							case 6:
							case "end":
								return e.stop()
						}
					}), e, this)
				})), l = function() {
					var e = this,
						t = arguments;
					return new Promise((function(n, r) {
						var o = a.apply(e, t);

						function i(e) {
							p(o, n, r, i, s, "next", e)
						}

						function s(e) {
							p(o, n, r, i, s, "throw", e)
						}
						i(void 0)
					}))
				}, function() {
					return l.apply(this, arguments)
				})
			}, {
				key: "render",
				value: function() {
					var e = {
							style: this.props.style
						},
						t = i()("animated-car-preview", this.props.className);
					return o.a.createElement("div", u({}, e, {
						ref: this.containerRef,
						className: t
					}))
				}
			}]) && d(t.prototype, n), r && d(t, r), g
		}(o.a.PureComponent);
		v.defaultProps = {
			transparent: !0,
			hue: 0,
			tweaks: {},
			backgroundColor: 0,
			animate: !0,
			scale: 1,
			offsetX: 0,
			offsetY: 0
		}
	},
	52: function(e, t, n) {
		"use strict";
		n.d(t, "b", (function() {
			return r
		}));
		var r = {};
		n.r(r), n.d(r, "sendRaceFeedback", (function() {
			return f
		})), n.d(r, "setRacingStatus", (function() {
			return d
		}));
		var o = "nitrotype/profile/SET_RACING_STATUS";

		function a(e, t) {
			var n = Object.keys(e);
			if (Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(e);
				t && (r = r.filter((function(t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				}))), n.push.apply(n, r)
			}
			return n
		}

		function i(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = null != arguments[t] ? arguments[t] : {};
				t % 2 ? a(Object(n), !0).forEach((function(t) {
					s(e, t, n[t])
				})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function(t) {
					Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
				}))
			}
			return e
		}

		function s(e, t, n) {
			return t in e ? Object.defineProperty(e, t, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = n, e
		}
		var c = {
				status: void 0
			},
			l = function(e, t) {
				return i(i({}, e), {}, {
					status: t
				})
			},
			u = function() {
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case o:
						return l(e, t.payload)
				}
				return e
			},
			p = n(2),
			f = function(e, t, n) {
				return function(r) {
					var o = {
						raceId: e,
						rating: t,
						metadata: n
					};
					p.b.mock("/api/v2/NEEDS_URL", {
						method: "post",
						params: o,
						apiScope: "sendRaceFeedback",
						success: !0,
						response: {
							success: !0
						}
					}, r)
				}
			},
			d = function(e) {
				return {
					type: o,
					payload: e
				}
			};
		n(84), t.a = u
	},
	55: function(e, t, n) {
		"use strict";

		function r(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function o(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
			}
		}
		n.d(t, "a", (function() {
			return a
		}));
		var a = function() {
			function e(t) {
				var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
				r(this, e), this.container = t, this.options = n, this.flag = this._createContext(), this.display = this._createContext(), this.container.appendChild(this.display.canvas)
			}
			var t, n, a;
			return t = e, (n = [{
				key: "_createContext",
				value: function() {
					var e = document.createElement("canvas"),
						t = e.getContext("2d");
					return {
						canvas: e,
						ctx: t,
						resize: function(t, n) {
							e.width = t, e.height = n
						},
						reset: function() {
							return e.width = e.width
						}
					}
				}
			}, {
				key: "refresh",
				value: function() {
					var e = this.display,
						t = this.container,
						n = this.options;
					this.width = t.offsetWidth, this.height = t.offsetHeight, e.fill = e.ctx.createLinearGradient(this.width, 0, this.width, this.height), e.fill.addColorStop(0, "rgba(0,0,0,1)"), e.fill.addColorStop(.8, "rgba(0,0,0,0)"), this.cols = n.cols || 10, this.boxSize = this.width / this.cols, this.rows = this.height / this.boxSize, this.opacity = n.opacity || 1, this.flagTravelSpeed = n.flagTravelSpeed || .02, this.flagWaveInset = n.flagWaveInset || .22, this.flagWaveDistance = n.flagWaveDistance || .3, this.flagWaveSpeed = n.flagWaveSpeed || .003, this.startAt = Date.now()
				}
			}, {
				key: "start",
				value: function() {
					var e = this;
					this.refresh();
					var t = 1e3 / this.options.fps || 30;
					this._animationInterval = setInterval((function() {
						try {
							e.render()
						} catch (t) {
							throw e.stop(), t
						}
					}), t)
				}
			}, {
				key: "stop",
				value: function() {
					clearInterval(this._animationInterval)
				}
			}, {
				key: "render",
				value: function() {
					try {
						var e = Date.now(),
							t = this.flagWaveSpeed;
						this.ts = e - this.startAt, this.mod = Math.sin(e * t), this._renderFlagState(), this._renderDisplay()
					} catch (e) {}
				}
			}, {
				key: "_renderFlagState",
				value: function() {
					var e = this.width,
						t = this.height,
						n = this.boxSize,
						r = this.mod,
						o = this.rows,
						a = this.cols,
						i = this.flagWaveInset,
						s = this.flagWaveDistance,
						c = this.flag,
						l = c.ctx,
						u = c.resize,
						p = (c.fill, e * i),
						f = .5 * e;
					u(this.width, this.height), l.fillStyle = "white", l.fillRect(0, 0, e, t), l.beginPath();
					for (var d = 0; d < o; d += 2) {
						var m = n * s * r,
							h = p,
							y = d * n - m,
							g = f - p,
							v = d * n,
							b = (d + 1) * n;
						l.lineTo(0, d * n), l.bezierCurveTo(h, y, g, y, f, v), l.bezierCurveTo(f + p, v + m, e - p, v + m, e, v), l.lineTo(e, b), l.bezierCurveTo(e - p, b + m, f + p, b + m, f, b), l.bezierCurveTo(g, b - m, h, b - m, 0, b), l.lineTo(0, b)
					}
					for (var w = 0; w < a; w += 2) l.lineTo(w * n, 0), l.lineTo(w * n, t), l.lineTo((w + 1) * n, t), l.lineTo((w + 1) * n, 0);
					l.fillStyle = "black", l.fill()
				}
			}, {
				key: "_renderDisplay",
				value: function() {
					var e = this.width,
						t = this.height,
						n = this.ts,
						r = this.opacity,
						o = this.flagTravelSpeed,
						a = this.flag.canvas,
						i = this.display,
						s = i.resize,
						c = i.ctx,
						l = i.fill,
						u = n * o % e,
						p = .9 * e;
					s(e, t), c.globalAlpha = r, c.fillStyle = l, c.fillRect(0, 0, e, t), c.globalCompositeOperation = "source-atop", c.rotate(-.15), c.drawImage(a, u, 0), c.drawImage(a, u - e, 0), u > p && c.drawImage(a, u - 2 * e, 0)
				}
			}]) && o(t.prototype, n), a && o(t, a), e
		}()
	},
	56: function(e, t, n) {
		"use strict";
		var r = n(0),
			o = n.n(r);
		n(1);

		function a(e) {
			return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}

		function i(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function s(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
			}
		}

		function c(e, t) {
			return (c = Object.setPrototypeOf || function(e, t) {
				return e.__proto__ = t, e
			})(e, t)
		}

		function l(e) {
			var t = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
				} catch (e) {
					return !1
				}
			}();
			return function() {
				var n, r = p(e);
				if (t) {
					var o = p(this).constructor;
					n = Reflect.construct(r, arguments, o)
				} else n = r.apply(this, arguments);
				return u(this, n)
			}
		}

		function u(e, t) {
			return !t || "object" !== a(t) && "function" != typeof t ? function(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}(e) : t
		}

		function p(e) {
			return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
				return e.__proto__ || Object.getPrototypeOf(e)
			})(e)
		}
		var f = function(e) {
			! function(e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						writable: !0,
						configurable: !0
					}
				}), t && c(e, t)
			}(u, e);
			var t, n, r, a = l(u);

			function u() {
				return i(this, u), a.apply(this, arguments)
			}
			return t = u, (n = [{
				key: "render",
				value: function() {
					return "nitrotype" === this.props.site ? o.a.createElement("svg", {
						className: "logo-SVG logo-SVG--type",
						viewBox: "0 0 484 68",
						fill: "none",
						xmlns: "http://www.w3.org/2000/svg"
					}, o.a.createElement("path", {
						className: "logo-deco",
						d: "M472.111.193h11.281L469.585 68H458.26L472.111.193z",
						fill: "#D62F3A"
					}), o.a.createElement("path", {
						d: "M432.511 22.232l-1.004 5.247h18.569l-2.132 10.879h-18.632l-1.129 5.887h20.95l-2.357 11.39h-34.828l9.143-44.793h34.82l-2.259 11.39h-21.141z",
						fill: "#fff"
					}), o.a.createElement("path", {
						fillRule: "evenodd",
						clipRule: "evenodd",
						d: "M407.119 14.745c-3.221-2.602-7.758-3.903-13.614-3.903h-19.509l-2.328 11.635 17.066.011h2.701c3.681 0 5.521 1.515 5.521 4.543 0 1.877-.565 3.35-1.694 4.416-1.129 1.024-2.718 1.536-4.768 1.536h-6.085l.001-.003h-14.844l-4.533 22.655h14.905l2.213-11.006h7.59c4.434 0 8.323-.79 11.669-2.368 3.387-1.578 5.98-3.797 7.779-6.655 1.84-2.858 2.76-6.164 2.76-9.918 0-4.693-1.61-8.34-4.83-10.943z",
						fill: "#fff"
					}), o.a.createElement("path", {
						d: "M346.385 39.382l-3.137 16.253h-14.805l3.199-16.445-10.978-28.348h14.868l5.959 15.486 12.233-15.486h14.868l-22.207 28.54zM287.009 22.502h-12.806l2.311-11.66h40.353l-2.311 11.66H301.75l-6.7 33.133h-14.9l6.859-33.133zM225.261 55.635c-4.279 0-8.039-.795-11.278-2.386-3.2-1.632-5.679-3.896-7.439-6.793-1.72-2.896-2.58-6.221-2.58-9.974 0-4.977 1.12-9.404 3.36-13.28 2.279-3.916 5.419-6.955 9.418-9.117 4.04-2.162 8.599-3.243 13.678-3.243 4.279 0 8.019.816 11.218 2.447 3.24 1.591 5.719 3.835 7.439 6.732 1.76 2.896 2.64 6.221 2.64 9.974 0 4.977-1.14 9.424-3.42 13.34-2.239 3.876-5.379 6.895-9.418 9.057-4 2.162-8.539 3.243-13.618 3.243zm1.2-11.688c2.239 0 4.179-.591 5.819-1.774 1.68-1.183 2.959-2.774 3.839-4.773.88-2 1.32-4.182 1.32-6.548 0-2.53-.74-4.549-2.22-6.058-1.439-1.51-3.439-2.264-5.999-2.264-2.239 0-4.199.591-5.879 1.774-1.639 1.183-2.899 2.774-3.779 4.773-.88 2-1.32 4.182-1.32 6.548 0 2.53.72 4.549 2.16 6.058 1.48 1.51 3.499 2.264 6.059 2.264z",
						fill: "#fff"
					}), o.a.createElement("path", {
						fillRule: "evenodd",
						clipRule: "evenodd",
						d: "M197.202 35.99c2.092-2.986 3.137-6.463 3.137-10.43 0-4.65-1.61-8.255-4.83-10.815-3.179-2.602-7.654-3.903-13.425-3.903h-19.375l-2.382 11.714 14.539-.049.004-.019h4.955c3.681 0 5.521 1.515 5.521 4.543 0 1.878-.565 3.35-1.694 4.416-1.129 1.024-2.718 1.536-4.768 1.536h-6.061l-14.607-.04-4.613 22.692h14.805l2.196-11.262h3.638l6.211 11.262h15.369l-7.339-13.054c3.764-1.45 6.67-3.647 8.719-6.59z",
						fill: "#fff"
					}), o.a.createElement("path", {
						d: "M127.413 22.552h-12.86l2.321-11.71h40.525l-2.408 11.71h-12.773l-6.75 33.083h-14.803l6.748-33.083zM95.002 10.842h14.787l-8.772 44.736H86.231l8.771-44.736z",
						fill: "#fff"
					}), o.a.createElement("path", {
						fillRule: "evenodd",
						clipRule: "evenodd",
						d: "M22.448 0H.392l16.61 27.836-7.839 40.067h64.74L88.043 0H22.447z",
						fill: "#D62F3A"
					}), o.a.createElement("path", {
						d: "M73.334 10.84L64.55 55.635H52.38l-12.61-20.86-4.077 20.86H21.265l8.783-44.793h12.17l12.61 20.86 4.077-20.86h14.428z",
						fill: "#fff"
					}), o.a.createElement("image", {
						src: "/dist/site/images/logos/nt-logo-sm-fallback.png",
						xlinkHref: ""
					})) : "nitromath" === this.props.site ? o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
						className: "logo-nitromath--beta"
					}, "BETA"), o.a.createElement("svg", {
						className: "logo-SVG logo-SVG--math",
						xmlns: "http://www.w3.org/2000/svg",
						fill: "none",
						viewBox: "0 0 904 120"
					}, o.a.createElement("path", {
						fill: "#fff",
						d: "M573.07 21.78l-15.24 76.8H534.1l6.84-35-21.75 28.08h-11.49L495.76 64l-6.95 34.56h-23.75l15.46-76.8h21.2l16.8 40.82 32.36-40.81h22.2zM592.25 98.57l7.77-13.53 10.76-18.85 11.43-19.86L626 66.2l3.66 18.85 2.55 13.53h26.08l-18.42-77.63H614.1l-49.5 77.63h27.64zM685 40.77h-22.48l4.06-20.46h70.8l-4.2 20.46h-22.32l-11.8 57.8H673.2l11.8-57.8zM820.58 20.94l-15.51 77.63H778.9l5.77-28.61h-24.16l-5.76 28.61H728.6l15.52-77.63h26.15l-5.54 27.5h24.16l5.54-27.5h26.15zM390.24 97.88c-7.48 0-14.04-1.39-19.7-4.17a31.64 31.64 0 01-13-11.86c-3-5.06-4.5-10.87-4.5-17.43 0-8.7 1.95-16.43 5.86-23.2a41.55 41.55 0 0116.46-15.93c7.06-3.78 15.02-5.67 23.9-5.67 7.47 0 14 1.43 19.6 4.28 5.65 2.78 9.99 6.7 12.99 11.76 3.07 5.06 4.61 10.87 4.61 17.43 0 8.7-1.99 16.46-5.97 23.3a40.86 40.86 0 01-16.46 15.83c-6.98 3.78-14.91 5.66-23.79 5.66zm2.1-20.42c3.91 0 7.3-1.03 10.16-3.1a19.62 19.62 0 006.71-8.34c1.54-3.49 2.3-7.3 2.3-11.44 0-4.41-1.29-7.94-3.87-10.58-2.52-2.64-6.01-3.96-10.48-3.96-3.92 0-7.34 1.04-10.27 3.1a19.93 19.93 0 00-6.6 8.34c-1.54 3.5-2.31 7.31-2.31 11.44 0 4.42 1.25 7.95 3.77 10.59 2.59 2.64 6.12 3.95 10.59 3.95z"
					}), o.a.createElement("path", {
						fill: "#fff",
						fillRule: "evenodd",
						d: "M341.52 63.95c3.66-5.22 5.48-11.3 5.48-18.23 0-8.12-2.81-14.42-8.44-18.9-5.55-4.54-13.37-6.81-23.45-6.81h-33.85l-4.16 20.47 25.4-.09v-.03h8.66c6.43 0 9.65 2.64 9.65 7.93 0 3.28-.99 5.85-2.96 7.72-1.98 1.79-4.75 2.68-8.33 2.68h-10.6l-25.51-.07-8.06 39.65h25.86l3.84-19.68h6.36l10.85 19.68h26.85l-12.82-22.8c6.57-2.54 11.65-6.38 15.23-11.52z",
						clipRule: "evenodd"
					}), o.a.createElement("path", {
						fill: "#fff",
						d: "M217.98 40.08h-22.47l4.06-20.46h70.8l-4.2 20.46h-22.32l-11.8 57.8H206.2l11.79-57.8zM164.35 19.62h25.83l-15.32 78.16h-25.84l15.33-78.16z"
					}), o.a.createElement("path", {
						fill: "#D62F3A",
						fillRule: "evenodd",
						d: "M40.01.68H.1l29.02 48.63-13.7 70h113.12L153.23.69H40z",
						clipRule: "evenodd"
					}), o.a.createElement("path", {
						fill: "#fff",
						d: "M127.53 19.62L112.2 97.88H90.92L68.9 61.44l-7.12 36.44h-25.2L51.9 19.62h21.26L95.2 56.07l7.12-36.45h25.21z"
					}), o.a.createElement("path", {
						className: "logo-deco",
						fill: "#D62F3A",
						d: "M903.9 38.77l-3.23 16.05h-19.5l-3.7 18.24H859.7l3.7-18.24h-19.63l3.35-16.05h19.4l3.69-18.23h17.78l-3.7 18.23h19.63zm-65.45 42.95h56.91l-3.34 16.85H835.1l3.34-16.85z"
					}))) : "Nitro... what?"
				}
			}]) && s(t.prototype, n), r && s(t, r), u
		}(o.a.PureComponent);
		t.a = f
	},
	62: function(e, t) {},
	63: function(e, t, n) {
		"use strict";
		n.d(t, "b", (function() {
			return o
		})), n.d(t, "c", (function() {
			return r
		}));
		var r = {};
		n.r(r), n.d(r, "VALIDATE_USER_PRODUCT", (function() {
			return m
		}));
		var o = {};
		n.r(o), n.d(o, "beginPurchase", (function() {
			return h
		})), n.d(o, "validateUserProduct", (function() {
			return y
		}));
		var a = n(9);

		function i(e, t) {
			var n = Object.keys(e);
			if (Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(e);
				t && (r = r.filter((function(t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				}))), n.push.apply(n, r)
			}
			return n
		}

		function s(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = null != arguments[t] ? arguments[t] : {};
				t % 2 ? i(Object(n), !0).forEach((function(t) {
					c(e, t, n[t])
				})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function(t) {
					Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
				}))
			}
			return e
		}

		function c(e, t, n) {
			return t in e ? Object.defineProperty(e, t, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = n, e
		}
		var l = {
				transaction: null,
				products: null,
				user: null
			},
			u = function(e, t) {
				return s(s({}, e), {}, {
					transaction: t.transaction
				})
			},
			p = function(e, t) {
				var n = t.products,
					r = t.user;
				return s(s({}, e), {}, {
					products: n,
					user: r
				})
			},
			f = function() {
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case a.d.REFRESH_USER_SESSION_AFTER_STRIPE_PURCHASE:
						return u(e, t.payload);
					case r.VALIDATE_USER_PRODUCT:
						return p(e, t.payload)
				}
				return e
			},
			d = n(2),
			m = "nitrotype/store/VALIDATE_USER_PRODUCT",
			h = function(e, t, n) {
				return function(r, o) {
					var a = o().globals;
					Object(d.b)("/api/v2/payments/create-session", {
						method: "post",
						params: {
							username: e,
							SKU: t,
							purchaseMethod: n
						},
						apiScope: "beginPurchase"
					}, r).then((function(e) {
						window.Stripe(a.STRIPE_KEY, {
							apiVersion: a.STRIPE_API_VERSION
						}).redirectToCheckout({
							sessionId: e.sessionID
						})
					}), (function() {}))
				}
			},
			y = function(e, t) {
				return function(n, r) {
					Object(d.b)("/api/v2/payments/products", {
						method: "post",
						params: {
							username: e,
							type: t
						},
						apiScope: "validateUserProduct"
					}, n).then((function(e) {
						n(function(e) {
							return {
								type: m,
								payload: e
							}
						}(e))
					}), (function() {}))
				}
			};
		n(66), t.a = f
	},
	64: function(e, t, n) {
		"use strict";
		n.r(t), n.d(t, "getCurrentSeason", (function() {
			return c
		})), n.d(t, "getActiveRewardID", (function() {
			return l
		})), n.d(t, "getEarnedButLockedRewards", (function() {
			return u
		})), n.d(t, "getCurrentSeasonProgress", (function() {
			return p
		})), n.d(t, "getNextSeasonReward", (function() {
			return f
		})), n.d(t, "calculateInfinityTier", (function() {
			return d
		}));
		var r = n(2),
			o = n(48);

		function a(e, t) {
			var n = Object.keys(e);
			if (Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(e);
				t && (r = r.filter((function(t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				}))), n.push.apply(n, r)
			}
			return n
		}

		function i(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = null != arguments[t] ? arguments[t] : {};
				t % 2 ? a(Object(n), !0).forEach((function(t) {
					s(e, t, n[t])
				})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function(t) {
					Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
				}))
			}
			return e
		}

		function s(e, t, n) {
			return t in e ? Object.defineProperty(e, t, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = n, e
		}
		var c = function(e) {
				return Object(r.j)(e)
			},
			l = function(e, t, n) {
				var r, o, a;
				if (!t) return null === (a = e[0]) || void 0 === a ? void 0 : a.achievementID;
				var i = !1,
					s = e.find((function(t, r) {
						return !t.bonus && (!!i || (t.experience === n ? (i = !0, !1) : t.experience > n || (r + 1 === e.length || void 0)))
					}));
				return s ? s.achievementID : 0 === n ? null === (r = e[0]) || void 0 === r ? void 0 : r.achievementID : null === (o = e[e.length - 1]) || void 0 === o ? void 0 : o.achievementID
			},
			u = function(e, t) {
				return "gold" !== e.membership && e.loggedIn ? t.filter((function(e) {
					return !e.free && 100 === e.progress || !e.free && !!e.hidden
				})) : null
			},
			p = function(e) {
				var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
					n = e.user,
					a = n.experience,
					s = void 0 === a ? 0 : a,
					c = Math.max(t, n.level),
					u = Object(o.getCurrentSeasonRewards)(e),
					p = Object(r.j)(e.globals.ACTIVE_SEASONS),
					f = l(u, n.loggedIn, s),
					d = null == u ? void 0 : u.find((function(e) {
						return e.achievementID === f
					})),
					m = Math.floor(Date.now() / 1e3);
				if (!p || (null == p ? void 0 : p.startStamp) > m || !d) return null;
				var h = Math.ceil((p.endStamp - p.startStamp) / 86400),
					y = s,
					g = Object(r.k)(c),
					v = Object(r.k)(c + 1),
					b = v - g,
					w = y - g,
					E = w / b;
				return {
					season: i(i({}, p), {}, {
						daysRemaining: h,
						rewards: u
					}),
					nextRewardID: f,
					nextReward: d,
					currentLevel: c,
					currentXP: y,
					currentLevelXP: w,
					requiredXP: b,
					percentComplete: E
				}
			},
			f = function(e, t) {
				var n = p(e, t);
				return n ? n.nextReward : null
			},
			d = function(e, t) {
				t = t || 0;
				var n = c(e.globals.ACTIVE_SEASONS),
					r = !1;
				return null != n && n.totalRewards && t > (null == n ? void 0 : n.totalRewards) + 1 && (r = !0, t = Math.max(1, t - n.totalRewards - 1)), {
					isInfinityLevel: r,
					level: t
				}
			}
	},
	65: function(e, t, n) {
		"use strict";
		n.d(t, "b", (function() {
			return r
		}));
		var r = {};
		n.r(r), n.d(r, "getNews", (function() {
			return m
		})), n.d(r, "getNewsPost", (function() {
			return h
		}));
		var o = "nitrotype/news/SET_NEWS",
			a = "nitrotype/news/SET_NEWS_POST";

		function i(e, t) {
			var n = Object.keys(e);
			if (Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(e);
				t && (r = r.filter((function(t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				}))), n.push.apply(n, r)
			}
			return n
		}

		function s(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = null != arguments[t] ? arguments[t] : {};
				t % 2 ? i(Object(n), !0).forEach((function(t) {
					c(e, t, n[t])
				})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function(t) {
					Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
				}))
			}
			return e
		}

		function c(e, t, n) {
			return t in e ? Object.defineProperty(e, t, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = n, e
		}
		var l = {
				list: null,
				post: null
			},
			u = function(e, t) {
				return s(s({}, e), {}, {
					list: t
				})
			},
			p = function(e, t) {
				return s(s({}, e), {}, {
					post: t
				})
			},
			f = function() {
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case o:
						return u(e, t.payload);
					case a:
						return p(e, t.payload)
				}
				return e
			},
			d = n(2),
			m = function(e) {
				var t = {};
				return e && (t.limit = e),
					function(e) {
						Object(d.b)("/api/v2/news", {
							method: "get",
							apiScope: "getNews",
							params: t
						}, e).then((function(t) {
							e(function(e) {
								return {
									type: o,
									payload: e
								}
							}(t))
						}), (function() {
							return null
						}))
					}
			},
			h = function(e) {
				return function(t) {
					Object(d.b)("/api/v2/news/".concat(e), {
						method: "get",
						apiScope: "getNewsPost"
					}, t).then((function(e) {
						t(function(e) {
							return {
								type: a,
								payload: e
							}
						}(e))
					}), (function() {
						return null
					}))
				}
			};
		n(86), t.a = f
	},
	66: function(e, t, n) {
		"use strict";
		n.d(t, "a", (function() {
			return r
		}));
		n(4);
		var r = function(e, t, n) {
			if (!e) return null;
			var r = Date.now();
			return e.map((function(e) {
				var t = e.price,
					n = e.salePrice,
					o = (e.SKU, 1e3 * e.saleEnds);
				e.price = parseFloat(t), e.salePrice = parseFloat(n);
				var a = isNaN(o) || o < r;
				return e.hasSalePrice = !(isNaN(e.salePrice) || a || e.salePrice <= 0), e.hasSalePrice || delete e.salePrice, e.activePrice = e.hasSalePrice ? e.salePrice : e.price, e.savings = e.salePrice / e.price, e.percentOff = 10 * Math.round(10 * (1 - e.savings)), e
			})).sort((function(e, r) {
				return null != n && n.includes(r.SKU) ? -1 : "desc" === t ? r.cashReward - e.cashReward : e.cashReward - r.cashReward
			}))
		}
	},
	67: function(e, t, n) {
		"use strict";
		var r = n(0),
			o = n.n(r),
			a = (n(1), n(4));

		function i(e, t) {
			var n = Object.keys(e);
			if (Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(e);
				t && (r = r.filter((function(t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				}))), n.push.apply(n, r)
			}
			return n
		}

		function s(e, t, n) {
			return t in e ? Object.defineProperty(e, t, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = n, e
		}

		function c(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
			}
		}
		var l = function() {
			function e(t, n) {
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, e), this.type = "abstract particle", this.screenHeight = 0, this.screenWidth = 0, this.gravity = 9.81, this.mass = 1, this.resistance = 0, this.size = 2, this.alpha = 1, this.shrink = 0, this.fade = 0, this.angle = 270, this.speed = 10, this.color = void 0, this.computedResistance = void 0, this.velocity = {
					x: 0,
					y: 0
				}, this.position = {
					x: 0,
					y: 0
				}, this.acceleration = {
					x: 0,
					y: 0
				}, this.startingPosition = {
					x: 0,
					y: 0
				}, this.movement = "gravity", this.revolutionSpeed = 100, this.radius = 0, n.color && n.color.match(/^#/) && (n.color = this.hexToRgb(n.color)), Object.assign(this, n), this.position && (this.position = {
					x: t.x,
					y: t.y
				}), "circle" === this.movement ? this.velocity.x = this.speed : this.velocity = {
					x: Math.cos(this.angle * Math.PI / 180) * this.speed,
					y: Math.sin(this.angle * Math.PI / 180) * this.speed
				}, this.computedResistance = 1 + this.resistance / 10 * -1, this.startingPosition = function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = null != arguments[t] ? arguments[t] : {};
						t % 2 ? i(Object(n), !0).forEach((function(t) {
							s(e, t, n[t])
						})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function(t) {
							Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
						}))
					}
					return e
				}({}, this.position)
			}
			var t, n, r;
			return t = e, (n = [{
				key: "update",
				value: function(e) {
					this.acceleration.y = this.gravity * this.mass, this.velocity.x *= this.computedResistance, this.velocity.y *= this.computedResistance, this.velocity.y += this.acceleration.y * e, this.velocity.x += this.acceleration.x * e, "circle" === this.movement ? (this.radius += Math.abs(this.velocity.x), this.angle += e * this.revolutionSpeed, this.position.x = this.startingPosition.x + this.radius * Math.cos(this.angle * Math.PI / 180), this.position.y = this.startingPosition.y - this.radius * Math.sin(this.angle * Math.PI / 180)) : (this.position.x += this.velocity.x, this.position.y += this.velocity.y), this.shrink && (this.size = Math.max(0, this.size - this.shrink * e)), this.fade && (this.alpha = Math.max(0, this.alpha - this.fade * e))
				}
			}, {
				key: "hexToRgb",
				value: function(e) {
					var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
					return t ? {
						r: parseInt(t[1], 16),
						g: parseInt(t[2], 16),
						b: parseInt(t[3], 16)
					} : null
				}
			}, {
				key: "active",
				get: function() {
					return this.alpha >= .1 && this.size >= 1 && this.position.y <= this.screenHeight
				}
			}]) && c(t.prototype, n), r && c(t, r), e
		}();

		function u(e) {
			return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}

		function p(e, t) {
			var n = Object.keys(e);
			if (Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(e);
				t && (r = r.filter((function(t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				}))), n.push.apply(n, r)
			}
			return n
		}

		function f(e, t, n) {
			return t in e ? Object.defineProperty(e, t, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = n, e
		}

		function d(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
			}
		}

		function m(e, t, n) {
			return (m = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
				var r = function(e, t) {
					for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = v(e)););
					return e
				}(e, t);
				if (r) {
					var o = Object.getOwnPropertyDescriptor(r, t);
					return o.get ? o.get.call(n) : o.value
				}
			})(e, t, n || e)
		}

		function h(e, t) {
			return (h = Object.setPrototypeOf || function(e, t) {
				return e.__proto__ = t, e
			})(e, t)
		}

		function y(e) {
			var t = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
				} catch (e) {
					return !1
				}
			}();
			return function() {
				var n, r = v(e);
				if (t) {
					var o = v(this).constructor;
					n = Reflect.construct(r, arguments, o)
				} else n = r.apply(this, arguments);
				return g(this, n)
			}
		}

		function g(e, t) {
			return !t || "object" !== u(t) && "function" != typeof t ? function(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}(e) : t
		}

		function v(e) {
			return (v = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
				return e.__proto__ || Object.getPrototypeOf(e)
			})(e)
		}
		var b = function(e) {
			! function(e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						writable: !0,
						configurable: !0
					}
				}), t && h(e, t)
			}(i, e);
			var t, n, r, o = y(i);

			function i(e, t) {
				var n;
				return function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, i), t = function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = null != arguments[t] ? arguments[t] : {};
						t % 2 ? p(Object(n), !0).forEach((function(t) {
							f(e, t, n[t])
						})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach((function(t) {
							Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
						}))
					}
					return e
				}({
					size: Object(a.m)(12, 14),
					shrink: 8 + Object(a.m)(-10, 10) / 10,
					resistance: .6,
					mass: .66,
					color: "#ffffff"
				}, t), (n = o.call(this, e, t)).type = "flare", n
			}
			return t = i, (n = [{
				key: "update",
				value: function(e) {
					m(v(i.prototype), "update", this).call(this, e), this.mass = this.size / 10
				}
			}, {
				key: "render",
				value: function(e) {
					e.fillStyle = "rgba(".concat(this.color.r, ", ").concat(this.color.g, ", ").concat(this.color.b, ", ").concat(this.alpha, ")"), e.beginPath(), e.arc(this.position.x, this.position.y, this.size, 0, 2 * Math.PI, !0), e.fill()
				}
			}]) && d(t.prototype, n), r && d(t, r), i
		}(l);

		function w(e) {
			return (w = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}

		function E(e, t) {
			var n = Object.keys(e);
			if (Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(e);
				t && (r = r.filter((function(t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				}))), n.push.apply(n, r)
			}
			return n
		}

		function O(e, t, n) {
			return t in e ? Object.defineProperty(e, t, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = n, e
		}

		function S(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
			}
		}

		function _(e, t, n) {
			return (_ = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
				var r = function(e, t) {
					for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = A(e)););
					return e
				}(e, t);
				if (r) {
					var o = Object.getOwnPropertyDescriptor(r, t);
					return o.get ? o.get.call(n) : o.value
				}
			})(e, t, n || e)
		}

		function T(e, t) {
			return (T = Object.setPrototypeOf || function(e, t) {
				return e.__proto__ = t, e
			})(e, t)
		}

		function N(e) {
			var t = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
				} catch (e) {
					return !1
				}
			}();
			return function() {
				var n, r = A(e);
				if (t) {
					var o = A(this).constructor;
					n = Reflect.construct(r, arguments, o)
				} else n = r.apply(this, arguments);
				return C(this, n)
			}
		}

		function C(e, t) {
			return !t || "object" !== w(t) && "function" != typeof t ? function(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}(e) : t
		}

		function A(e) {
			return (A = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
				return e.__proto__ || Object.getPrototypeOf(e)
			})(e)
		}
		var I = function(e) {
			! function(e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						writable: !0,
						configurable: !0
					}
				}), t && T(e, t)
			}(i, e);
			var t, n, r, o = N(i);

			function i(e, t) {
				var n;
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, i);
				var r = t.size || Object(a.m)(8, 12);
				return t = function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = null != arguments[t] ? arguments[t] : {};
						t % 2 ? E(Object(n), !0).forEach((function(t) {
							O(e, t, n[t])
						})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : E(Object(n)).forEach((function(t) {
							Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
						}))
					}
					return e
				}({
					size: r,
					resistance: r / 12 - .1,
					color: "#e3882a"
				}, t), (n = o.call(this, e, t)).type = "confetti", n.tiltAngleIncrement = void 0, n.tilt = void 0, n.tiltAngle = void 0, n.tiltAngleIncrement = .07 * Math.random() + .05, n.tilt = Object(a.m)(-7, 7), n.tiltAngle = 2 * Math.PI * n.size, n
			}
			return t = i, (n = [{
				key: "update",
				value: function(e) {
					_(A(i.prototype), "update", this).call(this, e), this.position.x += Math.random() - .5, this.tiltAngle += this.tiltAngleIncrement, this.tilt = Math.sin(this.tiltAngle) * this.size
				}
			}, {
				key: "render",
				value: function(e) {
					var t = this.position.y,
						n = this.position.x + this.tilt,
						r = t + this.tilt + this.size / 2,
						o = n + this.size / 2;
					e.strokeStyle = "rgba(".concat(this.color.r, ", ").concat(this.color.g, ", ").concat(this.color.b, ", ").concat(this.alpha, ")"), e.lineWidth = this.size, e.beginPath(), e.moveTo(o, t), e.lineTo(n, r), e.stroke()
				}
			}]) && S(t.prototype, n), r && S(t, r), i
		}(l);

		function k(e) {
			return (k = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}

		function R(e, t) {
			var n = Object.keys(e);
			if (Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(e);
				t && (r = r.filter((function(t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				}))), n.push.apply(n, r)
			}
			return n
		}

		function P(e, t, n) {
			return t in e ? Object.defineProperty(e, t, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = n, e
		}

		function j(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
			}
		}

		function D(e, t, n) {
			return (D = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
				var r = function(e, t) {
					for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = U(e)););
					return e
				}(e, t);
				if (r) {
					var o = Object.getOwnPropertyDescriptor(r, t);
					return o.get ? o.get.call(n) : o.value
				}
			})(e, t, n || e)
		}

		function x(e, t) {
			return (x = Object.setPrototypeOf || function(e, t) {
				return e.__proto__ = t, e
			})(e, t)
		}

		function L(e) {
			var t = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
				} catch (e) {
					return !1
				}
			}();
			return function() {
				var n, r = U(e);
				if (t) {
					var o = U(this).constructor;
					n = Reflect.construct(r, arguments, o)
				} else n = r.apply(this, arguments);
				return M(this, n)
			}
		}

		function M(e, t) {
			return !t || "object" !== k(t) && "function" != typeof t ? function(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}(e) : t
		}

		function U(e) {
			return (U = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
				return e.__proto__ || Object.getPrototypeOf(e)
			})(e)
		}
		var F = function(e) {
			! function(e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						writable: !0,
						configurable: !0
					}
				}), t && x(e, t)
			}(i, e);
			var t, n, r, o = L(i);

			function i(e, t) {
				var n;
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, i), t = function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = null != arguments[t] ? arguments[t] : {};
						t % 2 ? R(Object(n), !0).forEach((function(t) {
							P(e, t, n[t])
						})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : R(Object(n)).forEach((function(t) {
							Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
						}))
					}
					return e
				}({
					resistance: .5,
					shrink: 8 + Object(a.m)(-20, 20) / 10
				}, t), (n = o.call(this, e, t)).type = "image", n.loaded = !1, n.rotationAngle = 0;
				var r = t.assets[Object(a.n)(Object.keys(t.assets))];
				return n.asset = new window.Image, n.asset.src = r, n.asset.addEventListener("load", (function() {
					n.size = Math.min(t.size || 35, n.asset.width), n.imageRatio = n.asset.height / n.asset.width, n.loaded = !0
				})), n.rotationSpeed = Object(a.m)(-70, 70) / 10, n
			}
			return t = i, (n = [{
				key: "update",
				value: function(e) {
					this.loaded && (D(U(i.prototype), "update", this).call(this, e), this.mass = this.size / 20, this.rotationAngle = this.rotationAngle + this.rotationSpeed * e)
				}
			}, {
				key: "render",
				value: function(e) {
					if (this.loaded) {
						e.save(), e.translate(this.position.x, this.position.y + this.size / 2), e.rotate(this.rotationAngle);
						var t = e.globalAlpha;
						1 !== this.alpha && (e.globalAlpha = this.alpha), e.drawImage(this.asset, -this.size / 2, -this.size / 2, this.size, this.size * this.imageRatio), e.globalAlpha = t, e.restore()
					}
				}
			}]) && j(t.prototype, n), r && j(t, r), i
		}(l);

		function B(e) {
			return (B = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}

		function q(e, t) {
			var n = Object.keys(e);
			if (Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(e);
				t && (r = r.filter((function(t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				}))), n.push.apply(n, r)
			}
			return n
		}

		function H(e, t, n) {
			return t in e ? Object.defineProperty(e, t, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = n, e
		}

		function G(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
			}
		}

		function V(e, t, n) {
			return (V = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
				var r = function(e, t) {
					for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = X(e)););
					return e
				}(e, t);
				if (r) {
					var o = Object.getOwnPropertyDescriptor(r, t);
					return o.get ? o.get.call(n) : o.value
				}
			})(e, t, n || e)
		}

		function z(e, t) {
			return (z = Object.setPrototypeOf || function(e, t) {
				return e.__proto__ = t, e
			})(e, t)
		}

		function W(e) {
			var t = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
				} catch (e) {
					return !1
				}
			}();
			return function() {
				var n, r = X(e);
				if (t) {
					var o = X(this).constructor;
					n = Reflect.construct(r, arguments, o)
				} else n = r.apply(this, arguments);
				return Y(this, n)
			}
		}

		function Y(e, t) {
			return !t || "object" !== B(t) && "function" != typeof t ? function(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}(e) : t
		}

		function X(e) {
			return (X = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
				return e.__proto__ || Object.getPrototypeOf(e)
			})(e)
		}
		var K = function(e) {
			! function(e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						writable: !0,
						configurable: !0
					}
				}), t && z(e, t)
			}(i, e);
			var t, n, r, o = W(i);

			function i(e, t) {
				var n;
				return function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, i), t = function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = null != arguments[t] ? arguments[t] : {};
						t % 2 ? q(Object(n), !0).forEach((function(t) {
							H(e, t, n[t])
						})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : q(Object(n)).forEach((function(t) {
							Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
						}))
					}
					return e
				}({
					size: 3,
					gravity: 3,
					resistance: .4,
					fade: .4
				}, t), (n = o.call(this, e, t)).type = "sparkle", n.width = void 0, n.height = void 0, n.hue = 1, n.hue = Object(a.m)(0, 200), n.width = Object(a.m)(n.size, n.size + 2), n.height = Object(a.m)(n.size, n.size + 2), n
			}
			return t = i, (n = [{
				key: "update",
				value: function(e) {
					V(X(i.prototype), "update", this).call(this, e), this.position.x += Object(a.m)(-6, 6) / 10
				}
			}, {
				key: "render",
				value: function(e) {
					e.fillStyle = "hsla(" + this.hue + ", 100%, " + Object(a.m)(50, 70) + "%, " + Math.max(0, this.alpha - Object(a.m)(0, 40) / 100) + ")", e.fillRect(this.position.x, this.position.y, this.width, this.height)
				}
			}]) && G(t.prototype, n), r && G(t, r), i
		}(l);

		function J(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
			}
		}

		function Q(e, t) {
			var n = Object.keys(e);
			if (Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(e);
				t && (r = r.filter((function(t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				}))), n.push.apply(n, r)
			}
			return n
		}

		function Z(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = null != arguments[t] ? arguments[t] : {};
				t % 2 ? Q(Object(n), !0).forEach((function(t) {
					$(e, t, n[t])
				})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Q(Object(n)).forEach((function(t) {
					Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
				}))
			}
			return e
		}

		function $(e, t, n) {
			return t in e ? Object.defineProperty(e, t, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = n, e
		}
		var ee = Z({
				linear: function(e, t, n, r) {
					return n * (e / r) + t
				}
			}, n(107)),
			te = {
				type: "explosion",
				duration: 0,
				spread: 20,
				count: 100,
				speed: 15,
				colors: ["#9142f3", "#27bbf6", "#68fc34", "#f15477", "#f4fb55", "#fff"],
				particle: {
					type: "sparkle"
				},
				spreadType: "random",
				durationEasing: "linear",
				linearSpreadLoops: 1
			},
			ne = function() {
				function e(t, n) {
					if (function(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, e), this.durationEasingFn = ee.linear, this.position = {
							x: 0,
							y: 0
						}, this.options = {}, this.particles = [], this.totalParticles = 0, this.spreadType = void 0, this.linearSpreadLoops = void 0, this.angleChangePerMillisecond = void 0, this.angleChangeDirection = 1, this.startAngle = void 0, this.startTime = void 0, this.angle = void 0, this.speed = void 0, this.count = void 0, this.spread = void 0, this.lastDeltaTime = 0, this.partialParticle = 0, this.position = t, this.options = Z(Z({}, te), n), this.duration = this.options.duration, this.angle = this.options.angle, this.speed = this.options.speed, this.count = Object(a.e)(this.options.count) ? Object(a.m)(this.options.count[0], this.options.count[1]) : this.options.count, this.spreadType = this.options.spreadType, this.linearSpreadLoops = this.options.linearSpreadLoops, this.spread = this.options.spread, this.options.durationEasing && (this.durationEasingFn = "function" == typeof this.options.durationEasing ? this.options.durationEasing : ee[this.options.durationEasing]), "linear" === this.spreadType) {
						this.duration && (this.angleChangePerMillisecond = this.spread * this.linearSpreadLoops / this.duration);
						var r = Object(a.e)(this.spread) ? this.spread[0] : this.spread;
						this.startAngle = this.lastAngle = this.angle - r / 2
					}
					this.duration ? this.startTime || (this.startTime = performance.now()) : this.addParticles(this.count)
				}
				var t, n, r;
				return t = e, (n = [{
					key: "addParticles",
					value: function(e) {
						this.startTime || (this.startTime = performance.now()), performance.now(), this.startTime;
						var t = performance.now() - this.lastDeltaTime,
							n = Z(Z({}, this.options), this.options.particle);
						"linear" === this.spreadType && this.duration && (n.angle = this.lastAngle + this.angleChangePerMillisecond * t * this.angleChangeDirection, 360 !== this.spread && (n.angle > this.startAngle + this.spread ? (n.angle = this.startAngle + this.spread, this.angleChangeDirection *= -1) : n.angle < this.startAngle && (n.angle = this.startAngle, this.angleChangeDirection *= -1)), this.lastAngle = n.angle);
						for (var r = 0; r < e; r++) {
							var o = Object(a.e)(this.spread) ? Object(a.m)(this.spread[0], this.spread[1]) : this.spread;
							"linear" !== this.spreadType || this.duration || (this.startAngle += o / e, n.angle = this.startAngle), "linear" !== this.spreadType && (void 0 === this.angle ? n.angle = Object(a.m)(0, 359) : n.angle = this.angle + Object(a.m)(-o / 2, o / 2)), Object(a.e)(this.speed) ? 1 === this.speed.length || this.speed.length > 2 ? n.speed = Object(a.n)(this.speed) : n.speed = Object(a.m)(this.speed[0], this.speed[1]) : n.speed = this.speed * Math.cos(Math.random() * Math.PI / 2), n.colors && Object(a.e)(n.colors) && (n.color = Object(a.n)(n.colors)), n.color && (n.color = this.colorLuminance(n.color || "#ffffff", Object(a.m)(-10, 10) / 100));
							var i = void 0;
							switch (n.type) {
								case "flare":
									i = new b(this.position, n);
									break;
								case "image":
									i = new F(this.position, n);
									break;
								case "sparkle":
									i = new K(this.position, n);
									break;
								default:
									i = new I(this.position, n)
							}
							this.particles.push(i)
						}
						this.lastDeltaTime = performance.now(), this.totalParticles += e
					}
				}, {
					key: "colorLuminance",
					value: function(e, t) {
						(e = String(e).replace(/[^0-9a-f]/gi, "")).length < 6 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]), t = t || 0;
						var n, r, o = "#";
						for (r = 0; r < 3; r++) n = parseInt(e.substr(2 * r, 2), 16), o += ("00" + (n = Math.round(Math.min(Math.max(0, n + n * t), 255)).toString(16))).substr(n.length);
						return o
					}
				}, {
					key: "update",
					value: function(e) {
						var t = performance.now() - this.startTime;
						if (this.duration && t <= this.duration && this.totalParticles <= this.count) {
							var n = this.durationEasingFn(t, 0, this.count, this.duration) - this.totalParticles;
							this.partialParticle += n, this.partialParticle >= 1 && (n = Math.floor(this.partialParticle), this.partialParticle = this.partialParticle % n, this.addParticles(n))
						}
						this.particles.forEach((function(t) {
							return t.update(e)
						}))
					}
				}, {
					key: "render",
					value: function(e) {
						this.particles.forEach((function(t) {
							return t.render(e)
						}))
					}
				}, {
					key: "active",
					get: function() {
						return !!(this.duration && this.totalParticles <= this.count) || this.particles.filter((function(e) {
							return e.active
						})).length > 0
					}
				}]) && J(t.prototype, n), r && J(t, r), e
			}();

		function re(e) {
			return (re = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}

		function oe(e, t) {
			var n = Object.keys(e);
			if (Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(e);
				t && (r = r.filter((function(t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				}))), n.push.apply(n, r)
			}
			return n
		}

		function ae(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = null != arguments[t] ? arguments[t] : {};
				t % 2 ? oe(Object(n), !0).forEach((function(t) {
					ie(e, t, n[t])
				})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : oe(Object(n)).forEach((function(t) {
					Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
				}))
			}
			return e
		}

		function ie(e, t, n) {
			return t in e ? Object.defineProperty(e, t, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = n, e
		}

		function se(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
			}
		}

		function ce(e, t, n) {
			return (ce = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
				var r = function(e, t) {
					for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = fe(e)););
					return e
				}(e, t);
				if (r) {
					var o = Object.getOwnPropertyDescriptor(r, t);
					return o.get ? o.get.call(n) : o.value
				}
			})(e, t, n || e)
		}

		function le(e, t) {
			return (le = Object.setPrototypeOf || function(e, t) {
				return e.__proto__ = t, e
			})(e, t)
		}

		function ue(e) {
			var t = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
				} catch (e) {
					return !1
				}
			}();
			return function() {
				var n, r = fe(e);
				if (t) {
					var o = fe(this).constructor;
					n = Reflect.construct(r, arguments, o)
				} else n = r.apply(this, arguments);
				return pe(this, n)
			}
		}

		function pe(e, t) {
			return !t || "object" !== re(t) && "function" != typeof t ? function(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}(e) : t
		}

		function fe(e) {
			return (fe = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
				return e.__proto__ || Object.getPrototypeOf(e)
			})(e)
		}
		var de = function(e) {
			! function(e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						writable: !0,
						configurable: !0
					}
				}), t && le(e, t)
			}(i, e);
			var t, n, r, o = ue(i);

			function i(e, t, n) {
				var r;
				! function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, i);
				var s = {
					x: e || Object(a.n)([Object(a.m)(.1 * t.screenWidth, .2 * t.screenWidth), Object(a.m)(.8 * t.screenWidth, .9 * t.screenWidth)]),
					y: t.screenHeight
				};
				return t = ae({
					speed: 15,
					size: 4,
					color: "#fff306"
				}, t), (r = o.call(this, s, t)).type = "firework", r.launchComplete = !1, r.explosionConfig = {}, r.velocity = {
					x: Object(a.m)(-2, 2),
					y: Object(a.m)(t.screenHeight / 800 * -16, t.screenHeight / 800 * -12)
				}, r.explosionConfig = ae({
					screenHeight: r.screenHeight,
					screenWidth: r.screenWidth
				}, n), r
			}
			return t = i, (n = [{
				key: "explode",
				value: function() {
					this.launchComplete = !0, this.explosion = new ne({
						x: this.position.x,
						y: this.position.y
					}, this.explosionConfig)
				}
			}, {
				key: "update",
				value: function(e) {
					if (this.launchComplete) return this.explosion.update(e);
					ce(fe(i.prototype), "update", this).call(this, e);
					var t = this.position.y < .4 * this.screenHeight && 100 * Math.random() <= this.position.y / this.screenHeight * 100 * .01;
					(this.position.y < .2 * this.screenHeight || this.velocity.y > 3 || t) && this.explode()
				}
			}, {
				key: "render",
				value: function(e) {
					if (this.launchComplete) return this.explosion.render(e);
					var t = e.createRadialGradient(this.position.x, this.position.y, .1, this.position.x, this.position.y, this.size);
					t.addColorStop(.1, "rgba(".concat(this.color.r, ", ").concat(this.color.g, ", ").concat(this.color.b, ", ").concat(this.alpha, ")")), t.addColorStop(.8, "rgba(255, 255, 255, 0.6)"), e.fillStyle = t, e.beginPath(), e.arc(this.position.x, this.position.y, this.size, 0, 2 * Math.PI, !0), e.fill()
				}
			}, {
				key: "active",
				get: function() {
					return !this.launchComplete || this.explosion.active
				}
			}]) && se(t.prototype, n), r && se(t, r), i
		}(l);

		function me() {
			return (me = Object.assign || function(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = arguments[t];
					for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
				}
				return e
			}).apply(this, arguments)
		}

		function he(e, t) {
			var n = Object.keys(e);
			if (Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(e);
				t && (r = r.filter((function(t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				}))), n.push.apply(n, r)
			}
			return n
		}

		function ye(e, t, n) {
			return t in e ? Object.defineProperty(e, t, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = n, e
		}

		function ge(e) {
			return (ge = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}

		function ve(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
			}
		}

		function be(e, t) {
			return (be = Object.setPrototypeOf || function(e, t) {
				return e.__proto__ = t, e
			})(e, t)
		}

		function we(e) {
			var t = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
				} catch (e) {
					return !1
				}
			}();
			return function() {
				var n, r = Se(e);
				if (t) {
					var o = Se(this).constructor;
					n = Reflect.construct(r, arguments, o)
				} else n = r.apply(this, arguments);
				return Ee(this, n)
			}
		}

		function Ee(e, t) {
			return !t || "object" !== ge(t) && "function" != typeof t ? Oe(e) : t
		}

		function Oe(e) {
			if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return e
		}

		function Se(e) {
			return (Se = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
				return e.__proto__ || Object.getPrototypeOf(e)
			})(e)
		}
		t.a = function(e) {
			var t, n;
			return n = t = function(t) {
				! function(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							writable: !0,
							configurable: !0
						}
					}), t && be(e, t)
				}(c, t);
				var n, r, i, s = we(c);

				function c(e) {
					var t;
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, c), (t = s.call(this, e)).delayedAnimationTimeouts = [], t.animating = !1, t.parentRef = void 0, t.canvas = void 0, t.canvasContext = void 0, t.offscreenCanvas = void 0, t.offscreenCanvasContext = void 0, t.screenWidth = 0, t.screenHeight = 0, t.lastFrameTime = 0, t.deltaTime = 0, t.particles = [], t.fireworks = [], t.delayBetweenFireworks = 1e3, t.lastFireworkLaunch = 0, t.maxActiveFireworks = 5, t.childBoundingRect = void 0, t.delayTimeout = void 0, t.componentWillUnmount = function() {
						t.stopAnimations()
					}, t.kickOffAnimations = function() {
						"now" === t.props.animate && t.initializeAnimations(), Object(a.i)(t.props.animate) && t.props.animate > 0 && (t.delayTimeout = setTimeout(t.initializeAnimations.bind(Oe(t)), t.props.animate))
					}, t.stopAnimations = function() {
						t.canvasContext && t.canvasContext.clearRect(0, 0, t.canvas.width, t.canvas.height), t.animating = !1, t.particles.length = 0, clearTimeout(t.delayTimeout), t.delayedAnimationTimeouts.forEach((function(e) {
							return clearTimeout(e)
						})), t.props.onComplete && t.props.onComplete()
					}, t.handleMouseEnter = function(e) {
						"hover" === t.props.animate && t.initializeAnimations(e)
					}, t.handleClick = function(e) {
						"click" === t.props.animate && t.initializeAnimations(e)
					}, t.createExplosion = function(e, n) {
						var r = e.angle,
							o = e.spread,
							a = {
								x: 0,
								y: 0
							};
						if ("string" == typeof e.position) {
							var i = void 0 === e.cornerOffset ? 20 : e.cornerOffset;
							"top-center" === e.position ? (a.x = Math.round(t.childBoundingRect.x + t.childBoundingRect.width / 2), a.y = t.childBoundingRect.y + i, r = e.angle || 270, o = e.spread || 25) : "top-left" === e.position ? (a.x = t.childBoundingRect.x + i, a.y = t.childBoundingRect.y + i, r = e.angle || 225, o = e.spread || 25) : "top-right" === e.position ? (a.x = t.childBoundingRect.x + t.childBoundingRect.width - i, a.y = t.childBoundingRect.y + i, r = e.angle || 315, o = e.spread || 25) : "bottom-left" === e.position ? (a.x = t.childBoundingRect.x + i, a.y = t.childBoundingRect.y + t.childBoundingRect.height - i, r = e.angle || 135, o = e.spread || 25) : "bottom-right" === e.position ? (a.x = t.childBoundingRect.x + t.childBoundingRect.width - i, a.y = t.childBoundingRect.y + t.childBoundingRect.height - i, r = e.angle || 45, o = e.spread || 25) : "center" === e.position ? (a.x = t.childBoundingRect.x + t.childBoundingRect.width / 2, a.y = t.childBoundingRect.y + t.childBoundingRect.height / 2, r = e.angle || 270, o = e.spread || 360) : "mouse" === e.position && (a.x = n.pageX, a.y = n.pageY)
						} else "object" === ge(e.position) && void 0 !== e.position.x && (a.x = e.position.x, a.y = e.position.y);
						t.particles.push(new ne(a, function(e) {
							for (var t = 1; t < arguments.length; t++) {
								var n = null != arguments[t] ? arguments[t] : {};
								t % 2 ? he(Object(n), !0).forEach((function(t) {
									ye(e, t, n[t])
								})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : he(Object(n)).forEach((function(t) {
									Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
								}))
							}
							return e
						}({
							screenWidth: t.screenWidth,
							screenHeight: t.screenHeight,
							angle: r,
							spread: o
						}, e)))
					}, t.createFirework = function(e, n) {
						t.delayBetweenFireworks = e.launchDelay || t.delayBetweenFireworks, t.maxActiveFireworks = e.maxActive || t.maxActiveFireworks;
						for (var r = 0; r < e.count; r++) {
							var o = e.explosions ? Object(a.n)(e.explosions) : {
									type: "confetti",
									count: 100
								},
								i = new de(0, {
									screenWidth: t.screenWidth,
									screenHeight: t.screenHeight
								}, o);
							t.fireworks.push(i)
						}
					}, t.initializeAnimations = function(e) {
						if (clearTimeout(t.delayTimeout), t.canvasContext = t.canvas.getContext("2d"), t.offscreenCanvasContext = t.offscreenCanvas.getContext("2d"), t.props.render && "firework" !== t.props.animations[0].type ? (t.canvas.width = t.offscreenCanvas.width = t.screenWidth = window.document.body.scrollWidth, t.canvas.height = t.offscreenCanvas.height = t.screenHeight = window.document.body.scrollHeight) : (t.canvas.width = t.offscreenCanvas.width = t.screenWidth = window.document.body.clientWidth, t.canvas.height = t.offscreenCanvas.height = t.screenHeight = window.document.body.clientHeight), t.lastFrameTime = Date.now(), t.parentRef.current) {
							var n = t.parentRef.current.getBoundingClientRect(),
								r = getComputedStyle(t.parentRef.current, null);
							t.childBoundingRect = {
								x: Math.ceil(n.left + window.scrollX),
								y: Math.ceil(n.top + window.scrollY),
								width: Math.ceil(n.width + parseInt(r.borderLeftWidth.replace("px", "")) + parseInt(r.borderRightWidth.replace("px", ""))),
								height: Math.ceil(n.height + parseInt(r.borderTopWidth.replace("px", "")) + parseInt(r.borderBottomWidth.replace("px", "")))
							}, t.props.behindElement && (t.parentRef.current.style.position = "relative", t.parentRef.current.style.zIndex = Math.max(parseInt(t.parentRef.current.style.zIndex || 0), t.canvas.style.zIndex + 1))
						}
						t.props.animations.forEach((function(n) {
							var r = function() {
								"firework" === n.type ? t.createFirework(n, e) : t.createExplosion(n, e), t.animating || (t.animating = !0, t.gameLoop())
							};
							n.delay ? t.delayedAnimationTimeouts.push(setTimeout(r, n.delay || 0)) : r()
						}))
					}, t.gameLoop = function() {
						t.animating && (t.deltaTime = (Date.now() - t.lastFrameTime) / 1e3, t.lastFrameTime = Date.now(), t.launchFirework(), t.offscreenCanvasContext.clearRect(0, 0, t.screenWidth, t.screenHeight), t.particles.forEach((function(e) {
							e.update(t.deltaTime), e.render(t.offscreenCanvasContext)
						})), t.canvasContext.clearRect(0, 0, t.screenWidth, t.screenHeight), t.canvasContext.drawImage(t.offscreenCanvas, 0, 0), t.particles = t.particles.filter((function(e) {
							return e.active
						})), t.particles.length ? window.requestAnimationFrame(t.gameLoop.bind(Oe(t))) : t.stopAnimations())
					}, t.launchFirework = function() {
						t.fireworks.length > 0 && Date.now() - t.lastFireworkLaunch > t.delayBetweenFireworks && t.particles.filter((function(e) {
							return "firework" === e.type
						})).length <= t.maxActiveFireworks && (t.particles.push(t.fireworks.pop()), t.lastFireworkLaunch = Date.now())
					}, t.parentRef = o.a.createRef();
					var n = document.createElement("canvas");
					return n.style.top = "0", n.style.left = "0", n.style.pointerEvents = "none", n.style.zIndex = "9999", e.render ? n.style.position = "absolute" : n.style.position = "fixed", document.body.appendChild(n), t.canvas = n, t.offscreenCanvas = document.createElement("canvas"), e.animations.forEach((function(n) {
						n.particle && t.preloadAssets(n.particle.assets), n.explosions && e.animations.forEach((function(e) {
							return t.preloadAssets(e.assets)
						}))
					})), t
				}
				return n = c, (r = [{
					key: "componentDidMount",
					value: function() {
						this.kickOffAnimations()
					}
				}, {
					key: "componentDidUpdate",
					value: function(e, t, n) {
						!e.animate && this.props.animate && this.kickOffAnimations(), e.animate && !this.props.animate && this.stopAnimations()
					}
				}, {
					key: "preloadAssets",
					value: function(e) {
						e && e.forEach((function(e) {
							(new Image).src = e
						}))
					}
				}, {
					key: "render",
					value: function() {
						return o.a.createElement(e, me({
							parentRef: this.parentRef,
							onMouseEnter: this.handleMouseEnter,
							onClick: this.handleClick
						}, this.props))
					}
				}]) && ve(n.prototype, r), i && ve(n, i), c
			}(o.a.PureComponent), t.defaultProps = {
				animate: !1,
				animations: [],
				launchCount: 0,
				burstsOnClick: 10,
				behindElement: !1
			}, n
		}
	},
	68: function(e, t, n) {
		"use strict";
		n.d(t, "b", (function() {
			return r
		}));
		var r = {};
		n.r(r), n.d(r, "getLeaderboard", (function() {
			return g
		}));
		var o = "nitrotype/leaderboard/SET_LEADERBOARD";

		function a(e, t) {
			var n = Object.keys(e);
			if (Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(e);
				t && (r = r.filter((function(t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				}))), n.push.apply(n, r)
			}
			return n
		}

		function i(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = null != arguments[t] ? arguments[t] : {};
				t % 2 ? a(Object(n), !0).forEach((function(t) {
					s(e, t, n[t])
				})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function(t) {
					Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
				}))
			}
			return e
		}

		function s(e, t, n) {
			return t in e ? Object.defineProperty(e, t, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = n, e
		}
		var c = {
				season: {},
				monthly: {},
				weekly: {},
				daily: {}
			},
			l = {
				hof: {},
				points: {
					teams: c,
					racer: c
				}
			},
			u = function(e, t) {
				if ("hof" === t.board) return i(i({}, e), {}, {
					hof: t.data
				});
				var n = {};
				return n = "season" !== t.time ? t.data : i(i({}, e[t.board][t.grouping].season), {}, s({}, t.seasonID, t.data)), i(i({}, e), {}, s({}, t.board, i(i({}, e[t.board]), {}, s({}, t.grouping, i(i({}, e[t.board][t.grouping]), {}, s({}, t.time, n))))))
			},
			p = function() {
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case o:
						return u(e, t.payload)
				}
				return e
			},
			f = function(e) {
				return {
					type: o,
					payload: e
				}
			},
			d = n(2);

		function m(e, t) {
			var n = Object.keys(e);
			if (Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(e);
				t && (r = r.filter((function(t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				}))), n.push.apply(n, r)
			}
			return n
		}

		function h(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = null != arguments[t] ? arguments[t] : {};
				t % 2 ? m(Object(n), !0).forEach((function(t) {
					y(e, t, n[t])
				})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : m(Object(n)).forEach((function(t) {
					Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
				}))
			}
			return e
		}

		function y(e, t, n) {
			return t in e ? Object.defineProperty(e, t, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = n, e
		}
		var g = function(e, t, n, r) {
			var o = {
				board: e,
				time: t,
				grouping: n,
				seasonID: r
			};
			return function(e) {
				var n = "?time=".concat(t);
				Object(d.b)("/api/v2/leaderboards" + n, {
					method: "get"
				}, e).then((function(t) {
					e(f(h({
						data: t
					}, o)))
				}), (function(t) {
					e(f(h({
						data: t
					}, o)))
				}))
			}
		};
		n(85), t.a = p
	},
	7: function(e, t, n) {
		"use strict";
		n(4);
		var r = n(31);

		function o(e, t) {
			var n = Object.keys(e);
			if (Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(e);
				t && (r = r.filter((function(t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				}))), n.push.apply(n, r)
			}
			return n
		}

		function a(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = null != arguments[t] ? arguments[t] : {};
				t % 2 ? o(Object(n), !0).forEach((function(t) {
					i(e, t, n[t])
				})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function(t) {
					Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
				}))
			}
			return e
		}

		function i(e, t, n) {
			return t in e ? Object.defineProperty(e, t, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = n, e
		}
		var s = ["id", "gaId", "email", "accountType", "membership", "inClass", "accountAge", "logins", "level", "averageSpeed", "averageAccuracy", "team", "teamRole", "friends", "money", "moneySpent", "racesPlayed", "longestSession", "currentStreak", "lastRace", "raceSounds", "firstPlaceWins", "secondPlaceWins", "thirdPlaceWins", "playTime", "totalCars", "soldCars", "currentCar", "nitros", "nitrosUsed", "mysteryBoxes", "eventCar", "eventActive", "organization", "loggedIn", "lastLogin", "splitTestId", "accountRole", "classCount", "classLanguages", "curriculumLanguages", "lastLogin", "studentCount"],
			c = ["dlv-gtm-cd-friends-last-login", "dlv-gtm-cd-friends-last-activity", "dlv-gtm-cd-friends-races-played", "dlv-gtm-cd-friends-membership", "dlv-gtm-cd-friends-time-as-friends", "dlv-gtm-cd-friends-account-banned", "dlv-gtm-cd-friends-accepted-count", "dlv-gtm-cd-friends-ignored-count", "dlv-gtm-cd-garage-car", "dlv-gtm-cd-garage-paint-color", "dlv-gtm-cd-settings-updated-fields", "dlv-gtm-cd-team-motd-last-updated", "dlv-gtm-cd-achievement-time-to-claim", "dlv-gtm-cd-leaderboard-active-tab", "dlv-gtm-cd-leaderboard-active-season", "dlv-gtm-cd-racing-race-place", "dlv-gtm-cd-racing-race-type", "dlv-gtm-cd-racing-nitros-used", "dlv-gtm-cd-racing-race-speed", "dlv-gtm-cd-racing-race-accuracy", "dlv-gtm-cd-racing-friends-count", "dlv-gtm-cd-racing-bot-count", "dlv-gtm-cd-racing-error-type", "dlv-gtm-cd-racing-league", "dlv-gtm-cd-racing-lesson-id", "dlv-gtm-cd-ad-network", "dlv-gtm-cd-ad-count"],
			l = {
				trackSampledEvents: !1,
				initialize: function(e) {
					var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					this.trackSampledEvents = t, e.userSampled = t ? "yes" : "no", window.dataLayer = window.dataLayer || [], e.v = 3;
					for (var n = 0, r = s.length; n < r; n++) void 0 === e[s[n]] && (e[s[n]] = "(page:undefined)");
					var o = {
						"page.user": e
					};
					window.dataLayer.push(o), localStorage.showGTM && console.log("Tag Manager Custom Dimensions", "page.user", o)
				},
				trackEvent: function(e, t, n) {
					var r, o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
					if ("production" !== window.NTGLOBALS.ENV || o || this.trackSampledEvents) {
						var a = {
							event: "dlv-gtm-trigger",
							"dlv-gtm-variable-category": e,
							"dlv-gtm-variable-action": t,
							"dlv-gtm-variable-label": n
						};
						this.setupGlobalDimensions(a), null === (r = window.dataLayer) || void 0 === r || r.push(a), localStorage.showGTM && console.log("Tag Manager Event", a)
					}
				},
				ecommerceEvent: function(e, t, n) {
					var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "USD",
						o = {
							event: "ecommerce.purchase",
							ecommerce: {
								v: 11,
								currencyCode: r,
								purchase: {
									products: n = n.map((function(e) {
										return a({
											v: 11
										}, e)
									})),
									actionField: {
										id: e,
										revenue: t
									}
								}
							}
						};
					window.dataLayer.push(o), localStorage.showGTM && console.log("Tag Manager eCommerce Event", o)
				},
				pageViewEvent: function() {
					var e = {
						event: "dlv-gtm-pageview"
					};
					this.setupGlobalDimensions(e), window.dataLayer.push(e), localStorage.showGTM && console.log("Tag Manager Page View", e)
				},
				setupGlobalDimensions: function() {
					var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
					window.__adNetwork && (t["dlv-gtm-cd-ad-network"] = window.__adNetwork, t["dlv-gtm-cd-ad-count"] = null === (e = r.a.requestedUnits) || void 0 === e ? void 0 : e.length);
					for (var n = 0, o = c.length; n < o; n++) void 0 === t[c[n]] && (t[c[n]] = "(page:undefined)");
					return t
				}
			};
		t.a = l
	},
	70: function(e, t, n) {
		"use strict";
		n.r(t), n.d(t, "getDealership", (function() {
			return f
		})), n.d(t, "getUserProducts", (function() {
			return d
		})), n.d(t, "getShopProducts", (function() {
			return m
		})), n.d(t, "getProductByTypeAndID", (function() {
			return h
		}));
		var r = n(4);

		function o(e) {
			return function(e) {
				if (Array.isArray(e)) return c(e)
			}(e) || function(e) {
				if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
			}(e) || s(e) || function() {
				throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
			}()
		}

		function a(e, t) {
			return function(e) {
				if (Array.isArray(e)) return e
			}(e) || function(e, t) {
				if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
				var n = [],
					r = !0,
					o = !1,
					a = void 0;
				try {
					for (var i, s = e[Symbol.iterator](); !(r = (i = s.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
				} catch (e) {
					o = !0, a = e
				} finally {
					try {
						r || null == s.return || s.return()
					} finally {
						if (o) throw a
					}
				}
				return n
			}(e, t) || s(e, t) || function() {
				throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
			}()
		}

		function i(e, t) {
			var n;
			if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
				if (Array.isArray(e) || (n = s(e)) || t && e && "number" == typeof e.length) {
					n && (e = n);
					var r = 0,
						o = function() {};
					return {
						s: o,
						n: function() {
							return r >= e.length ? {
								done: !0
							} : {
								done: !1,
								value: e[r++]
							}
						},
						e: function(e) {
							throw e
						},
						f: o
					}
				}
				throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
			}
			var a, i = !0,
				c = !1;
			return {
				s: function() {
					n = e[Symbol.iterator]()
				},
				n: function() {
					var e = n.next();
					return i = e.done, e
				},
				e: function(e) {
					c = !0, a = e
				},
				f: function() {
					try {
						i || null == n.return || n.return()
					} finally {
						if (c) throw a
					}
				}
			}
		}

		function s(e, t) {
			if (e) {
				if ("string" == typeof e) return c(e, t);
				var n = Object.prototype.toString.call(e).slice(8, -1);
				return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? c(e, t) : void 0
			}
		}

		function c(e, t) {
			(null == t || t > e.length) && (t = e.length);
			for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
			return r
		}

		function l(e, t) {
			var n = Object.keys(e);
			if (Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(e);
				t && (r = r.filter((function(t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				}))), n.push.apply(n, r)
			}
			return n
		}

		function u(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = null != arguments[t] ? arguments[t] : {};
				t % 2 ? l(Object(n), !0).forEach((function(t) {
					p(e, t, n[t])
				})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function(t) {
					Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
				}))
			}
			return e
		}

		function p(e, t, n) {
			return t in e ? Object.defineProperty(e, t, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = n, e
		}

		function f(e, t, n, r, o, a, i, s, c) {
			var l = t.find((function(t) {
					return t.dealershipID === e
				})),
				p = u(u({
					dealershipID: l.dealershipID
				}, l), {}, {
					items: []
				});
			return "default" === l.assetKey ? (p.isShop = !0, p) : (p.items = l.items.map((function(e) {
				if ("car" === e.type) {
					var t = n.find((function(t) {
						return t.carID === e.id
					}));
					if (!t) return;
					var l = o(e.id),
						f = !!s.find((function(t) {
							return t[0] === e.id
						})),
						d = i === e.id,
						m = e.longDescription || t.longDescription || "Available for purchase at ".concat(p.name),
						h = e.shortDescription || t.shortDescription || "";
					return u(u(u(u({}, e), l), t), {}, {
						owned: f,
						equipped: d,
						isDealershipItem: !0,
						longDescription: m,
						shortDescription: h
					})
				}
				var y = r.find((function(t) {
					return t.lootID === e.id
				}));
				if (y) {
					var g = a(e.id),
						v = !!c.find((function(t) {
							return t.lootID === e.id
						})),
						b = !!c.find((function(t) {
							return t.lootID === e.id && t.equipped
						})),
						w = e.longDescription || y.longDescription || "Available for purchase at ".concat(p.name),
						E = e.shortDescription || y.shortDescription || "";
					return u(u(u(u({}, e), g), y), {}, {
						owned: v,
						equipped: b,
						isDealershipItem: !0,
						longDescription: w,
						shortDescription: E
					})
				}
			})).filter((function(e) {
				return e
			})).sort((function(e, t) {
				return e.price - t.price
			})), p)
		}
		var d = function(e, t) {
				var n, r = {
						cars: [],
						title: [],
						sticker: []
					},
					o = i(e);
				try {
					for (o.s(); !(n = o.n()).done;) {
						var s = a(n.value, 2),
							c = s[0];
						"owned" === s[1] && r.cars.push(c)
					}
				} catch (e) {
					o.e(e)
				} finally {
					o.f()
				}
				var l, u = i(t);
				try {
					for (u.s(); !(l = u.n()).done;) {
						var p = l.value,
							f = p.lootID,
							d = p.type,
							m = r[d];
						m ? m.push(f) : console.warn("No product category for ".concat(d, " was found"))
					}
				} catch (e) {
					u.e(e)
				} finally {
					u.f()
				}
				return r
			},
			m = function(e, t, n, a, i, s) {
				for (var c = function() {
						var e = location.search.split("d=")[1];
						if (!e) return Math.floor(Date.now() / 1e3);
						var t = e.split("-"),
							n = new Date;
						return Math.floor(new Date(parseInt(t[0]), parseInt(t[1]) - 1, parseInt(t[2]), n.getHours(), n.getMinutes(), n.getSeconds()).valueOf() / 1e3)
					}(), l = o(Object(r.b)(Object(r.d)(e.filter((function(e) {
						return e.startStamp <= c && e.expiration > c
					})).map((function(e) {
						var r;
						return null === (r = e.items) || void 0 === r ? void 0 : r.map((function(r) {
							var o, a = "loot" === r.type ? n.find((function(e) {
								return e.lootID === r.id
							})) : t.find((function(e) {
								return e.carID === r.id
							}));
							if (a) return {
								id: r.id,
								srlID: r.srlID,
								startStamp: e.startStamp,
								expiration: Math.floor(1e3 * e.expiration),
								name: a.name,
								src: null === (o = a.options) || void 0 === o ? void 0 : o.src,
								shortDescription: r.shortDescription || a.shortDescription,
								longDescription: r.longDescription || a.longDescription,
								price: r.price || a.price,
								featured: "featured" === e.category,
								type: "loot" === r.type ? a.type : r.type,
								isLoot: "loot" === r.type
							};
							console.warn("Shop item missing!", r)
						}))
					}))))), p = function(e) {
						var t = l[e],
							n = !1,
							r = !1;
						s && i && ("car" === t.type ? (n = !!i.find((function(e) {
							return e[0] === t.id
						})), r = a === t.id) : t.isLoot && (n = !!s.find((function(e) {
							return e.lootID === t.id
						})), r = !!s.find((function(e) {
							return e.lootID === t.id && e.equipped
						})))), l[e] = u(u({}, t), {}, {
							owned: n,
							equipped: r
						})
					}, f = 0; f < l.length; f++) p(f);
				return l
			},
			h = function(e, t, n, r, o, a, i, s) {
				return m(e, t, n, r, o, a).find((function(e) {
					return e.type === i && e.id === s
				}))
			}
	},
	71: function(e, t, n) {
		"use strict";
		var r = n(0),
			o = n.n(r),
			a = (n(1), n(3)),
			i = n.n(a);

		function s(e) {
			return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}

		function c(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
			}
		}

		function l(e, t) {
			return (l = Object.setPrototypeOf || function(e, t) {
				return e.__proto__ = t, e
			})(e, t)
		}

		function u(e) {
			var t = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
				} catch (e) {
					return !1
				}
			}();
			return function() {
				var n, r = f(e);
				if (t) {
					var o = f(this).constructor;
					n = Reflect.construct(r, arguments, o)
				} else n = r.apply(this, arguments);
				return p(this, n)
			}
		}

		function p(e, t) {
			return !t || "object" !== s(t) && "function" != typeof t ? function(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}(e) : t
		}

		function f(e) {
			return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
				return e.__proto__ || Object.getPrototypeOf(e)
			})(e)
		}
		var d = function(e) {
			! function(e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						writable: !0,
						configurable: !0
					}
				}), t && l(e, t)
			}(s, e);
			var t, n, r, a = u(s);

			function s(e) {
				var t;
				return function(e, t) {
					if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
				}(this, s), (t = a.call(this, e)).adNetwork = void 0, t._adRef = o.a.createRef(), t.onReportAd = function() {
					if (t.requiresReportAdButton) {
						var e = document.querySelector(".adl-report-ad-container button");
						null == e || e.click()
					} else console.warn("No reporting action specified for ".concat(t.adNetwork))
				}, t.enableAds = function() {
					if (s.enabledAds && Object.keys(s.enabledAds).length) return !0;
					var e = window.innerWidth,
						n = t.props.page,
						r = t.props.adUnits[n],
						o = {};
					if (!r) return !1;
					if (Object.keys(r).forEach((function(t) {
							var n = r[t];
							if (1 === n.length) {
								var a = n[0];
								(a.minWidth && a.minWidth <= e || !a.minWidth) && (o[t] = a)
							} else {
								n = n.sort((function(e, t) {
									var n = e.minWidth || 0;
									return (t.minWidth || 0) - n
								}));
								var i = null;
								n.forEach((function(t) {
									!i && t.minWidth && t.minWidth <= e ? i = t : t || t.minWidth || (i = t)
								})), o[t] = i
							}
						})), !o || !Object.keys(o).length) return !1;
					if ("local" === t.props.env || "playwire" === t.adNetwork || "proper" === t.adNetwork || "vuukle" === t.adNetwork) return s.enabledAds = o, !0;
					if ("freestar" === t.adNetwork) {
						var a = Object.keys(o);
						return freestar.config.enabled_slots = a.map((function(e) {
							return !!o[e] && o[e].id
						})).filter(Boolean), s.enabledAds = o, !0
					}
					if ("google" === t.adNetwork) {
						var i, c = Object.keys(o);
						return null === (i = window.googletag) || void 0 === i || i.cmd.push((function() {
							var e, t;
							c.forEach((function(e) {
								var t, n, r = o[e];
								if (r) {
									var a = null === (t = window.googletag) || void 0 === t ? void 0 : t.defineSlot(r.slot, [r.width, r.height], r.id).addService(null === (n = window.googletag) || void 0 === n ? void 0 : n.pubads());
									"?refresh=test" === location.search && "/35254017/NT_refresh_test_970x90_Control" === r.slot && setTimeout((function() {
										var e;
										null === (e = window.googletag) || void 0 === e || e.cmd.push((function() {
											var e;
											null === (e = window.googletag) || void 0 === e || e.pubads().refresh([a])
										}))
									}), 3e4)
								}
							})), null === (e = window.googletag) || void 0 === e || e.pubads().enableSingleRequest(), null === (t = window.googletag) || void 0 === t || t.enableServices()
						})), s.enabledAds = o, !0
					}
					if ("pubgalaxy" === t.adNetwork) {
						if (s.enabledAds = o, "race" !== t.props.page) {
							var l = new Event("pg_refresh");
							window.pgRefreshAllowed = !0, window.dispatchEvent(l)
						}
						return !0
					}
					return !1
				}, e.adUnits ? (t.adNetwork = window.__adNetwork, s.requestedUnits.push(t.props.unit), t.enableAds(), t) : p(t)
			}
			return t = s, (n = [{
				key: "requiresReportAdButton",
				get: function() {
					return ["proper", "freestar", "playwire"].includes(this.adNetwork) && "layoutLeft" === this.props.unit
				}
			}, {
				key: "componentDidMount",
				value: function() {
					var e = this;
					"production" === this.props.env && s.enabledAds && Object.keys(s.enabledAds).length && setTimeout((function() {
						if ("playwire" === e.adNetwork) {
							var t;
							if (s.playwireComplete) return;
							s.playwireComplete = !0;
							var n = function() {
								var e = Object.keys(s.enabledAds).filter((function(e) {
									return s.requestedUnits.includes(e) && s.enabledAds[e]
								})).map((function(e) {
									return {
										selectorId: s.enabledAds[e].id,
										type: s.enabledAds[e].unit
									}
								}));
								window.tyche.addUnits(e).then((function() {
									window.tyche.displayUnits(), console.log("Playwire displayUnits called")
								})).catch((function(e) {
									console.error("Playwire error", e)
								}))
							};
							null !== (t = window.tyche) && void 0 !== t && t.addUnits ? (console.log("Playwire adUnits function ready.  Manually calling onReady()"), n()) : window.tyche && (window.tyche.onReady = n)
						} else if ("proper" === e.adNetwork) {
							if (s.properComplete) return;
							s.properComplete = !0
						} else if ("freestar" === e.adNetwork) freestar.queue.push((function() {
							var t;
							e._adRef.current && (null === (t = window.googletag) || void 0 === t || t.display(e._adRef.current))
						}));
						else if ("vuukle" === e.adNetwork) {
							var r, o;
							null === (r = window.vuuklehb) || void 0 === r || null === (o = r.que) || void 0 === o || o.push((function() {
								var t;
								null === (t = window.vuuklehb) || void 0 === t || t.vInitSlot(e._adRef.current.id)
							}))
						} else if ("google" === e.adNetwork) {
							var a;
							null === (a = window.googletag) || void 0 === a || a.cmd.push((function() {
								var t;
								e._adRef.current && (null === (t = window.googletag) || void 0 === t || t.display(e._adRef.current))
							}))
						}
					}), 0)
				}
			}, {
				key: "shouldComponentUpdate",
				value: function(e, t, n) {
					return e.unit !== this.props.unit
				}
			}, {
				key: "renderReportAdButton",
				value: function() {
					return this.requiresReportAdButton ? o.a.createElement("div", {
						className: "nt-report-ad btn btn--compact2 btn--dark cup",
						onClick: this.onReportAd
					}, "Report Ad") : null
				}
			}, {
				key: "render",
				value: function() {
					if (!s.enabledAds || !Object.keys(s.enabledAds).length) return null;
					var e = s.enabledAds[this.props.unit];
					if (!e) return null;
					var t, n, r, a = i()("ad", (t = {}, n = "ad--".concat(this.props.adStyle), r = this.props.adStyle, n in t ? Object.defineProperty(t, n, {
							value: r,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : t[n] = r, t), this.props.className),
						c = {
							width: "".concat(e.width, "px"),
							height: "".concat(e.height, "px")
						};
					return "production" === this.props.env ? o.a.createElement("div", {
						className: a
					}, this.renderReportAdButton(), o.a.createElement("div", {
						className: "ad--container"
					}, o.a.createElement("div", {
						style: c,
						"data-refresh-time": "race" === this.props.page ? -1 : 30,
						id: e.id,
						ref: this._adRef
					}))) : o.a.createElement("div", {
						className: a
					}, o.a.createElement("div", {
						className: "ad--container"
					}, o.a.createElement("div", {
						style: c
					}, o.a.createElement("aside", null, o.a.createElement("a", {
						className: "link link--bare"
					}, o.a.createElement("img", {
						className: "db",
						src: "/dist/site/images/placeholders/ad-".concat(e.width, "x").concat(e.height, ".png")
					}))))))
				}
			}]) && c(t.prototype, n), r && c(t, r), s
		}(o.a.Component);
		d.enabledAds = void 0, d.playwireComplete = !1, d.properComplete = !1, d.requestedUnits = [], t.a = d
	},
	72: function(e, t, n) {
		"use strict";
		n.d(t, "a", (function() {
			return o
		}));
		var r = n(0);

		function o(e) {
			return Object(r.useEffect)((function() {
				if (e.responsive) {
					var t;
					document.body.classList.add("is-responsive"), e.responsiveClass && document.body.classList.add(e.responsiveClass);
					var n = document.createElement("meta");
					n.setAttribute("name", "viewport"), n.setAttribute("content", "width=device-width, initial-scale=1"), null === (t = document.head) || void 0 === t || t.appendChild(n)
				}
			}), []), e.children
		}
	},
	73: function(e, t, n) {
		"use strict";
		n.d(t, "b", (function() {
			return r
		}));
		var r = {};
		n.r(r), n.d(r, "resetPassword", (function() {
			return s
		}));
		n(62);
		var o = {},
			a = function() {
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o;
				return e
			},
			i = n(2),
			s = function(e, t, n, r) {
				return function(o) {
					Object(i.b)("/api/v2/auth/reset-password/change", {
						method: "post",
						apiScope: "resetPassword",
						params: {
							newPassword: e,
							newPassword2: t,
							userID: n,
							hash: r
						}
					}, o).then((function() {}))
				}
			};
		n(87), t.a = a
	},
	74: function(e, t, n) {
		"use strict";
		var r = n(6),
			o = n(0),
			a = n.n(o),
			i = (n(1), n(3)),
			s = n.n(i),
			c = n(55),
			l = n(24);

		function u(e, t) {
			return function(e) {
				if (Array.isArray(e)) return e
			}(e) || function(e, t) {
				if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
				var n = [],
					r = !0,
					o = !1,
					a = void 0;
				try {
					for (var i, s = e[Symbol.iterator](); !(r = (i = s.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
				} catch (e) {
					o = !0, a = e
				} finally {
					try {
						r || null == s.return || s.return()
					} finally {
						if (o) throw a
					}
				}
				return n
			}(e, t) || function(e, t) {
				if (!e) return;
				if ("string" == typeof e) return p(e, t);
				var n = Object.prototype.toString.call(e).slice(8, -1);
				"Object" === n && e.constructor && (n = e.constructor.name);
				if ("Map" === n || "Set" === n) return Array.from(e);
				if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return p(e, t)
			}(e, t) || function() {
				throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
			}()
		}

		function p(e, t) {
			(null == t || t > e.length) && (t = e.length);
			for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
			return r
		}
		var f = document.createElement("canvas"),
			d = f.getContext("2d"),
			m = d.createLinearGradient(0, 0, 0, 200);
		m.addColorStop(0, "rgba(0,0,0,0)"), m.addColorStop(1, "rgba(0,0,0,0.3)");
		var h = {
				add: "#d31b1b",
				subtract: "#1771d4",
				multiply: "#66d00b",
				divide: "#7613d7",
				fraction: "#ad2870",
				count: "#e97400",
				default: "#516468"
			},
			y = {
				add: function(e) {
					e.fillText("+", 0, 0)
				},
				subtract: function(e) {
					e.fillText("-", 0, 0)
				},
				multiply: function(e) {
					e.fillText("×", 0, 0)
				},
				divide: function(e) {
					e.fillText("÷", 0, 0)
				},
				fraction: function(e) {
					e.fillText("⅓", 0, 0)
				},
				default: function(e) {
					e.fillText("?", 0, 0)
				},
				count: function(e) {
					e.translate(-13.5, -54);
					for (var t = 0; t < 9; t++) {
						var n = t % 3 - 1,
							r = 0 | t / 3;
						e.fillRect(27 * n * 1.2, 27 * r * 1.2, 27, 27)
					}
				}
			};

		function g(e) {
			var t = h.default,
				n = y.default;
			return [
				[/(fractions?)/i, "fraction"],
				[/(division|divide)/i, "divide"],
				[/(multiply|multiplication)/i, "multiply"],
				[/(subtraction|subtract)/i, "subtract"],
				[/(addition|add)/i, "add"],
				[/(counting|count)/i, "count"]
			].forEach((function(r) {
				var o = u(r, 2),
					a = o[0],
					i = o[1];
				a.test(e.shortDescription) && (t = h[i], n = y[i])
			})), f.width = 300, f.height = 200, [t, m].forEach((function(e) {
				d.fillStyle = e, d.fillRect(0, 0, f.width, f.height)
			})), d.font = "bold 200px Montserrat", d.textAlign = "center", d.textBaseline = "middle", d.fillStyle = "white", d.globalAlpha = .3, d.translate(.6 * f.width, .5 * f.height), d.rotate(-25), n(d, e), {
				background: "url(".concat(f.toDataURL(), ")")
			}
		}

		function v(e) {
			return (v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}

		function b(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function w(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
			}
		}

		function E(e, t) {
			return (E = Object.setPrototypeOf || function(e, t) {
				return e.__proto__ = t, e
			})(e, t)
		}

		function O(e) {
			var t = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
				} catch (e) {
					return !1
				}
			}();
			return function() {
				var n, r = _(e);
				if (t) {
					var o = _(this).constructor;
					n = Reflect.construct(r, arguments, o)
				} else n = r.apply(this, arguments);
				return S(this, n)
			}
		}

		function S(e, t) {
			return !t || "object" !== v(t) && "function" != typeof t ? function(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}(e) : t
		}

		function _(e) {
			return (_ = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
				return e.__proto__ || Object.getPrototypeOf(e)
			})(e)
		}
		var T = function(e) {
				! function(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							writable: !0,
							configurable: !0
						}
					}), t && E(e, t)
				}(i, e);
				var t, n, r, o = O(i);

				function i() {
					var e;
					b(this, i);
					for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
					return (e = o.call.apply(o, [this].concat(n))).flagRef = a.a.createRef(), e.state = {
						selectedLessonID: null
					}, e.onSelectProblemType = function(t) {
						var n = t.target.closest("[data-lesson-id]"),
							r = parseInt(n.getAttribute("data-lesson-id"));
						e.setState({
							selectedLessonID: r
						})
					}, e.onCommitSelectedMathProblemType = function() {
						var t = e.state.selectedLessonID;
						t && e.props.onSelectMathProblemType(t)
					}, e.renderProblemTypes = function() {
						var t = e.props.lessons,
							n = e.state.selectedLessonID;
						return t.map((function(t) {
							var r = t.lessonID,
								o = t.shortDescription,
								i = t.subtitle,
								c = t.longDescription,
								l = t.tags,
								u = s()("math-problem-type-selector--problem-type", {
									selected: t.lessonID === n,
									"with-subtitle": !!i
								}),
								p = g(t);
							return a.a.createElement("div", {
								className: u,
								key: r,
								onClick: e.onSelectProblemType,
								"data-lesson-id": r,
								style: p
							}, a.a.createElement("div", {
								className: "math-problem-type-selector--problem-type--tags"
							}, null == l ? void 0 : l.map((function(e) {
								return a.a.createElement("div", {
									key: "tag_".concat(e)
								}, e)
							}))), a.a.createElement("div", {
								className: "math-problem-type-selector--problem-type--title"
							}, o), !!i && a.a.createElement("div", {
								className: "math-problem-type-selector--problem-type--subtitle"
							}, i), a.a.createElement("div", {
								className: "math-problem-type-selector--problem-type--desc"
							}, c))
						}))
					}, e.renderPlayAgainHeader = function() {
						return a.a.createElement(a.a.Fragment, null, a.a.createElement("h2", null, "PLAY AGAIN?"), a.a.createElement("h3", null, "Select a Problem Type"))
					}, e.renderDefaultHeader = function() {
						return a.a.createElement("h2", null, "Select a Problem Type")
					}, e
				}
				return t = i, (n = [{
					key: "componentDidMount",
					value: function() {
						if (this.flag = new c.a(this.flagRef.current, {
								cols: 14,
								opacity: .3
							}), this.flag.start(), this.isPlayAgain || this.props.selectedLessonID) {
							var e = this.props,
								t = e.selectedLessonID,
								n = e.lessons;
							t || (t = n[0].lessonID), this.setState({
								selectedLessonID: t
							})
						}
					}
				}, {
					key: "isPlayAgain",
					get: function() {
						return "play-again" === this.props.type
					}
				}, {
					key: "render",
					value: function() {
						var e = this.state.selectedLessonID,
							t = this.isPlayAgain ? this.renderPlayAgainHeader() : this.renderDefaultHeader(),
							n = s()("btn btn--xl btn--wide", {
								"btn--primary": e
							});
						return a.a.createElement("div", {
							className: "modal--math-problem-type-selector"
						}, a.a.createElement("div", {
							className: "modal--math-problem-type-selector--flag",
							ref: this.flagRef
						}), a.a.createElement("div", {
							className: "modal-body pts pbm"
						}, a.a.createElement("div", {
							className: "modal--math-problem-type-selector--beta"
						}, "BETA"), a.a.createElement("div", {
							className: "modal--math-problem-type-selector--header"
						}, t), a.a.createElement("div", {
							className: "modal--math-problem-type-selector--content"
						}, a.a.createElement("div", {
							className: "math-problem-type-selector--problem-types"
						}, this.renderProblemTypes()), a.a.createElement("div", {
							className: "math-problem-type-selector--coming-soon"
						}, "More problem types coming soon!")), a.a.createElement("div", {
							className: "modal--math-problem-type-selector--actions"
						}, a.a.createElement("button", {
							onClick: this.onCommitSelectedMathProblemType,
							className: n,
							"data-ttcopy": "Upgrade to Nitro Gold to Unlock!"
						}, "Start Game"))))
					}
				}]) && w(t.prototype, n), r && w(t, r), i
			}(a.a.PureComponent),
			N = Object(l.a)(T),
			C = n(11);
		t.a = Object(r.b)((function(e) {
			return {
				site: e.globals.SITE,
				lessons: e.globals.LESSON_DESCRIPTIONS,
				selectedLessonID: e.user.lessonID
			}
		}), (function(e) {
			return {
				setMathProblemType: function(t) {
					return e(Object(C.n)(t))
				}
			}
		}))(N)
	},
	75: function(e, t, n) {
		"use strict";
		var r = n(6),
			o = n(0),
			a = n.n(o),
			i = (n(1), n(109)),
			s = n(24),
			c = n(3),
			l = n.n(c),
			u = n(26);

		function p(e) {
			return (p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			})(e)
		}

		function f(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function d(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
			}
		}

		function m(e, t) {
			return (m = Object.setPrototypeOf || function(e, t) {
				return e.__proto__ = t, e
			})(e, t)
		}

		function h(e) {
			var t = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
				} catch (e) {
					return !1
				}
			}();
			return function() {
				var n, r = g(e);
				if (t) {
					var o = g(this).constructor;
					n = Reflect.construct(r, arguments, o)
				} else n = r.apply(this, arguments);
				return y(this, n)
			}
		}

		function y(e, t) {
			return !t || "object" !== p(t) && "function" != typeof t ? function(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}(e) : t
		}

		function g(e) {
			return (g = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
				return e.__proto__ || Object.getPrototypeOf(e)
			})(e)
		}
		var v = function(e) {
			! function(e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						writable: !0,
						configurable: !0
					}
				}), t && m(e, t)
			}(s, e);
			var t, n, r, o = h(s);

			function s() {
				var e;
				f(this, s);
				for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
				return (e = o.call.apply(o, [this].concat(n))).state = {
					reCaptcha: "",
					reCaptchaError: null,
					reCaptchaLoaded: !1
				}, e.handleReCaptchaChange = function(t) {
					e.setState({
						reCaptcha: t,
						reCaptchaError: null
					}), e.props.validateCaptcha(t)
				}, e.handleRecaptchaError = function(t) {
					e.setState({
						reCaptcha: "",
						reCaptchaError: t
					})
				}, e.handleReCaptchaLoaded = function() {
					e.setState({
						reCaptchaLoaded: !0
					})
				}, e.reloadPage = function() {
					window.__reloadPage()
				}, e.renderSuccess = function() {
					return a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
						className: "row row--m tac well--m well--b"
					}, a.a.createElement("div", {
						className: "tc-i"
					}, "Validated!  Play on.")), a.a.createElement("div", {
						className: "row row--m tac well--m "
					}, a.a.createElement("button", {
						type: "button",
						onClick: e.reloadPage,
						className: "btn btn--primary btn--fw"
					}, "Continue")))
				}, e.renderCaptcha = function() {
					return a.a.createElement(a.a.Fragment, null, e.props.validateCaptchaPending && a.a.createElement(u.a, {
						text: "Validating your humanity. Please wait..."
					}), !e.state.reCaptchaLoaded && a.a.createElement(u.a, {
						text: "Loading Bot Verification Tool..."
					}), !e.props.validateCaptchaPending && a.a.createElement("div", {
						className: "row row--m"
					}, a.a.createElement("div", {
						className: "df df--justify-center"
					}, a.a.createElement(i.a, {
						sitekey: e.props.recaptchaSiteKey,
						asyncScriptOnLoad: e.handleReCaptchaLoaded,
						size: "normal",
						onChange: e.handleReCaptchaChange,
						onErrored: e.handleRecaptchaError,
						theme: "dark"
					}), a.a.createElement("div", {
						className: l()("input input--inline", {
							"is-error": e.state.reCaptchaError
						})
					}, a.a.createElement("div", {
						className: "input-alert"
					}, a.a.createElement("div", {
						className: "bucket bucket--xs bucket--c"
					}, a.a.createElement("div", {
						className: "bucket-media"
					}, a.a.createElement("svg", {
						className: "icon icon-warning animate animate--fadeInOut animate--infinite animate--d-15"
					}, a.a.createElement("use", {
						xmlnsXlink: "http://www.w3.org/1999/xlink",
						xlinkHref: "/dist/site/images/icons/icons.css.svg#icon-warning"
					}))), a.a.createElement("div", {
						className: "bucket-content"
					}, e.state.reCaptchaError)))))))
				}, e
			}
			return t = s, (n = [{
				key: "componentDidUpdate",
				value: function(e, t, n) {
					!e.validateCaptchaError && this.props.validateCaptchaError && this.setState({
						reCaptchaError: this.props.validateCaptchaError.message || "An unknown error occurred. Please try again!"
					}), !e.validateCaptchaSuccessful && this.props.validateCaptchaSuccessful && (this.props.remove ? this.props.remove() : this.props.closeModal())
				}
			}, {
				key: "render",
				value: function() {
					var e = null;
					switch (this.props.captchaStatus) {
						case "pending":
							e = a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
								className: "tc-i"
							}, "Looks like you are going for a solid session."), a.a.createElement("div", {
								className: "tc-i"
							}, "Let's make sure you're human."));
							break;
						case "password":
							e = a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
								className: "tc-i"
							}, "Uh oh, your password was recently entered incorrectly several times in a row."), a.a.createElement("div", {
								className: "tc-i"
							}, "Let's secure your account by checking the box below."));
							break;
						default:
							e = a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
								className: "tc-i"
							}, "Looks like you are logging in a lot in a short time!"), a.a.createElement("div", {
								className: "tc-i"
							}, "Let's make sure you're not a bot."))
					}
					var t = this.props.loggedIn ? this.props.displayName || this.props.username : "Racer";
					return a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
						className: "modal-body ptm pbl tac"
					}, a.a.createElement("div", {
						className: "row row--m well--l well--b"
					}, a.a.createElement("div", {
						className: "twb tsxxl tbs tc-lemon tsi"
					}, "Hey, ", t, "!"), e), this.props.validateCaptchaSuccessful ? this.renderSuccess() : this.renderCaptcha()), a.a.createElement("div", {
						className: "tc-ts tsxs well well--s row--m tac"
					}, "If reCAPTCHA verification fails to display, you may have a content or ad blocker installed. Please try logging in from a different device or checking your blocker settings."))
				}
			}]) && d(t.prototype, n), r && d(t, r), s
		}(a.a.PureComponent);
		v.defaultProps = {
			captchaStatus: "pending"
		};
		var b = Object(s.a)(v),
			w = n(15);
		t.a = Object(r.b)((function(e) {
			return {
				loggedIn: e.user.loggedIn,
				username: e.user.username,
				displayName: e.user.displayName,
				recaptchaSiteKey: e.globals.RECAPTCHA_CHECKBOX_KEY,
				validateCaptchaPending: e.ui.validateCaptchaPending,
				validateCaptchaSuccessful: e.ui.validateCaptchaSuccessful,
				validateCaptchaError: e.ui.validateCaptchaError
			}
		}), (function(e, t) {
			return {
				validateCaptcha: function(n) {
					t.validateCaptcha ? e(t.validateCaptcha(n)) : e(w.a.validateCaptcha(n))
				}
			}
		}))(b)
	},
	78: function(e, t) {},
	79: function(e, t) {},
	80: function(e, t) {},
	81: function(e, t) {},
	82: function(e, t) {},
	83: function(e, t) {},
	84: function(e, t) {},
	85: function(e, t) {},
	86: function(e, t) {},
	87: function(e, t) {},
	88: function(e, t) {},
	89: function(e, t) {},
	9: function(e, t, n) {
		"use strict";
		n.d(t, "c", (function() {
			return De
		})), n.d(t, "b", (function() {
			return r
		})), n.d(t, "d", (function() {
			return c
		}));
		var r = {};
		n.r(r), n.d(r, "reportPlayer", (function() {
			return qe
		})), n.d(r, "setQualifyingInfo", (function() {
			return He
		})), n.d(r, "updateSoundPreferences", (function() {
			return Ge
		})), n.d(r, "refreshUserSessionAfterStripePurchase", (function() {
			return Ve
		})), n.d(r, "updateWithTypingRaceResults", (function() {
			return ze
		})), n.d(r, "updateWithMathRaceResults", (function() {
			return We
		})), n.d(r, "validateEmail", (function() {
			return Ye
		})), n.d(r, "updateSoundPreferencesGuest", (function() {
			return Xe
		})), n.d(r, "setLevel", (function() {
			return Ke
		})), n.d(r, "clearTeamNotifications", (function() {
			return Je
		})), n.d(r, "clearNewlyJoinedTeamID", (function() {
			return Qe
		})), n.d(r, "updateLineType", (function() {
			return Ze
		})), n.d(r, "addDQ", (function() {
			return $e
		})), n.d(r, "setUpgradedToGold", (function() {
			return et
		})), n.d(r, "setSendCashSuccessful", (function() {
			return tt
		})), n.d(r, "setCashGiftReceived", (function() {
			return nt
		})), n.d(r, "setEventModalVisibility", (function() {
			return rt
		})), n.d(r, "setGuestQualifyingInfo", (function() {
			return ot
		})), n.d(r, "updateUsername", (function() {
			return at
		})), n.d(r, "captchaSuccessful", (function() {
			return it
		})), n.d(r, "visitedNews", (function() {
			return st
		})), n.d(r, "visitedShop", (function() {
			return ct
		})), n.d(r, "backOffAchievementsCheck", (function() {
			return lt
		})), n.d(r, "trackCheckins", (function() {
			return ut
		})), n.d(r, "onlineNotificationSeen", (function() {
			return pt
		})), n.d(r, "storeLastPurchase", (function() {
			return ft
		})), n.d(r, "newRealtimeMessage", (function() {
			return dt
		})), n.d(r, "claimExtraLevelReward", (function() {
			return mt
		})), n.d(r, "updateDailyChallenges", (function() {
			return ht
		}));
		var o = n(15),
			a = n(38),
			i = n(14),
			s = n(30),
			c = n(5),
			l = n(43),
			u = n(13),
			p = n(19),
			f = n(8),
			d = n.n(f),
			m = n(36),
			h = n(47),
			y = n(4);

		function g(e, t) {
			var n;
			if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
				if (Array.isArray(e) || (n = b(e)) || t && e && "number" == typeof e.length) {
					n && (e = n);
					var r = 0,
						o = function() {};
					return {
						s: o,
						n: function() {
							return r >= e.length ? {
								done: !0
							} : {
								done: !1,
								value: e[r++]
							}
						},
						e: function(e) {
							throw e
						},
						f: o
					}
				}
				throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
			}
			var a, i = !0,
				s = !1;
			return {
				s: function() {
					n = e[Symbol.iterator]()
				},
				n: function() {
					var e = n.next();
					return i = e.done, e
				},
				e: function(e) {
					s = !0, a = e
				},
				f: function() {
					try {
						i || null == n.return || n.return()
					} finally {
						if (s) throw a
					}
				}
			}
		}

		function v(e) {
			return function(e) {
				if (Array.isArray(e)) return w(e)
			}(e) || function(e) {
				if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
			}(e) || b(e) || function() {
				throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
			}()
		}

		function b(e, t) {
			if (e) {
				if ("string" == typeof e) return w(e, t);
				var n = Object.prototype.toString.call(e).slice(8, -1);
				return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? w(e, t) : void 0
			}
		}

		function w(e, t) {
			(null == t || t > e.length) && (t = e.length);
			for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
			return r
		}

		function E(e, t) {
			var n = Object.keys(e);
			if (Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(e);
				t && (r = r.filter((function(t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				}))), n.push.apply(n, r)
			}
			return n
		}

		function O(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = null != arguments[t] ? arguments[t] : {};
				t % 2 ? E(Object(n), !0).forEach((function(t) {
					S(e, t, n[t])
				})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : E(Object(n)).forEach((function(t) {
					Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
				}))
			}
			return e
		}

		function S(e, t, n) {
			return t in e ? Object.defineProperty(e, t, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = n, e
		}
		var _ = "g".concat(Math.random()),
			T = {
				loggedIn: !1,
				accountType: "",
				originalAccountType: "",
				nitros: 0,
				money: 0,
				displayName: "Guest Racer",
				userID: _,
				username: _,
				changedUsername: 0,
				title: "Accountless One",
				level: 0,
				lastExtraLevel: 0,
				experience: 0,
				carID: 9,
				carHueAngle: 0,
				garage: [9, "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
				cars: [
					[9, "owned", 0]
				],
				racingStats: null,
				tzOffset: null,
				lineType: "multi",
				inClass: 0,
				motdNotification: !1,
				offline: 0,
				contact: 0,
				validEmail: 0,
				blogComments: 0,
				moneySpent: 0,
				playTime: 0,
				highestSpeed: 0,
				avgSpeed: 0,
				avgAcc: 0,
				placed1: 0,
				placed2: 0,
				placed3: 0,
				racesPlayed: 0,
				nitrosUsed: 0,
				nitrosPurchased: 0,
				country: null,
				sessionPages: 0,
				visits: null,
				sessionRaces: 0,
				shares: 0,
				speed: 0,
				practices: 0,
				challenges: [],
				referrals: 0,
				profileFields: 0,
				consecWins: 0,
				consecDaysRaced: 0,
				seasonField1: 0,
				seasonField2: 0,
				seasonField3: 0,
				seasonField4: 0,
				seasonField5: 0,
				seasonField6: 0,
				membership: "basic",
				lastLogin: 0,
				wampusWins: 0,
				requests: 0,
				totalCars: 0,
				soldCars: 0,
				friendLimit: 200,
				teamID: 0,
				tag: null,
				tagColor: null,
				newlyJoinedTeamID: 0,
				newTeamMembers: 0,
				raceSounds: "only_fx",
				lookingForTeam: 0,
				paintJobs: 0,
				profileViews: 0,
				allowFriendRequests: 1,
				teamApplications: 0,
				longestSession: 0,
				mysteryBoxes: 0,
				memberDays: 0,
				rewardCountdown: 0,
				teamRole: null,
				playerFriends: [],
				DQs: 0,
				lastDq: null,
				lastMysteryBoxClaimed: 0,
				visitedNews: !1,
				visitedShop: !1,
				disabledClassSettings: [],
				backOffAchievementsCheckUntil: null,
				worldID: 1,
				loot: [],
				lessonStats: [],
				lastNews: 0,
				checkins: 0,
				lastPurchaseUserID: null,
				lastPurchase: null
			},
			N = function(e, t) {
				var n, r, o, a, i, s, c, l, u, p, f;
				t.garage && t.garage.length || (t = O(O({}, t), {}, {
					garage: T.garage
				})), t.cars && t.cars.length || (t = O(O({}, t), {}, {
					cars: T.cars
				})), null !== (n = t) && void 0 !== n && null !== (r = n.classData) && void 0 !== r && null !== (o = r.message) && void 0 !== o && o.text && "" !== (null === (a = t) || void 0 === a || null === (i = a.classData) || void 0 === i || null === (s = i.message) || void 0 === s ? void 0 : s.expiration) && d()(null === (c = t) || void 0 === c || null === (l = c.classData) || void 0 === l || null === (u = l.message) || void 0 === u ? void 0 : u.expiration).isBefore(d()()) && delete t.classData.message;
				var m = (null === (p = t) || void 0 === p || null === (f = p.classData) || void 0 === f ? void 0 : f.options) || {},
					h = Object.keys(m).filter((function(e) {
						return !1 === m[e]
					}));
				return t.soldCars = t.cars.filter((function(e) {
					return "sold" === e[1]
				})).length, t.totalCars = t.cars.length, delete t.token, t = Re(t, t.challenges), O(O(O({}, e), {}, {
					loggedIn: !0
				}, t), {}, {
					disabledClassSettings: h
				})
			},
			C = function(e, t) {
				return O(O({}, e), {}, {
					sections: null,
					sectionID: t.sectionID,
					classData: O({}, t)
				})
			},
			A = function(e, t) {
				var n = O(O({}, e), {}, {
						rewardCountdown: t.next,
						lastMysteryBoxClaimed: t.last,
						mysteryBoxes: e.mysteryBoxes + 1
					}),
					r = t.value;
				switch (t.type) {
					case "money":
						n.money = e.money + r;
						break;
					case "car":
						var o = v(e.cars),
							a = [parseInt(r, 10), "owned", 0];
						o.push(a), n.cars = o, n.totalCars = o.length;
						break;
					case "nitros":
						n.nitros = e.nitros + r;
						break;
					default:
						return console.error("unknown mystery box type"), e
				}
				return n
			},
			I = function(e, t) {
				var n, r = t.type,
					o = t.id,
					a = t.moneySpent,
					i = t.money;
				return n = "car" === r ? R(e, o) : k(e, r, o), O(O(O({}, e), n), {}, {
					moneySpent: a,
					money: i
				})
			},
			k = function(e, t, n) {
				var r, o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Math.floor(Date.now() / 1e3),
					a = v(e.loot),
					i = g(a);
				try {
					for (i.s(); !(r = i.n()).done;) {
						var s = r.value;
						if (s.type === t && s.lootID === n) return e
					}
				} catch (e) {
					i.e(e)
				} finally {
					i.f()
				}
				return a.push({
					lootID: n,
					type: t,
					createdStamp: o,
					equipped: 0
				}), O(O({}, e), {}, {
					loot: a
				})
			},
			R = function(e, t) {
				var n = v(e.cars),
					r = n.findIndex((function(e) {
						return e[0] === t
					})); - 1 !== r && "sold" === n[r][1] ? n[r][1] = "owned" : n.push([t, "owned", 0]);
				for (var o = n.filter((function(e) {
						return "sold" === e[1]
					})).length, a = n.length, i = v(e.garage), s = 0; s < i.length; s++)
					if (!i[s]) {
						i[s] = "" + t;
						break
					} return O(O({}, e), {}, {
					cars: n,
					garage: i,
					soldCars: o,
					totalCars: a
				})
			},
			P = function(e, t, n) {
				var r = O({}, e),
					o = t.achievementID,
					a = t.reward,
					i = t.points,
					s = v(e.achievements),
					c = v(e.achievementsUnclaimed);
				switch (c = c.filter((function(e) {
						return e[0] !== o
					})), r.achievementsUnclaimed = c, s.push([o, Math.round(Date.now() / 1e3), i]), r.achievements = s, a.type) {
					case "car":
						var l = v(e.cars);
						l.push([parseInt(a.value, 10), "owned", 0]), r.cars = l;
						break;
					case "loot":
						var u = v(e.loot),
							p = n.find((function(e) {
								return e.lootID === parseInt(a.value)
							}));
						u.find((function(e) {
							return e.lootID === parseInt(a.value)
						})) || u.push({
							lootID: parseInt(a.value),
							type: p.type,
							equipped: 0,
							createdStamp: Math.floor(Date.now() / 1e3)
						}), r.loot = u;
						break;
					case "money":
						r.money = parseInt(e.money, 10) + parseInt(a.value, 10)
				}
				return r
			},
			j = function(e, t) {
				var n = e.achievementsUnclaimed.concat(t.unclaimedAchievements),
					r = e.achievements || [];
				t.alreadyAchieved && t.alreadyAchieved.forEach((function(e) {
					r.find((function(t) {
						return t[0] === e[0]
					})) || r.push(e)
				}));
				var o = [];
				return n = n.filter((function(e) {
					var t = e[0];
					return -1 === o.indexOf(t) && (o.push(t), !0)
				})), O(O(O({}, e), t.user), {}, {
					backOffAchievementsCheckUntil: null,
					achievementsUnclaimed: n,
					achievements: r
				})
			},
			D = function(e, t) {
				return O(O({}, e), {}, {
					garage: t
				})
			},
			x = function(e, t) {
				return O(O({}, e), {}, {
					racingStats: t.racingStats,
					lessonStats: t.lessonStats
				})
			},
			L = function(e, t) {
				var n = t.displayName,
					r = t.username,
					o = t.changedUsername,
					a = O({}, e);
				return void 0 !== n && (a.displayName = n), r && (a.username = r), o && (a.changedUsername = 1), a
			},
			M = function(e, t) {
				var n = t.allowFriendRequests,
					r = t.lookingForTeam,
					o = t.offline;
				return O(O({}, e), {}, {
					allowFriendRequests: parseInt(n),
					lookingForTeam: parseInt(r),
					offline: parseInt(o),
					requests: parseInt(n) ? e.requests : 0
				})
			},
			U = function(e, t) {
				return O(O({}, e), {}, {
					level: t
				})
			},
			F = function(e, t) {
				var n = t.contact,
					r = t.validEmail;
				return O(O({}, e), {}, {
					validEmail: r,
					contact: n ? 1 : 0
				})
			},
			B = function(e, t) {
				return O(O({}, e), t)
			},
			q = function(e, t) {
				var n = t.worldID,
					r = t.lessonStats,
					o = v(e.lessonStats);
				return r.forEach((function(e) {
					o.find((function(t) {
						return e.worldID === t.worldID && e.lessonID === t.lessonID
					})) || o.push(e)
				})), O(O({}, e), {}, {
					worldID: n,
					lessonStats: o
				})
			},
			H = function(e, t) {
				var n = t.info.teamID;
				return e.teamID !== n || t.onThisTeam ? e.teamID !== n && t.onThisTeam ? G(e, t.info) : e : V(e, t)
			},
			G = function(e, t) {
				var n = t.teamID,
					r = t.tag,
					o = t.tagColor;
				return O(O({}, e), {}, {
					teamID: n,
					tag: r,
					tagColor: o,
					newlyJoinedTeamID: n,
					teamApplications: 0
				})
			},
			V = function(e) {
				return O(O({}, e), {}, {
					teamID: null,
					tag: null,
					tagColor: null,
					newlyJoinedTeamID: 0,
					teamApplications: 0
				})
			},
			z = function(e) {
				return O(O({}, e), {}, {
					teamApplications: e.teamApplications - 1
				})
			},
			W = function(e) {
				return O(O({}, e), {}, {
					teamApplications: e.teamApplications - 1
				})
			},
			Y = function(e) {
				return O(O({}, e), {}, {
					teamApplications: 0
				})
			},
			X = function(e) {
				return O(O({}, e), {}, {
					teamApplications: 0
				})
			},
			K = function(e, t) {
				var n = {};
				if ("friend-requests" === t.type && (n.requests = t.requests), "team-application" === t.type && (n.teamApplications = t.applications), "team-member-joined" === t.type && (n.newTeamMembers = e.newTeamMembers + t.newTeamMembers), "team-motd" === t.type && (n.motdNotification = !0), "team-invite" === t.type) {
					var r = e.teamApplications || 0;
					n.teamApplications = r + 1
				}
				return O(O({}, e), n)
			},
			J = function(e) {
				return O(O({}, e), {}, {
					motdNotification: !1,
					newTeamMembers: 0
				})
			},
			Q = function(e) {
				return O(O({}, e), {}, {
					newlyJoinedTeamID: 0
				})
			},
			Z = function(e) {
				var t = e.teamApplications;
				return t > 0 ? t -= 1 : t = 0, O(O({}, e), {}, {
					teamApplications: t
				})
			},
			$ = function(e, t) {
				var n = O({}, t);
				return O(O({}, e), n)
			},
			ee = function(e, t) {
				O({}, e);
				var n = O({}, t.raceData),
					r = (n.progress.completeStamp, t.startStamp, O({}, n.rewards.current));
				return e = Re(e, n.challenges), r.challenges = e.challenges, O(O(O({}, e), r), {}, {
					lastDq: null,
					DQs: 0
				})
			},
			te = function(e, t) {
				O({}, e);
				var n = O({}, t.raceData),
					r = (n.completeStamp, n.startStamp, O({}, n.rewards.current));
				return n.challenges && (e = Re(e, n.challenges), r.challenges = e.challenges), O(O({}, e), r)
			},
			ne = function(e, t) {
				var n, r = null === (n = t.cars) || void 0 === n ? void 0 : n.map((function(e) {
						return [e, "owned", 0]
					})),
					o = new Array(30).fill("");
				return O(O({}, e), {}, {
					qualifyingRaceComplete: !0,
					avgSpeed: t.speed,
					avgAcc: t.accuracy,
					cars: r,
					garage: o,
					money: t.money,
					raceSounds: t.raceSounds
				})
			},
			re = function(e, t) {
				return O(O({}, e), {}, {
					raceSounds: t
				})
			},
			oe = function(e, t) {
				return O(O({}, e), {}, {
					lineType: t
				})
			},
			ae = function(e) {
				var t = e.DQs || 0,
					n = Math.round(Date.now() / 1e3);
				return t += 1, O(O({}, e), {}, {
					DQs: t,
					lastDq: n
				})
			},
			ie = function(e, t) {
				var n = [].concat(v(e.friends), [{
					friendType: "friend",
					userID: t.userID
				}]);
				return O(O({}, e), {}, {
					requests: e.requests - 1,
					friends: n
				})
			},
			se = function(e, t) {
				var n = v(e.friends).filter((function(e) {
					return e.userID !== t
				}));
				return O(O({}, e), {}, {
					friends: n
				})
			},
			ce = function(e, t) {
				var n = v(e.friends),
					r = t.filter((function(e) {
						return !n.find((function(t) {
							return t.userID === e.userID
						}))
					})).map((function(e) {
						return {
							userID: e.userID,
							friendType: e.friendType
						}
					}));
				return O(O({}, e), {}, {
					friends: [].concat(v(n), v(r))
				})
			},
			le = function(e) {
				return O(O({}, e), {}, {
					requests: e.requests - 1
				})
			},
			ue = function(e, t) {
				var n = t.map((function(e) {
						return {
							friendType: "friend",
							userID: e
						}
					})),
					r = [].concat(v(e.friends), v(n));
				return O(O({}, e), {}, {
					friends: r,
					requests: Math.max(0, e.requests - t.length)
				})
			},
			pe = function(e, t) {
				return O(O({}, e), {}, {
					requests: e.requests - t
				})
			},
			fe = function(e, t) {
				return O(O({}, e), {}, {
					tag: t.tag,
					teamRole: "officer",
					teamID: t.teamID,
					tagColor: t.tagColor,
					money: e.money - t.cost
				})
			},
			de = function(e, t) {
				return O(O({}, e), {}, {
					tag: t.tag,
					tagColor: t.tagColor
				})
			},
			me = function(e) {
				return O(O({}, e), {}, {
					tag: null,
					teamRole: "",
					teamID: null,
					tagColor: null
				})
			},
			he = function(e, t) {
				return O(O({}, e), {}, {
					membership: "gold",
					buyCash: t.buyCash,
					money: e.money + t.cashReward
				})
			},
			ye = function(e, t) {
				return O(O({}, e), {}, {
					money: t.money,
					moneySpent: t.moneySpent
				})
			},
			ge = function(e, t) {
				return O(O({}, e), {}, {
					money: e.money + parseFloat(t)
				})
			},
			ve = function(e, t) {
				var n = t.user;
				return n ? O(O({}, e), n) : e
			},
			be = function(e, t) {
				return O(O({}, e), t)
			},
			we = function(e, t) {
				return O(O({}, e), {}, {
					captchaStatus: t
				})
			},
			Ee = function(e) {
				return O(O({}, e), {}, {
					visitedNews: !0
				})
			},
			Oe = function(e) {
				return O(O({}, e), {}, {
					visitedShop: !0
				})
			},
			Se = function(e) {
				return O(O({}, e), {}, {
					backOffAchievementsCheckUntil: Math.floor(Date.now() / 1e3) + (e.backOffAchievementsCheckUntil ? 300 : 120)
				})
			},
			_e = function(e, t, n) {
				var r = t.lootIDs,
					o = t.type,
					a = e.loot.map((function(e) {
						return e.type !== o ? e : r.includes(e.lootID) ? O(O({}, e), {}, {
							equipped: 1
						}) : O(O({}, e), {}, {
							equipped: 0
						})
					})),
					i = O({}, e);
				if ("title" === o && n) {
					var s = n.find((function(e) {
						return e.lootID === r[0]
					}));
					s && (i.title = s.name)
				}
				return r.forEach((function(e) {
					a.find((function(t) {
						return t.lootID === e
					})) || a.push({
						lootID: e,
						type: o,
						equipped: 1
					})
				})), i.loot = a, i
			},
			Te = function(e, t) {
				var n = t.earnedAchievements,
					r = t.lootItems,
					o = v(e.achievements),
					a = O({}, e);
				return n.forEach((function(e) {
					o.push([e.achievementID, Math.round(Date.now() / 1e3), e.points]), a = function(e, t, n) {
						switch (e.type) {
							case "car":
								var r = v(t.cars);
								r.push([parseInt(e.value, 10), "owned", 0]), t.cars = r;
								break;
							case "loot":
								var o = v(t.loot),
									a = n.find((function(t) {
										return t.lootID === parseInt(e.value)
									}));
								o.find((function(t) {
									return t.lootID === parseInt(e.value)
								})) || o.push({
									lootID: a.lootID,
									type: a.type,
									equipped: 0
								}), t.loot = o;
								break;
							case "money":
								t.money = parseInt(t.money, 10) + parseInt(e.value, 10)
						}
						return O({}, t)
					}(e.reward, a, r)
				})), O(O({}, a), {}, {
					achievements: o
				})
			},
			Ne = function(e, t) {
				var n = t.money,
					r = t.level,
					o = t.lastExtraLevel;
				return O(O({}, e), {}, {
					money: n,
					level: r,
					lastExtraLevel: o
				})
			};
		var Ce = function(e) {
				return O(O({}, e), {}, {
					checkins: (e.checkins || 0) + 1
				})
			},
			Ae = function(e, t) {
				var n = v(e.friends).map((function(e) {
					var n = O({}, e);
					return n.userID === t && (n.online = Math.floor(Date.now() / 1e3)), n
				}));
				return O(O({}, e), {}, {
					friends: n
				})
			},
			Ie = function(e, t, n) {
				return t.forEach((function(t) {
					"car" === t.type ? (e = function(e, t) {
						t = parseInt(t);
						var n = e.cars.find((function(e) {
							return e[0] === t
						}));
						return n ? O(O({}, e), {}, {
							carID: t,
							carHueAngle: n[2]
						}) : e
					}(e, t.id), Object(y.i)(t.hueAngle) && (e = function(e, t) {
						var n = v(e.cars);
						return n.map((function(e) {
							return t.carID === e[0] && (e[2] = t.hueAngle), e
						})), O(O({}, e), {}, {
							cars: n,
							carHueAngle: t.hueAngle
						})
					}(e, {
						carID: t.id,
						hueAngle: t.hueAngle
					}))) : e = "stickers" === t.type ? _e(e, {
						lootIDs: t.ids,
						type: "sticker"
					}, n) : _e(e, {
						lootIDs: [t.id],
						type: t.type
					}, n)
				})), O({}, e)
			},
			ke = function(e, t, n) {
				return O(O({}, e), {}, {
					lastPurchaseUserID: t,
					lastPurchase: n
				})
			},
			Re = function(e, t) {
				var n = Object(y.e)(e.challenges) ? v(e.challenges) : [];
				return null == t || t.forEach((function(e) {
					var t = n.find((function(t) {
						return t.challengeID === e.challengeID
					}));
					t ? (t.progress = e.progress, t.completeStamp = e.completeStamp) : n.push(e)
				})), O(O({}, e), {}, {
					challenges: n
				})
			},
			Pe = function(e, t) {
				return O(O({}, e), {}, {
					lessonID: t
				})
			},
			je = function() {
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : T,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case o.b.LOG_IN_SUCCESSFUL:
						return N(e, t.payload);
					case o.b.LOG_IN_TO_CLASS:
						return C(e, t.payload);
					case a.d.CLAIM_REWARD_SUCCESSFUL:
						return A(e, t.payload);
					case h.c.BUY_PRODUCT_SUCCESSFUL:
						return I(e, t.payload);
					case m.c.EQUIP_LOOT:
						return Ie(e, t.payload, t.allLoot);
					case i.c.CLAIM_ACHIEVEMENT:
						return P(e, t.payload, t.allLoot);
					case i.c.NEW_UNCLAIMED_ACHIEVEMENTS:
						return j(e, t.payload);
					case a.d.ARRANGE_CARS:
						return D(e, t.payload);
					case l.c.SET_RACING_STATS:
						return x(e, t.payload);
					case s.c.UPDATE_USER_PROFILE:
						return L(e, t.payload);
					case s.c.UPDATE_SOCIAL_SETTINGS:
						return M(e, t.payload);
					case s.c.UPDATE_ACCOUNT_SETTINGS:
						return F(e, t.payload);
					case s.c.REMOVE_SSO:
						return B(e, t.payload);
					case s.c.UPDATE_WORLD:
						return q(e, t.payload);
					case c.SET_LEVEL:
						return U(e, t.payload);
					case c.SET_UPGRADED_TO_GOLD:
						return he(e, t.payload);
					case c.USER_PURCHASED_CASH:
						return userPurchasedCash(e, t.payload);
					case u.c.ACCEPT_TEAM_INVITE:
					case u.c.JOIN_TEAM:
						return G(e, t.payload);
					case u.c.SET_TEAM_DETAILS:
						return H(e, t.payload);
					case u.c.LEAVE_TEAM:
						return V(e, t.payload);
					case u.c.ACCEPT_TEAM_APPLICATION:
						return z(e, t.payload);
					case u.c.DENY_TEAM_APPLICATION:
						return W(e, t.payload);
					case u.c.ACCEPT_ALL_TEAM_APPLICATIONS:
						return Y(e, t.payload);
					case u.c.DENY_ALL_TEAM_APPLICATIONS:
						return X(e, t.payload);
					case c.NEW_REALTIME_MESSAGE:
						return K(e, t.payload);
					case c.CLEAR_TEAM_NOTIFICATIONS:
						return J(e);
					case c.CLEAR_NEWLY_JOINED_TEAM_ID:
						return Q(e);
					case u.c.IGNORE_TEAM_INVITE:
						return Z(e, t.payload);
					case s.c.FETCH_USER_SETTINGS:
						return $(e, t.payload);
					case c.UPDATE_WITH_TYPING_RACE_RESULTS:
						return ee(e, t.payload);
					case c.UPDATE_WITH_MATH_RACE_RESULTS:
						return te(e, t.payload);
					case c.SET_QUALIFYING_INFO:
						return ne(e, t.payload);
					case c.UPDATE_SOUND_PREFERENCES:
						return re(e, t.payload);
					case c.UPDATE_LINE_TYPE:
						return oe(e, t.payload);
					case c.ADD_DQ:
						return ae(e);
					case p.c.ACCEPT_REQUEST:
						return ie(e, t.payload);
					case p.c.REMOVE_FRIEND:
						return se(e, t.payload);
					case p.c.SET_FRIENDS:
						return ce(e, t.payload);
					case p.c.IGNORE_REQUEST:
						return le(e);
					case p.c.ACCEPT_ALL_REQUESTS:
						return ue(e, t.payload);
					case p.c.IGNORE_ALL_REQUESTS:
						return pe(e, t.payload);
					case u.c.CREATE_TEAM:
						return fe(e, t.payload);
					case u.c.DISBAND_TEAM:
						return me(e, t.payload);
					case u.c.EDIT_TEAM:
						return de(e, t.payload);
					case c.SET_SEND_CASH_SUCCESSFUL:
						return ye(e, t.payload);
					case c.SET_CASH_GIFT_RECEIVED:
						return ge(e, t.payload);
					case c.REFRESH_USER_SESSION_AFTER_STRIPE_PURCHASE:
						return ve(e, t.payload);
					case c.SAVE_QUALIFYING_RESULTS:
						return be(e, t.payload);
					case c.SET_USER_EMAIL_VALID:
						return O(O({}, e), {}, {
							valid_contact: 1
						});
					case c.SET_EVENT_MODAL_VISIBILITY:
						return O(O({}, e), {}, {
							event_modal_visible: t.payload
						});
					case c.UPDATE_USERNAME:
						return O(O({}, e), {}, {
							requiresUsername: !1,
							displayName: t.username
						});
					case c.CAPTCHA_SUCCESSFUL:
						return we(e, t.status);
					case c.VISITED_NEWS:
						return Ee(e);
					case c.VISITED_SHOP:
						return Oe(e);
					case c.BACK_OFF_ACHIEVEMENTS_CHECK:
						return Se(e);
					case i.c.NEW_INSTANT_CLAIMED_ACHIEVEMENT:
						return Te(e, t.payload);
					case c.CLAIM_EXTRA_LEVEL_REWARD:
						return Ne(e, t.payload);
					case c.TRACK_CHECKINS:
						return Ce(e);
					case c.ONLINE_NOTIFICATION_SEEN:
						return Ae(e, t.userID);
					case c.STORE_LAST_PURCHASE:
						return ke(e, t.lastPurchaseUserID, t.lastPurchase);
					case c.UPDATE_DAILY_CHALLENGES:
						return Re(e, t.challenges);
					case c.SET_SELECTED_MATH_PROBLEM_TYPE:
						return Pe(e, t.lessonID)
				}
				return e
			},
			De = n(35),
			xe = n(11),
			Le = n(2),
			Me = n(17),
			Ue = n.n(Me);

		function Fe(e, t) {
			var n = Object.keys(e);
			if (Object.getOwnPropertySymbols) {
				var r = Object.getOwnPropertySymbols(e);
				t && (r = r.filter((function(t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable
				}))), n.push.apply(n, r)
			}
			return n
		}

		function Be(e, t, n) {
			return t in e ? Object.defineProperty(e, t, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = n, e
		}
		var qe = function(e) {
				return function() {
					Object(Le.b)("/api/v2/players/".concat(e, "/report"), {
						method: "post"
					}, (function() {
						return null
					})).then((function() {
						return null
					}))
				}
			},
			He = function(e, t) {
				return function(n) {
					Object(Le.b)("/api/v2/race/save-qualifying", {
						method: "post",
						params: {
							speed: e,
							accuracy: t
						},
						uhash: !0,
						apiScope: "setQualifyingInfo"
					}, n).then((function(r) {
						n(xe.m(function(e) {
							for (var t = 1; t < arguments.length; t++) {
								var n = null != arguments[t] ? arguments[t] : {};
								t % 2 ? Fe(Object(n), !0).forEach((function(t) {
									Be(e, t, n[t])
								})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Fe(Object(n)).forEach((function(t) {
									Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
								}))
							}
							return e
						}({
							speed: e,
							accuracy: t
						}, r)))
					}), (function() {
						alert("There was an error saving your qualifying info. Please try logging out and back in to fix it.")
					}))
				}
			},
			Ge = function(e) {
				return function(t) {
					t(xe.v(e)), Object(Le.b)("/api/v2/settings/sounds", {
						method: "post",
						params: {
							value: e
						},
						apiScope: "updateSoundPreferences"
					}, t).then((function() {}), (function() {
						return null
					}))
				}
			},
			Ve = function(e, t) {
				return function(n) {
					Object(Le.b)("/api/v2/payments/transaction/".concat(e), {
						method: "post",
						params: {
							userID: t
						},
						apiScope: "refreshUserSessionAfterStripePurchase"
					}, n).then((function(e) {
						n(xe.i(e))
					}), (function() {
						return null
					}))
				}
			},
			ze = function(e, t) {
				return function(n) {
					t && Ue.a.set(Object(Le.w)("avgspeed"), e.avgSpeed, Object(Le.i)()), n(xe.y(e))
				}
			},
			We = function(e) {
				return function(t) {
					t(xe.x(e))
				}
			},
			Ye = function(e, t) {
				return function(n) {
					Object(Le.b)("/api/v2/auth/validate-email", {
						method: "post",
						params: {
							hash: e,
							userID: t
						},
						apiScope: "validateEmail"
					}, n).then((function() {
						n(xe.q())
					}), (function() {
						return null
					}))
				}
			},
			Xe = xe.v,
			Ke = xe.l,
			Je = xe.f,
			Qe = xe.e,
			Ze = xe.u,
			$e = xe.a,
			et = xe.p,
			tt = xe.o,
			nt = xe.j,
			rt = xe.k,
			ot = xe.m,
			at = xe.w,
			it = xe.c,
			st = xe.z,
			ct = xe.A,
			lt = xe.b,
			ut = xe.s,
			pt = xe.h,
			ft = xe.r,
			dt = xe.g,
			mt = xe.d,
			ht = xe.t;
		t.a = je
	},
	90: function(e) {
		e.exports = JSON.parse('{"Nitros":"Nitros","Cash":"Cash"}')
	},
	91: function(e, t) {}
});
//# sourceMappingURL=ga.js.map
