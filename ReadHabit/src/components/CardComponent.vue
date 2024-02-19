<template>
    <div class="container card-component">
        <div class="card-columns">
            <div class="card">
                <a href="#">
                    <img class="card-img-top"
                        src="https://images.unsplash.com/photo-1535025639604-9a804c092faa?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6cb0ceb620f241feb2f859e273634393&auto=format&fit=crop&w=500&q=80"
                        alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">Lorem ipsum dolor sit amet.</h5>
                        <p class="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium ad alias, aliquid amet
                            aspernatur atque culpa cum debitis dicta doloremque, dolorum ea eos et excepturi explicabo
                            facilis harum illo impedit incidunt laborum laudantium...
                        </p>
                        <p class="card-text">
                            <small class="text-muted">
                                <div class="flex">
                                    <div class="d-flex flex-row">
                                        <i class="fas fa-eye"></i>
                                        <span>1000</span>
                                    </div>
                                    <div class="d-flex flex-row">
                                        <i class="far fa-user"></i>
                                        <span>admin</span>
                                    </div>
                                    <div class="d-flex flex-row">
                                        <i class="fas fa-calendar-alt"></i>
                                        <span>Jan 20, 2018</span>
                                    </div>
                                </div>
                            </small>
                        </p>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<style>
h1 {
    color: #fff;
    padding: 10px 0;
}

.card-component {
    margin-top: 50px;
}

.card {
    width: 300px;

    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    border: none;

    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.4);
    }

    a {
        color: initial;

        &:hover {
            text-decoration: initial;
        }
    }


}

span {
    margin: 10px;
}

.flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
</style>