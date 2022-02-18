<?php
namespace Reddit\Subreddit\Model;

use Doctrine\ORM\Mapping as ORM;

/**
* @ORM\Entity
* @ORM\Table(name="Subreddit_Usuario")
*/
class SubredditUsuario
{
    /**
    * @ORM\Id @ORM\Column(type="integer")
    * @ORM\GeneratedValue
    * @var integer
    */
    private $id_subreddit_usuario;

    /**
    * @ORM\ManyToOne(targetEntity="Reddit\Usuario\model\Usuario", inversedBy="id_subreddit_usuario")
    * @ORM\JoinColumn(name="id_usuario", referencedColumnName="id_usuario", nullable=false)
    */
    private $id_usuario;

    /**
    * @ORM\ManyToOne(targetEntity="Reddit\Subreddit\model\Subreddit", inversedBy="id_subreddit_usuario")
    * @ORM\JoinColumn(name="id_subreddit", referencedColumnName="id_subreddit", nullable=false)
    */
    private $id_subreddit;

    /**
    * @ORM\Column(type="string", length=1)
    *
    * @var string
    */
    private $moderador;

    /**
    * @ORM\Column(type="string", length=1)
    *
    * @var string
    */
    private $criador;

    /**
     * Get idSubredditUsuario.
     *
     * @return int
     */
    public function getIdSubredditUsuario()
    {
        return $this->id_subreddit_usuario;
    }

    /**
     * Set moderador.
     *
     * @param string $moderador
     *
     * @return SubredditUsuario
     */
    public function setModerador($moderador)
    {
        $this->moderador = $moderador;

        return $this;
    }

    /**
     * Get moderador.
     *
     * @return string
     */
    public function getModerador()
    {
        return $this->moderador;
    }

    /**
     * Set criador.
     *
     * @param string $criador
     *
     * @return SubredditUsuario
     */
    public function setCriador($criador)
    {
        $this->criador = $criador;

        return $this;
    }

    /**
     * Get criador.
     *
     * @return string
     */
    public function getCriador()
    {
        return $this->criador;
    }

    /**
     * Set idUsuario.
     *
     * @param \Reddit\Usuario\model\Usuario $idUsuario
     *
     * @return SubredditUsuario
     */
    public function setIdUsuario(\Reddit\Usuario\model\Usuario $idUsuario)
    {
        $this->id_usuario = $idUsuario;

        return $this;
    }

    /**
     * Get idUsuario.
     *
     * @return \Reddit\Usuario\model\Usuario
     */
    public function getIdUsuario()
    {
        return $this->id_usuario;
    }

    /**
     * Set idSubreddit.
     *
     * @param \Reddit\Subreddit\model\Subreddit $idSubreddit
     *
     * @return SubredditUsuario
     */
    public function setIdSubreddit(\Reddit\Subreddit\model\Subreddit $idSubreddit)
    {
        $this->id_subreddit = $idSubreddit;

        return $this;
    }

    /**
     * Get idSubreddit.
     *
     * @return \Reddit\Subreddit\model\Subreddit
     */
    public function getIdSubreddit()
    {
        return $this->id_subreddit;
    }
}
