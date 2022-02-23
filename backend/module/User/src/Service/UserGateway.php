<?php

namespace User\Service;
use Application\SetEntityManager;

class UserGateway
{
    public function __construct()
    {
        $this->em = new SetEntityManager();
        $this->entityManager = $this->em->GetEntityManager();
    }

    public function createUser($user)
    {
        $this->entityManager->persist($user);
        $this->entityManager->flush();
    }
}