$(".count").each(function(index) {

    if ( (typeof this.nextSibling) != 'undefined'){
        switch(this.nextSibling.nodeValue.trim()){
            case 'Answers':
                this.nextSibling.data = ' manos me devem uma breja';
                break;
            case 'Reputation':
                this.nextSibling.data = ' de reputação no gueto dos nerd';
                break;
            case 'Questions':
                this.nextSibling.data = ' paradas que não sabia e agora sei';
                break;
            case 'Tags':
                this.nextSibling.data = ' assuntos pa toca po pai';
                break;
            case 'Accounts':
                this.nextSibling.data = ' otros saite';
                break;
            case 'Badges':
                this.nextSibling.data = ' meus bagulinhos';
                break;
            case 'Active bounties':
                this.nextSibling.data = ' Recopensas q to dano';
                break;
            case 'Votes Cast':
                this.nextSibling.data = ' noqvotei [tan dóu fo wut]';
                break;
        }
    }
});