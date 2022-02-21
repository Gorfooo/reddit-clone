<?php

declare(strict_types=1);

namespace User\Controller;

use Laminas\Mvc\Controller\AbstractActionController;
use Laminas\View\Model\JsonModel;
use Entities\Usuario\Model\Usuario;
use Application\SetEntityManager;

class UserController extends AbstractActionController
{
    public function __construct()
    {
        $this->em = new SetEntityManager();
        $this->entityManager = $this->em->GetEntityManager();
    }

    public function createAction($userData = null)
    {              
        $userData = (object) [
            'nome' => 'usuario',
            'email' => 'email',
            'senha' => '1',
            'esconder_online' => 'N',
            'karma' => '0',
            'nascimento' => '2000-01-01',
        ];

        $user = new Usuario();
        $user->setNome($userData->nome);
        $user->setEmail($userData->email);
        $user->setSenha($userData->senha);
        $user->setEsconderOnline($userData->esconder_online);
        $user->setKarma($userData->karma);
        $user->setNascimento(\DateTime::createFromFormat('Y-m-d', $userData->nascimento));

        $this->entityManager->persist($user);
        $this->entityManager->flush();

        return new JsonModel(array('teste' => 'Usuário criado'));
    }

    public function updateAction($userData = null)
    {

    }
}