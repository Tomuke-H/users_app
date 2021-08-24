class BirdsController < ApplicationController

    def show_all
        render component: "Birds", props: {birds: Bird.all}
    end

    def new
        render component: "BirdNew"
    end

    def show
        bird = (Bird.find(params[:id]))

        render component: "Bird", props: {bird: bird}
    end

    def edit
        bird = (Bird.find(params[:id]))
        render component: "BirdEdit", props: {bird: bird}
    end

    def create
        bird = Bird.new(birds_params)

        if bird.save
            redirect_to birds_path
        end
    end

    def update
        bird = (Bird.find(params[:id]))

        if bird.update(birds_params)
            redirect_to birds_path
        end
    end

    def destroy
        bird = Bird.find(params[:id])
        bird.destroy

        redirect_to birds
    end

    private

    def birds_params
        params.require(:bird).permit(:name, :type)
    end
end
