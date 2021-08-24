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

    def create
        user = User.new(users_params)

        if user.save
            redirect_to users_path
        end
    end

    def update
        user = (User.find(params[:id]))

        if user.update(users_params)
            redirect_to users_path
        end
    end

    def destroy
        user = User.find(params[:id])
        user.destroy

        redirect_to users_path
    end

    private

    def users_params
        params.require(:user).permit(:name, :age)
    end
end
