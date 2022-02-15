<?php
namespace Reddit\Usuario\Model;

use Doctrine\ORM\Mapping as ORM;

/**
* @ORM\Entity
* @ORM\Table(name="Usuario")
*/
class Usuario
{
    /**
    * @ORM\Id @ORM\Column(type="integer")
    * @ORM\GeneratedValue
    * @var integer
    */
    protected $id_usuario;

    /**
    * @ORM\Column(type="string", length=40)
    *
    * @var string
    */
    private $nome;

    /**
    * @ORM\Column(type="string", length=200, nullable=true)
    *
    * @var string
    */
    private $banner;

    /**
    * @ORM\Column(type="string", length=60)
    *
    * @var string
    */
    private $email;

    /**
    * @ORM\Column(type="string", length=200, nullable=true)
    *
    * @var string
    */
    private $foto;

    /**
    * @ORM\Column(type="string", length=1)
    *
    * @var string
    */
    private $esconder_online;

    /**
    * @ORM\Column(type="string", length=200, nullable=true)
    *
    * @var string
    */
    private $sobre;

    /**
    * @ORM\Column(type="integer")
    *
    * @var string
    */
    private $karma;

    /**
    * @ORM\Column(type="string", length=25)
    *
    * @var string
    */
    private $senha;

    /**
    * @ORM\Column(type="date")
    *
    * @var string
    */
    private $nascimento;

    /**
    * @ORM\OneToMany(targetEntity="Reddit\Posts\model\PostComentarioResposta", mappedBy="id_usuario")
    */
    private $id_resposta;

    /**
    * @ORM\OneToMany(targetEntity="Reddit\Posts\model\PostComentario", mappedBy="id_usuario")
    */
    private $id_comentario;

    /**
    * @ORM\OneToMany(targetEntity="Reddit\Posts\model\Post", mappedBy="id_usuario")
    */
    private $id_post;

    /**
    * @ORM\OneToMany(targetEntity="Reddit\Posts\model\PostAcoes", mappedBy="id_usuario")
    */
    private $id_post_acoes;

    /**
    * @ORM\OneToMany(targetEntity="Reddit\Aplicacao\Model\Denuncia", mappedBy="id_usuario")
    */
    private $id_denuncia;

    /**
    * @ORM\OneToMany(targetEntity="Reddit\Subreddit\Model\SolicitacaoModerador", mappedBy="id_usuario")
    */
    private $id_solicitacao_moderador;

    /**
    * @ORM\OneToMany(targetEntity="Reddit\Subreddit\Model\SubredditUsuario", mappedBy="id_usuario")
    */
    private $id_subreddit_usuario;
}
