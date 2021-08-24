class UsersController < ApplicationController

    def home
        render component: "Home"
    end

    def show_all
        render component: "Users", props: {users: User.all}
    end

    def new
        render component: "UserNew"
    end

    def show
        user = (User.find(params[:id]))

        render component: "User", props: {user: user}
    end

    def edit
        user = (User.find(params[:id]))
        render component: "UserEdit", props: {user: user}
    end

    # def create
    # end

    # def update
    # end

    # def destroy
    # end
end
