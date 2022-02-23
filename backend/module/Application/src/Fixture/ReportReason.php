<?php

namespace Application\Fixture;

use Doctrine\Persistence\ObjectManager;
use Doctrine\Common\DataFixtures\FixtureInterface;
use Entities\Aplicacao\Model\MotivoDenuncia;

class ReportReason implements FixtureInterface
{
    private $data = array(
        0 => array(
            'description' => 'Viola as regras dessa comunidade',
        ),
        1 => array(
            'description' => 'Assédio',
        ),
        2 => array(
            'description' => 'Ameaça de violência',
        ),
        3 => array(
            'description' => 'Ódio',
        ),
        4 => array(
            'description' => 'Sexualização de menores de idade',
        ),
        5 => array(
            'description' => 'Compartilhamento de informações pessoais',
        ),
        6 => array(
            'description' => 'Pornografia involuntária',
        ),
        7 => array(
            'description' => 'Transações proibidas',
        ),
        8 => array(
            'description' => 'Falsidade ideológica',
        ),
        9 => array(
            'description' => 'Violação de direitos autorais',
        ),
        10 => array(
            'description' => 'Automutilação ou suicídio',
        ),
        11 => array(
            'description' => 'Spam',
        ),
        12 => array(
            'description' => 'Desinformação',
        ),
    );

    public function load(ObjectManager $manager)
    {
        foreach ($this->data as $d) {
            $reportReason = new MotivoDenuncia;
            $reportReason->setDescricao($d['description']);
            $manager->persist($reportReason);
        }
        $manager->flush();
    }
}