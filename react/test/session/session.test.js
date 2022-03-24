import moxios from "moxios";
import sinon from "sinon";
import { fetchTtl, RefreshSession, LogoutSession } from "../../session";

describe("Session management", () => {
    describe("Fetch TTL", () => {
        beforeEach(() => {
            moxios.install();
        });

        afterEach(() => {
            moxios.uninstall();
        });

        test("handles a successful fetch for time_remaining", (done) => {
            const exp = 1393286893;
            const date = new Date(exp * 1000);
            const remaining = 240000;

            moxios.stubRequest("/api/auth/sessions/ttl", {
                status: 200,
                responseText: JSON.stringify({
                    data: {
                        ttl: exp,
                        time_remaining: remaining,
                    },
                }),
            });

            fetchTtl("fakeToken").then((expiry) => {
                expect(expiry).toBe(remaining);
                done();
            });
        });

        test("handles backward-compat fetch for TTL", (done) => {
            const exp = 1393286893;
            const date = new Date(exp * 1000);

            moxios.stubRequest("/api/auth/sessions/ttl", {
                status: 200,
                responseText: JSON.stringify({
                    data: {
                        ttl: exp,
                    },
                }),
            });

            fetchTtl("fakeToken").then((expiry) => {
                expect(expiry.getTime()).toBe(date.getTime());
                done();
            });
        });

        test("throws an error on 400", (done) => {
            moxios.stubRequest("/api/auth/sessions/ttl", {
                status: 400,
                responseText: JSON.stringify({
                    error: "error text",
                }),
            });

            fetchTtl("fakeToken").catch((error) => {
                expect(error.response.status).toBe(400);
                done();
            });
        });
    });

    describe("Logout session", () => {
        beforeEach(() => {
            moxios.install();
        });

        afterEach(() => {
            moxios.uninstall();
        });

        test("Handles a successful logout", (done) => {
            window.document.cookie = "qpp_auth_token=testing";

            moxios.stubRequest("/user/session-logout", {
                status: 200,
                responseText: "Hello",
            });

            let onFulfilled = sinon.spy();
            let onFailed = sinon.spy();

            Promise.resolve(LogoutSession(window))
                .then(() => {
                    expect(onFulfilled.called).toBe(true);
                    expect(onFailed.called).toBe(false);
                })
                .catch((error) => {
                    done();
                });
        });

        test("Handles a 400 Response on logout", (done) => {
            window.document.cookie = "qpp_auth_token=testing";

            moxios.stubRequest("/user/session-logout", {
                status: 400,
                responseText: "Hello",
            });

            let onFulfilled = sinon.spy();
            let onFailed = sinon.spy();

            Promise.resolve(LogoutSession(window))
                .then(() => {
                    expect(onFulfilled.called).toBe(false);
                    expect(onFailed.called).toBe(true);
                })
                .catch((error) => {
                    done();
                });
        });

        test("Handles a 401 Response on logout", (done) => {
            window.document.cookie = "qpp_auth_token=testing";

            moxios.stubRequest("/user/session-logout", {
                status: 401,
                responseText: "Hello",
            });

            let onFulfilled = sinon.spy();
            let onFailed = sinon.spy();

            Promise.resolve(LogoutSession(window))
                .then(() => {
                    expect(onFulfilled.called).toBe(false);
                    expect(onFailed.called).toBe(true);
                })
                .catch((error) => {
                    done();
                });
        });
    });

    describe("Refresh session", () => {
        beforeEach(() => {
            moxios.install();
        });

        afterEach(() => {
            moxios.uninstall();
        });

        test("Handles a successful refresh", () => {
            window.document.cookie = "qpp_auth_token=testing";

            moxios.stubRequest("/api/auth/sessions/refresh", {
                status: 200,
                responseText: "Hello",
            });

            let onFulfilled = sinon.spy();
            let onFailed = sinon.spy();

            Promise.resolve(
                RefreshSession({
                    onSuccess: onFulfilled,
                    onError: onFailed,
                    window: window,
                })
            ).then(() => {
                expect(onFulfilled.called).toBe(true);
                expect(onFailed.called).toBe(false);
            });
        });

        test("Handles a 400 response on refresh", () => {
            window.document.cookie = "qpp_auth_token=testing";

            moxios.stubRequest("/api/auth/sessions/refresh", {
                status: 400,
                responseText: "Hello",
            });

            let onFulfilled = sinon.spy();
            let onFailed = sinon.spy();

            Promise.resolve(
                RefreshSession({
                    onSuccess: onFulfilled,
                    onError: onFailed,
                    window,
                })
            ).then(() => {
                expect(onFulfilled.called).toBe(false);
                expect(onFailed.called).toBe(true);
            });
        });

        test("Handles a 401 response on refresh", () => {
            window.document.cookie = "qpp_auth_token=testing";

            moxios.stubRequest("/api/auth/sessions/refresh", {
                status: 401,
                responseText: "Hello",
            });

            let onFulfilled = sinon.spy();
            let onFailed = sinon.spy();

            Promise.resolve(
                RefreshSession({
                    onSuccess: onFulfilled,
                    onError: onFailed,
                    window,
                })
            ).then(() => {
                expect(onFulfilled.called).toBe(false);
                expect(onFailed.called).toBe(true);
            });
        });
    });
});
