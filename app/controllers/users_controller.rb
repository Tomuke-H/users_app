class UsersController < ApplicationController

    def home
        render component: "Home"
    end

    def show_all
        render component: "Users"
    end

    def new
        render component: "UserNew"
    end

    def show
        render component: "User"
    end

    def edit
        render component: "UserEdit"
    end

    # def create
    # end

    # def update
    # end

    # def destroy
    # end
end
