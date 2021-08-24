class UsersController < ApplicationController
    def home
        render component: "Home", props: { info: "This is a test!" }
    end
end
